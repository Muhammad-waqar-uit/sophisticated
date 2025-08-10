"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
  faReact,
  faAngular,
  faNodeJs,
  faPython,
  faPhp,
  faLaravel,
  faAws,
  faGitAlt,
  faAndroid,
  faApple,
  faSwift,
  faJava,
  faGoogle,
  faStripe,
  faNpm,
  faGithub,
  faDocker,
  faLinux,
  faFigma,
  faSass,
  faBootstrap,
  faYarn,
  faJenkins,
  faSlack,
  faTrello,
  faJira,
  faGooglePlay,
  faAppStoreIos,
  faChrome,
  faFirefoxBrowser,
  faEdge,
  faOpera,
  faWindows,
  faUbuntu,
  faCentos,
  faRedhat,
  faDigitalOcean,
  faGitlab,
  faBitbucket,
  faStackOverflow,
  faYarn as faYarnBrand,
  faNpm as faNpmBrand,
  faStripe as faStripeBrand,
  faMdb,
  faFlutter,
  faJenkins as faJenkinsBrand,
  faApple as faAppleBrand,
  faGoogleDrive,
  faMicrosoft,
  faSlack as faSlackBrand,
  faTrello as faTrelloBrand,
  faJira as faJiraBrand,
  faBitbucket as faBitbucketBrand,
  faStackOverflow as faStackOverflowBrand,
  faDocker as faDockerBrand,
  faLinux as faLinuxBrand,
  faUbuntu as faUbuntuBrand,
  faCentos as faCentosBrand,
  faRedhat as faRedhatBrand,
  faDigitalOcean as faDigitalOceanBrand,
  faFigma as faFigmaBrand,
  faSass as faSassBrand,
  faBootstrap as faBootstrapBrand,
  faChrome as faChromeBrand,
  faFirefoxBrowser as faFirefoxBrand,
  faEdge as faEdgeBrand,
  faOpera as faOperaBrand,
  faWindows as faWindowsBrand,
  faMdb as faMdbBrand,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faCloud, faCreditCard, faServer, faGem, faLeaf, faChartBar, faEye, faFeather, faCat, faBolt, faWind, faCrown, faCube, faCubes, faShieldAlt, faLock, faEnvelope, faUser, faUsers, faFileCode, faCodeBranch, faBug, faRocket, faSync, faTerminal, faTools, faWrench, faCog, faCogs, faLaptopCode, faMobileAlt, faTabletAlt, faDesktop, faCloudUploadAlt, faCloudDownloadAlt, faCloudSun, faCloudMoon, faCloudRain, faCloudShowersHeavy, faCloudMeatball, faCloudSunRain, faCloudMoonRain, faCloudBolt, faCloudArrowUp, faCloudArrowDown, faCloudUpload, faCloudDownload, faCloudUploadAlt as faCloudUploadAltSolid, faCloudDownloadAlt as faCloudDownloadAltSolid, faCloudSun as faCloudSunSolid, faCloudMoon as faCloudMoonSolid, faCloudRain as faCloudRainSolid, faCloudShowersHeavy as faCloudShowersHeavySolid, faCloudMeatball as faCloudMeatballSolid, faCloudSunRain as faCloudSunRainSolid, faCloudMoonRain as faCloudMoonRainSolid, faCloudBolt as faCloudBoltSolid, faCloudArrowUp as faCloudArrowUpSolid, faCloudArrowDown as faCloudArrowDownSolid, faCloudUpload as faCloudUploadSolid, faCloudDownload as faCloudDownloadSolid, faFeather as faFeatherSolid, faGem as faGemSolid, faCat as faCatSolid, faWind as faWindSolid, faCrown as faCrownSolid, faCube as faCubeSolid, faCubes as faCubesSolid, faShieldAlt as faShieldAltSolid, faLock as faLockSolid, faEnvelope as faEnvelopeSolid, faUser as faUserSolid, faUsers as faUsersSolid, faFileCode as faFileCodeSolid, faCodeBranch as faCodeBranchSolid, faBug as faBugSolid, faRocket as faRocketSolid, faSync as faSyncSolid, faTerminal as faTerminalSolid, faTools as faToolsSolid, faWrench as faWrenchSolid, faCog as faCogSolid, faCogs as faCogsSolid, faLaptopCode as faLaptopCodeSolid, faMobileAlt as faMobileAltSolid, faTabletAlt as faTabletAltSolid, faDesktop as faDesktopSolid, faCreditCard as faCreditCardSolid } from "@fortawesome/free-solid-svg-icons"
