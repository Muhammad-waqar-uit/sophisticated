"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    author: "Sarah Johnson",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Building Scalable Cloud Architecture: Best Practices",
    excerpt:
      "Learn how to design and implement cloud solutions that grow with your business needs and handle increasing loads.",
    author: "Michael Chen",
    date: "Dec 12, 2023",
    readTime: "8 min read",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "AI Integration in Modern Applications: A Practical Guide",
    excerpt:
      "Discover how to seamlessly integrate artificial intelligence into your applications to enhance user experience.",
    author: "Emily Rodriguez",
    date: "Dec 10, 2023",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Mobile-First Design: Creating Apps Users Love",
    excerpt: "Master the principles of mobile-first design to create intuitive and engaging mobile applications.",
    author: "David Kim",
    date: "Dec 8, 2023",
    readTime: "4 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Cybersecurity in the Digital Age: Protecting Your Assets",
    excerpt: "Essential cybersecurity practices every business should implement to protect against modern threats.",
    author: "Sarah Johnson",
    date: "Dec 5, 2023",
    readTime: "7 min read",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Data Analytics: Turning Information into Insights",
    excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",
    author: "Michael Chen",
    date: "Dec 3, 2023",
    readTime: "6 min read",
    category: "Data Analytics",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const categories = [
  "All",
  "Web Development",
  "Cloud Computing",
  "Artificial Intelligence",
  "Mobile Development",
  "Cybersecurity",
  "Data Analytics",
]

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights from our team of experts in software
            development and technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 ? "bg-blue-500 text-white" : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="relative h-64 md:h-full">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
              <motion.button
                className="flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                <motion.button
                  className="flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300 text-sm"
                  whileHover={{ x: 3 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
