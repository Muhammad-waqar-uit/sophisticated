"use client"

import { motion, Variants } from "framer-motion"
import {
  Code,
  Smartphone,
  Palette,
  Brain,
  Globe,
  Users,
  Network,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Design Services",
    description:
      "Crafting user-centric digital experiences through UI/UX design, wireframing, and visual systems that convert and retain users.",
    features: [
      "UX Research & Strategy",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Visual Identity Systems",
    ],
  },
  {
    icon: Brain,
    title: "AI Development",
    description:
      "Delivering AI-powered solutions including predictive analytics, NLP, and generative AI models tailored for business automation.",
    features: [
      "Machine Learning Models",
      "NLP & Generative AI",
      "Automation Pipelines",
      "Predictive Analytics",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Developing fast, responsive, and SEO-friendly web applications using modern frameworks like Next.js, Node.js, and React.",
    features: [
      "Next.js / React.js / Node.js",
      "Frontend & Backend Dev",
      "API Integrations",
      "SEO Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building high-performance iOS and Android apps with native and cross-platform technologies for speed and UX.",
    features: [
      "Flutter / React Native",
      "iOS & Android Apps",
      "Backend Integration",
      "ASO & Security",
    ],
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Driving business growth through data-driven SEO, PPC campaigns, content marketing, and full-funnel strategies.",
    features: [
      "SEO & PPC Campaigns",
      "Content Marketing",
      "CRO Optimization",
      "Social Media Strategy",
    ],
  },
  {
    icon: Users,
    title: "IT Staff Augmentation",
    description:
      "Flexible engineering support—hire pre-vetted developers, AI engineers, and product teams to accelerate delivery.",
    features: [
      "Full-Stack Developers",
      "AI/ML Engineers",
      "Agile Team Scaling",
      "Remote Resource Mgmt",
    ],
  },
  {
    icon: Network,
    title: "Blockchain Development",
    description:
      "Building secure, scalable blockchain apps with smart contracts, tokenomics, and Web3 integrations for decentralized innovation.",
    features: [
      "Smart Contract Dev",
      "Asset Tokenization",
      "dApps with Web3.js/Ethers.js",
    ],
  },
]

// Animation variants
const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
}

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
}

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black rounded-3xl"
    >
      <div className="container mx-auto px-6">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive software solutions tailored to meet your unique business needs and drive digital
            transformation.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      custom={i}
                      variants={featureVariants}
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life with our expertise.
            </p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#contact"
                } else {
                  const el = document.getElementById("contact")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