// Inline SVG components for missing icons (Next.js & GraphQL etc.)
const NextIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Next.js">
    <path fill="currentColor" d="M64 0c35.3 0 64 28.7 64 64s-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0Zm21.7 95.3L55.6 48.2v47.1h-6.4V32.7h6.4l30.6 46.4V32.7h6.4v62.6h-6.9Z" />
  </svg>
)
const GraphQLIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={className} role="img" aria-label="GraphQL">
    <g fill="currentColor">
      <path d="M57 302 43 294l157-272 14 8z"/>
      <path d="M37 273h326v16H37z"/>
      <path d="M200 367 43 277l7-12h300l7 12z"/>
      <path d="m343 302-14 8L172 38l14-8z"/>
      <path d="M57 98h286v16H57z"/>
      <path d="M200 33c-18 0-33-15-33-33s15-33 33-33 33 15 33 33-15 33-33 33Zm0 400c-18 0-33-15-33-33s15-33 33-33 33 15 33 33-15 33-33 33ZM0 200c0-18 15-33 33-33s33 15 33 33-15 33-33 33S0 218 0 200Zm334 0c0-18 15-33 33-33s33 15 33 33-15 33-33 33-33-15-33-33ZM57 98c-10 0-19-8-19-19s9-19 19-19 19 8 19 19-9 19-19 19Zm286 0c-10 0-19-8-19-19s9-19 19-19 19 8 19 19-9 19-19 19ZM57 321c-10 0-19-9-19-19 0-11 9-19 19-19s19 8 19 19c0 10-9 19-19 19Zm286 0c-10 0-19-9-19-19 0-11 9-19 19-19s19 8 19 19c0 10-9 19-19 19Z"/>
    </g>
  </svg>
)

