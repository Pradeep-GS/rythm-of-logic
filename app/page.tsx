'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-gray-950 overflow-hidden">
      <div className="w-full h-full absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-30 h-30 lg:w-30 lg:h-30 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-emerald-500 p-2 mx-auto relative group hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative z-10 border border-gray-800">
              <img
                src="/vsb.jpg"
                alt="VSB College Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex-grow text-center lg:text-left">
            <div className="space-y-3 flex flex-col items-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                V.S.B ENGINEERING COLLEGE
              </h1>
              <div className="relative">
                <p className="text-2xl font-semibold text-gray-300 relative z-10">
                  AN AUTONOMOUS INSTITUTION
                </p>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full"></div>
              </div>
            </div>
          </div>

          <div className="order-3 flex-shrink-0">
            <div className="w-40 h-40  rounded-2xl overflow-hidden">
              <img
                src="/Kanal-Photoroom.png"
                alt="Campus Illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 mt-8 w-full">
        <div className="relative group w-[60%] mx-auto">
          <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

            <div className="relative z-10 space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-white to-emerald-400 bg-clip-text text-transparent italic">
                  DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-200 h-90  mx-auto">
        <img src="/rol.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

          <button
            className="relative px-16 py-5 bg-black rounded-xl border border-white/10 leading-none overflow-hidden transition-all duration-300 hover:border-white/20 group-hover:scale-105 active:scale-95"
            onClick={() => router.push("/register")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex items-center gap-3">
              <span className="text-2xl font-black text-white uppercase tracking-[0.2em]">
                START EVENT
              </span>
              <svg
                className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
}