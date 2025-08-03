"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import {Button} from "@/components/moveing-border"
import { ShimmerButton } from "@/components/magicui/shimmer-button";
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Set active section based on current path
    const path = window.location.pathname
    const section = path === "/" ? "home" : path.slice(1)
    setActiveSection(section)
  }, [])

  const navigateToPage = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        // If we're not on the home page, first navigate to home page
        window.location.href = '/' + href;
      } else {
        // If we're already on home page, just scroll
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setIsOpen(false)
    } else {
      // For other pages (blog/services), use regular navigation
      window.location.href = href
      setIsOpen(false)
    }
  }

  const openCalendar = () => {
    window.location.href = 'https://cal.com/xten-technologies/30min?overlayCalendar=true&layout=month_view';
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
           <div className="relative p-0 m-0 flex justify-center items-center">
          <img src="/logo-x.png" alt="Xten Logo" style={{ height: 50 }} />
        </div>

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.href)}
                className={`relative text-lg font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.href.replace("#", "") ? "text-blue-400" : "text-white/80"
                }`}
              >
                {item.name}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            {/* Contact Button */}
            <motion.button
              onClick={openCalendar}
              className="group border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 w-contain flex justify-center item-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Us</span>
            </motion.button>

          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => navigateToPage(item.href)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.href.replace("#", "") ? "text-blue-400" : "text-white/80"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
              {/* Mobile Contact Button */}
              <motion.button
                onClick={openCalendar}
                className="w-full text-left py-2 mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg font-medium transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}