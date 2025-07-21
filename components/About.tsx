"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Target } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Award, label: "Projects Completed", value: "1000+" },
  { icon: Clock, label: "Years Experience", value: "10+" },
  { icon: Target, label: "Success Rate", value: "98%" },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            About TechOrb
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of innovators, designers, and developers dedicated to creating software solutions
            that make a difference in the world.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2014, TechOrb began as a small startup with a big vision: to democratize technology and make
              powerful software solutions accessible to businesses of all sizes.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Over the years, we've grown from a team of 3 to a diverse group of 50+ professionals, but our core mission
              remains the same - creating innovative solutions that drive real results.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to serve clients across 30+ countries, helping them navigate the digital landscape and
              achieve their business goals through cutting-edge technology.
            </p>
          </div>
          <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-300 mb-4">Years of Excellence</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                <p className="text-blue-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
