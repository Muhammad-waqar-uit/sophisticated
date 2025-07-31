"use client"

import { motion } from "framer-motion"
import { Globe, Code, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    // { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },

  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "AI & Automation", href: "#services" },
  ],
  // resources: [
  //   { name: "Case Studies", href: "#" },
  //   { name: "Documentation", href: "#" },
  //   { name: "Support", href: "#" },
  // ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    // { name: "Cookie Policy", href: "#" },
    // { name: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "")
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className=" bg-black backdrop-blur-md border-b border-white/10 ">
      {/* className="bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-white/10"
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"> */}
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
             
              <span className="text-2xl font-bold text-white"> <div className="relative p-0 m-0 flex justify-center items-center">
          <img src="/main-logo.png" alt="Xten Logo" style={{ height: 50 }}  />
          <span className="text-xl font-bold text-white -left-7 top-[1.5px] relative">TEN</span>
        </div></span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              We craft cutting-edge software solutions that transform businesses and create extraordinary digital
              experiences for the modern world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span> info@xtentechnologies.com </span>
              </div>
              {/* <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div> */}
              {/* <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Silicon Valley, CA</span>
              </div> */}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category === "company"
                  ? "Company"
                  : category === "services"
                    ? "Services"
                    : category === "resources"
                      ? "Resources"
                      : "Legal"}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 XTen. All rights reserved.</div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-white/5 hover:bg-blue-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
