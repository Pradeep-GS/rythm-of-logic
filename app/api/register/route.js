import { supabaseServer } from "@/lib/supabase-server";

export async function POST(req) {
  try {
    const { name, email, year, department, college, phone, kanal_id } = await req.json();

    console.log('Received data:', { name, email, year, department, college, phone, kanal_id });

    // Validate required fields
    if (!name || !email || !year || !department || !college || !phone || !kanal_id) {
      return new Response(
        JSON.stringify({
          error: "All fields are required",
          received: { name, email, year, department, college, phone, kanal_id }
        }),
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from("users")
      .insert([{
        name,
        email,
        year,
        department,
        college,
        phone,
        kanal_id
      }])
      .select()
      .single();

    console.log('Supabase response - Error:', error);
    console.log('Supabase response - Data:', data);

    if (error) {
      console.error('Full error details:', error);
      let errorMessage = error.message;

      // Check for unique constraint violation (duplicate key)
      if (error.code === '23505') {
        errorMessage = "This user or ID is already registered. Please use a different one.";
      }

      return new Response(
        JSON.stringify({
          error: errorMessage,
          details: error,
          code: error.code
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ user: data }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error.message
      }),
      { status: 500 }
    );
  }
}