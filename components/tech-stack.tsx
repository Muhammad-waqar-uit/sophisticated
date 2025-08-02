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
const techStacks = {
  "front-end": [
    { name: "HTML", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-500" },
    { name: "Vue Js", icon: faVuejs, color: "text-green-500" },
    { name: "React Js", icon: faReact, color: "text-cyan-500" },
    { name: "Angular Js", icon: faAngular, color: "text-red-500" },
    { name: "Next.JS", icon: faReact, color: "text-white" }, // No official FA icon, using React
    { name: "D3 Js", icon: faChartBar, color: "text-orange-400" }, // No official FA icon, using chart
    { name: "JQuery", icon: faJs, color: "text-blue-400" }, // No official FA icon, using JS
    { name: "TypeScript", icon: faJs, color: "text-blue-600" }, // No official FA icon, using JS
    { name: "GraphQL", icon: "", color: "text-pink-500" },
    { name: "Tailwind", icon: faWind, color: "text-cyan-400" }, // No official FA icon, using wind
  ],
  "back-end": [
    { name: "Node Js", icon: faNodeJs, color: "text-green-500" },
    { name: "Ruby", icon: faGem, color: "text-red-600" },
    { name: "Django", icon: faPython, color: "text-green-600" }, // No official FA icon, using Python
    { name: "Express Js", icon: faNodeJs, color: "text-yellow-500" }, // No official FA icon, using Node
    { name: "ASP.net", icon: faWindows, color: "text-blue-500" }, // No official FA icon, using Windows
    { name: "Laravel", icon: faLaravel, color: "text-red-500" },
    { name: "AWS", icon: faAws, color: "text-orange-500" },
    { name: "SQL", icon: faDatabase, color: "text-blue-400" },
    { name: "Firebase", icon: "", color: "text-yellow-500" },
    { name: "MONGO DB", icon: faLeaf, color: "text-green-500" }, // No official FA icon, using leaf
    { name: "Stripe", icon: faStripe, color: "text-purple-500" },
    { name: "Nest.JS", icon: faCat, color: "text-red-500" }, // No official FA icon, using cat
  ],
  mobile: [
    { name: "Flutter", icon: faFlutter, color: "text-blue-400" },
    { name: "Android", icon: faAndroid, color: "text-green-500" },
    { name: "iOS App", icon: faApple, color: "text-gray-300" },
    { name: "Firebase", icon: "", color: "text-yellow-500" },
    { name: "React Native", icon: faReact, color: "text-cyan-500" },
    { name: "Swift", icon: faSwift, color: "text-orange-500" }, // No official FA icon, using Swift
    { name: "Stripe", icon: faStripe, color: "text-purple-500" },
    { name: "Lottie", icon: faFeather, color: "text-pink-500" }, // No official FA icon, using feather
    { name: "Java", icon: faJava, color: "text-orange-600" },
    { name: "Kotlin", icon: "", color: "text-purple-600" },
    { name: "Google Analytics", icon: faGoogle, color: "text-yellow-600" }, // No official FA icon, using Google
    { name: "Sentry", icon: faEye, color: "text-purple-400" }, // No official FA icon, using eye
  ],
}

export default function TechStackShowcase() {
  const [activeTab, setActiveTab] = useState<keyof typeof techStacks>("front-end")

  return (
        <section className="w-full bg-transparent bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-sm border-white/10">

    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left side - Title */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            We Used Advance
            <br />
            <span className="text-gray-300">TECHNOLOGY</span>
          </h1>
        </div>

        {/* Right side - Description */}
        <div className="flex items-center">
          <p className="text-gray-200 text-xl leading-relaxed">
            Offer a wide range of services to help businesses establish and enhance their online presence.
          </p>
        </div>
      </div>

      {/* Tab Navigation
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {Object.keys(techStacks).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof techStacks)}
            className={`px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ${
              activeTab === tab ? "bg-yellow-500 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", "-")}
          </button>
        ))}
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {techStacks[activeTab].map((tech, index) => (
          <div
            key={tech.name}
            className="group relative bg-gray-800 rounded-2xl p-6 h-32 flex flex-col items-center justify-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-gray-750"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
        <div className="mb-3 flex items-center justify-center">
          {tech.icon && typeof tech.icon !== "string" ? (
            <FontAwesomeIcon icon={tech.icon} className={`text-3xl ${tech.color}`} />
          ) : (
            <div className={`text-3xl ${tech.color}`}>{tech.name[0]}</div>
          )}
        </div>
            <h3 className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
              {tech.name}
            </h3>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>
        ))}

      </div> */}
      {/* <IconCloudDemo radius={600}/> */}
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gray-700 rounded-full opacity-30" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-gray-700 rounded-full opacity-20" />
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
