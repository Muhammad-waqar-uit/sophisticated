"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Globe, Code, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"
import { useActiveSection } from "./Navigation"

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    // { name: "Our Team", href: "#about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" },
    { name: "Blogs", href: "/blogs" },

  ],
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "AI & Automation", href: "/services" },
  ],
  // resources: [
  //   { name: "Case Studies", href: "#" },
  //   { name: "Documentation", href: "#" },
  //   { name: "Support", href: "#" },
  // ],
  // legal: [
    // { name: "Privacy Policy", href: "#" },
    // { name: "Terms of Service", href: "#" },
    // { name: "Cookie Policy", href: "#" },
    // { name: "GDPR", href: "#" },
  // ],
}

const socialLinks = [
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xten-technology", label: "LinkedIn" },
  // { icon: Instagram, href: "#", label: "Instagram" },
]

export default function Footer() {
  const router = useRouter()
  // Use the shared active section state
  const { activeSection, setActiveSection } = useActiveSection()

  const navigateToPage = (href: string) => {
    if (href.startsWith('#')) {
      const sectionName = href.replace('#', '')
      
      if (window.location.pathname !== '/') {
        // If we're not on the home page, first navigate to home page
        window.location.href = '/' + href;
      } else {
        // If we're already on home page, just scroll smoothly
        const element = document.getElementById(sectionName)
        if (element) {
          // First update the active section for a smooth animation
          setActiveSection(sectionName)
          
          // Then scroll to the section
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 10)
        }
      }
    } else {
      // For other pages (blog/services), use regular navigation
      // Extract the route name without leading slash
      const routeName = href.replace('/', '')
      
      // Update the active section first for the animation
      setActiveSection(routeName)
      
      // Use setTimeout to allow the animation to play before navigation
      setTimeout(() => {
        router.push(href)
      }, 100)
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
              <span className="text-2xl font-bold text-white">
                <div
                  className="relative p-0 m-0 flex justify-center items-center cursor-pointer"
                  onClick={() => router.push("/")}
                  title="Go to Home"
                  style={{ display: "inline-block" }}
                >
                  <img src="/logo-x.png" alt="Xten Logo" style={{ height: 50 }} />
                </div>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              We craft cutting-edge software solutions that transform businesses and create extraordinary digital
              experiences for the modern world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:info@xtentechnologies.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                  title="Send Email"
                >
                  info@xtentechnologies.com
                </a>
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
                      onClick={() => navigateToPage(link.href)}
                      className={`relative text-sm transition-colors hover:text-blue-400 ${
                        activeSection === (link.href.startsWith('#') ? link.href.replace("#", "") : link.href.replace("/", "")) 
                          ? "text-blue-400" 
                          : "text-gray-400"
                      }`}
                    >
                      {link.name}
                      {activeSection === (link.href.startsWith('#') ? link.href.replace("#", "") : link.href.replace("/", "")) && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                          layoutId="footerActiveTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
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
