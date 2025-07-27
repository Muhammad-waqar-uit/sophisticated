"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

const contactInfo = [
	{
		icon: Mail,
		title: "Email Us",
		details: "hello@techorb.com",
		description: "Send us an email anytime",
	},
	{
		icon: Phone,
		title: "Call Us",
		details: "+1 (555) 123-4567",
		description: "Mon-Fri from 8am to 6pm",
	},
	{
		icon: MapPin,
		title: "Visit Us",
		details: "123 Tech Street, Silicon Valley, CA 94000",
		description: "Come say hello at our office",
	},
]

export default function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		company: "",
		service: "",
		message: "",
	})
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formState),
			})

			if (res.ok) {
				setIsSubmitted(true)
				setFormState({ name: "", email: "", company: "", service: "", message: "" })
				setTimeout(() => setIsSubmitted(false), 5000) // Increased timeout for better UX
			} else {
				console.error("Failed to send email")
				// You might want to add error handling here
			}
		} catch (error) {
			console.error("Error submitting form:", error)
			// You might want to add error handling here
		} finally {
			setIsLoading(false)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black">
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Ready to start your next project? Let's discuss how we can help bring your vision to life.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold text-white mb-8">Let's Start a Conversation</h3>
						<div className="space-y-6 mb-8">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.title}
									className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.02 }}
								>
									<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
										<info.icon className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h4 className="text-white font-semibold mb-1">{info.title}</h4>
										<p className="text-blue-400 font-medium mb-1">{info.details}</p>
										<p className="text-gray-400 text-sm">{info.description}</p>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<h4 className="text-white font-semibold mb-3">Why Choose XTen?</h4>
							<ul className="space-y-2 text-gray-300 text-sm">
								<li className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
									<span>10+ years of industry experience</span>
								</li>
								<li className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
									<span>500+ successful projects delivered</span>
								</li>
								<li className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
									<span>24/7 support and maintenance</span>
								</li>
								<li className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
									<span>Agile development methodology</span>
								</li>
							</ul>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold text-white mb-8"> Contact Us</h3>
						<div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
							{!isSubmitted ? (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formState.name}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
												placeholder="John Doe"
												required
											/>
										</div>
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formState.email}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
												placeholder="john@example.com"
												required
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
												Company
											</label>
											<input
												type="text"
												id="company"
												name="company"
												value={formState.company}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
												placeholder="Your Company"
											/>
										</div>
										<div>
											<label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
												Service Interested In
											</label>
											<select
												id="service"
												name="service"
												value={formState.service}
												onChange={handleChange}
												className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
											>
												<option value="" className="bg-gray-800">
													Select a service
												</option>
												<option value="web-development" className="bg-gray-800">
													Web Development
												</option>
												<option value="mobile-development" className="bg-gray-800">
													Mobile Development
												</option>
												<option value="cloud-solutions" className="bg-gray-800">
													Cloud Solutions
												</option>
												<option value="data-analytics" className="bg-gray-800">
													Data Analytics
												</option>
												<option value="cybersecurity" className="bg-gray-800">
													Blockchain Development
												</option>
												<option value="ai-automation" className="bg-gray-800">
													AI & Automation
												</option>
												<option value="custom-solutions" className="bg-gray-800">
													Custom Solutions
												</option>
											</select>
										</div>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
											Project Details *
										</label>
										<textarea
											id="message"
											name="message"
											value={formState.message}
											onChange={handleChange}
											rows={5}
											className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
											placeholder="Tell us about your project requirements, timeline, and any specific needs..."
											required
										/>
									</div>

									<motion.button
										type="submit"
										disabled={isLoading}
										className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 ${
											isLoading ? 'opacity-75 cursor-not-allowed' : ''
										}`}
										whileHover={{ scale: isLoading ? 1 : 1.02 }}
										whileTap={{ scale: isLoading ? 1 : 0.98 }}
									>
										{isLoading ? (
											<motion.div
												className="flex items-center space-x-2"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.2 }}
											>
												<motion.div
													className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
													animate={{ rotate: 360 }}
													transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
												/>
												<span>Sending...</span>
											</motion.div>
										) : (
											<>
												<Send className="w-5 h-5" />
												<span>Send Message</span>
											</>
										)}
									</motion.button>
								</form>
							) : (
								<motion.div
									className="text-center py-12"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6 }}
								>
									<motion.div
										className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
										initial={{ scale: 0, rotate: -180 }}
										animate={{ scale: 1, rotate: 0 }}
										transition={{
											type: "spring",
											stiffness: 260,
											damping: 20,
											duration: 0.6,
										}}
									>
										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.2, duration: 0.3 }}
										>
											<CheckCircle className="w-8 h-8 text-green-400" />
										</motion.div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3, duration: 0.4 }}
									>
										<h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
										<p className="text-gray-300">
											Thank you for reaching out. We'll get back to you within 24 hours.
										</p>
									</motion.div>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
