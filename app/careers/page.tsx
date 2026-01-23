"use client"

import { motion, Variants } from "framer-motion"
import dynamic from "next/dynamic"
import { 
  Briefcase, 
  Users, 
  Rocket, 
  Heart, 
  Zap, 
  Globe, 
  ArrowRight,
  Mail,
  Code,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { SmoothCursor } from "@/components/ui/smooth-cursor"

// Lazy load Starfield component to improve initial page load
const Starfield = dynamic(() => import("@/components/Starfield"), {
  ssr: false,
  loading: () => null
})

const benefits = [
  {
    icon: Rocket,
    title: "Innovative Projects",
    description: "Work on cutting-edge technology with AI, blockchain, and modern web frameworks"
  },
  {
    icon: Zap,
    title: "Fast-Paced Growth",
    description: "Accelerate your career with opportunities to lead projects and learn new technologies"
  },
  {
    icon: Globe,
    title: "Remote Flexibility",
    description: "Work from anywhere with flexible hours and a supportive remote-first culture"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We prioritize your well-being with generous time off and wellness programs"
  },
  {
    icon: Code,
    title: "Tech Stack Freedom",
    description: "Use the latest tools and frameworks while contributing to architectural decisions"
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "Continuous learning opportunities, mentorship, and clear growth paths"
  }
]

const values = [
  {
    icon: Target,
    title: "Excellence First",
    description: "We deliver high-quality solutions that exceed expectations"
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented teammates in a supportive, inclusive environment"
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "We embrace new ideas and encourage creative problem-solving"
  }
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function CareersPage() {
  const scrollToContact = () => {
    window.location.href = "/#contact"
  }

  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      <SmoothCursor/>
      <Starfield/>
      
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 md:pt-32 pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <Briefcase className="w-10 h-10 text-blue-400" />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
            Join Our Team
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Build the future of technology with passionate innovators
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">No Open Positions Currently</h3>
                <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                  We're not actively hiring right now, but we're always interested in connecting with talented individuals. 
                  Feel free to reach out if you'd like to be considered for future opportunities.
                </p>
                <motion.button
                  onClick={scrollToContact}
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Work With Us */}
      <section className="relative z-10 container mx-auto px-2 py-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Why Work With Us
          </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">
                We're building something special, and we'd love to have you be a part of it
              </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="relative z-10 container mx-auto px-2 py-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Our Values
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-blue-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Future Opportunities?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Even though we're not hiring right now, we'd love to hear from you. 
              Connect with us and we'll keep you in mind for future openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToContact}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Link href="/services">
                <motion.button
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-600 hover:from-purple-400 hover:via-blue-400 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Work
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}