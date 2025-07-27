"use client"

import { Badge } from "@/components/ui/badge"

export default function FreeLancingMarquee() {
  const freelancingPlatforms = [
    { name: "Upwork" },
    { name: "Fiverr" },
    { name: "Freelancer"},
    { name: "PeoplePerHour"},
    { name: "Guru" },
    { name: "FlexJobs" },
    { name: "Contra" },
    { name: "Behance"},
    { name: "SimplyHired"},
  ]

  const duplicatedPlatforms = [...freelancingPlatforms, ...freelancingPlatforms]

  return (
    <section className="w-full bg-transparent py-4 bg-gradient-to-br from-blue-500 to-purple-500  p-8 backdrop-blur-sm border border-white/10">
      <div className="w-full mx-auto overflow-hidden px-4">
        <div className="relative overflow-hidden w-full ">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {duplicatedPlatforms.reverse().map((platform, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-4 px-5 py-2 text-white border border-black rounded-full border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full">
                    
                  </div>
                  <span className="font-medium">{platform.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }

        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