const techStacks = {
  "front-end": [
    { name: "HTML", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
    { name: "Vue Js", icon: faVuejs, color: "text-green-500" },
    { name: "React Js", icon: faReact, color: "text-cyan-400" },
    { name: "Angular Js", icon: faAngular, color: "text-red-500" },
    { name: "Next.Js", custom: NextIcon, color: "text-white" },
    { name: "D3 Js", icon: faChartBar, color: "text-orange-400" },
    { name: "JQuery", icon: faJs, color: "text-blue-400" },
    { name: "TypeScript", icon: faJs, color: "text-blue-600" },
    { name: "GraphQL", custom: GraphQLIcon, color: "text-pink-500" },
    { name: "Tailwind", icon: faWind, color: "text-cyan-400" },
  ],
  "back-end": [
    { name: "Node Js", icon: faNodeJs, color: "text-green-500" },
    { name: "Ruby", icon: faGem, color: "text-red-600" },
    { name: "Django", icon: faPython, color: "text-green-600" },
    { name: "Express Js", icon: faNodeJs, color: "text-lime-400" },
    { name: "ASP.NET", icon: faWindows, color: "text-blue-500" },
    { name: "Laravel", icon: faLaravel, color: "text-red-500" },
    { name: "AWS", icon: faAws, color: "text-orange-500" },
    { name: "SQL", icon: faDatabase, color: "text-blue-400" },
    { name: "Firebase", icon: faBolt, color: "text-yellow-400" },
    { name: "Mongo DB", icon: faLeaf, color: "text-green-500" },
    { name: "Stripe", icon: faStripe, color: "text-purple-500" },
    { name: "Nest.Js", icon: faCat, color: "text-red-500" },
  ],
  mobile: [
    { name: "Flutter", icon: faFlutter, color: "text-blue-400" },
    { name: "Android", icon: faAndroid, color: "text-green-500" },
    { name: "iOS App", icon: faApple, color: "text-gray-200" },
    { name: "Firebase", icon: faBolt, color: "text-yellow-400" },
    { name: "React Native", icon: faReact, color: "text-cyan-400" },
    { name: "Swift", icon: faSwift, color: "text-orange-500" },
    { name: "Stripe", icon: faStripe, color: "text-purple-500" },
    { name: "Lottie", icon: faFeather, color: "text-pink-400" },
    { name: "Java", icon: faJava, color: "text-orange-600" },
    { name: "Kotlin", icon: faCodeBranch, color: "text-purple-500" },
    { name: "Google Analytics", icon: faGoogle, color: "text-yellow-600" },
    { name: "Sentry", icon: faEye, color: "text-purple-400" },
  ],
} as const

export default function TechStackShowcase() {
  const [activeTab, setActiveTab] = useState<keyof typeof techStacks>("front-end")

  return (
    <section className="relative w-full bg-[#0d0d0d]">
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              We Used Advance
              <br />
              <span className="text-gray-300">TECHNOLOGY</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-300 text-lg lg:text-xl max-w-xl leading-relaxed">
              Offer a wide range of services to help businesses establish and enhance their online presence.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-5 mb-14">
          {(Object.keys(techStacks) as Array<keyof typeof techStacks>).map((tab) => {
            const active = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 h-11 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-black ring-yellow-400/50 ${
                  active ? "bg-yellow-400 text-black" : "bg-[#181818] text-gray-200 hover:bg-[#222]"
                }`}
              >
                <span className="capitalize">{tab.replace("-", "-")}</span>
                {/* Notch */}
                <span
                  className={`absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-yellow-400 border-l-transparent border-r-transparent ${
                    active ? "block" : "hidden"
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStacks[activeTab].map((tech) => {
            const Custom = (tech as any).custom as
              | ((p: { className?: string }) => JSX.Element)
              | undefined
            return (
              <div
                key={tech.name}
                className="group relative flex flex-col items-center justify-center h-36 rounded-2xl bg-[#141414] border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all"
              >
                <div className="mb-4 flex items-center justify-center">
                  {Custom ? (
                    <Custom className={`w-10 h-10 ${tech.color}`} />
                  ) : tech.icon ? (
                    <FontAwesomeIcon icon={tech.icon} className={`text-4xl ${tech.color}`} />
                  ) : (
                    <span className={`text-3xl font-semibold ${tech.color}`}>{tech.name[0]}</span>
                  )}
                </div>
                <p className="text-gray-300 text-xs font-medium tracking-wide group-hover:text-white transition-colors text-center px-2">
                  {tech.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { IconCloud } from "@/components/magicui/icon-cloud";

// const slugs = [
//   "typescript",
//   "javascript",
//   "dart",
//   "java",
//   "react",
//   "flutter",
//   "android",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "prisma",
//   "amazonaws",
//   "postgresql",
//   "firebase",
//   "nginx",
//   "vercel",
//   "testinglibrary",
//   "jest",
//   "cypress",
//   "docker",
//   "git",
//   "jira",
//   "github",
//   "gitlab",
//   "visualstudiocode",
//   "androidstudio",
//   "sonarqube",
//   "figma",
// ];

// export function IconCloudDemo() {
//   const images = slugs.map(
//     (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
//   );

//   return (
//     <div className="relative flex size-full items-center justify-center overflow-hidden">
//       <IconCloud images={images} />
//     </div>
//   );
// }
