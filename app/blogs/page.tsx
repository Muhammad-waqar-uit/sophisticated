"use client"

import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Starfield from "@/components/Starfield"

const XTENBlogPages = () => {
  const [currentPage, setCurrentPage] = useState('home');

const blogPosts = [
    {
      id: 'ai-chatbots',
      title: 'Building Intelligent AI Chatbots: A Complete Guide for 2026',
      excerpt: 'Discover how AI-powered chatbots are revolutionizing customer service and learn the best practices for implementing them in your business.',
      date: 'January 5, 2026',
      readTime: '8 min read',
      author: 'XTEN Technologies Team',
      category: 'AI & Automation',
      image: '/AIONE-1.png'
    },
    {
      id: 'blockchain-future',
      title: 'The Future of Blockchain: Beyond Cryptocurrency',
      excerpt: 'Explore how blockchain technology is transforming industries beyond crypto, from supply chain to healthcare and digital identity.',
      date: 'January 3, 2026',
      readTime: '10 min read',
      author: 'XTEN Technologies Team',
      category: 'Blockchain Development',
      image: '/BIONE-1.png'
    },
    {
      id: 'ai-automation',
      title: 'Why Your Business Needs AI-Powered Automation in 2026 (And How to Get It Right)',
      excerpt: 'In today\'s fast-evolving digital landscape, businesses that leverage AI aren\'t just staying competitive—they\'re redefining entire industries. Discover why AI-powered automation should be at the core of your 2026 strategy.',
      date: 'January 1, 2026',
      readTime: '7 min read',
      author: 'XTEN Technologies Team',
      category: 'AI & Automation',
      image: '/BTWO-2.png'
    }
  ];

  const BlogHome = () => (
    <div className="min-h-screen bg-transparent text-white">
      <Starfield/>

      <div className="max-w-7xl mx-auto px-6 py-16 pt-[160px]">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Latest Insights
          </h1>
          <p className="text-gray-400 text-lg">
            Explore cutting-edge technology trends and insights from the XTEN team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <div 
              key={post.id}
              className="bg-transparent rounded-2xl overflow-hidden border border-blue-900/30 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
              onClick={() => setCurrentPage(post.id)}
            >
              <div className="w-full aspect-video relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium">
                {post.category}
              </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                  {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                  {post.readTime}
                  </span>
                  <span className="text-cyan-400 group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
            </div>
        </div>
  );

  const AIChatbotsPost = () => (
    <div className="min-h-screen bg-transparent text-white">
    <Starfield/>
    
      <article className="max-w-4xl mx-auto px-6 py-16 pt-[160px]">
        <div className="mb-8">
          <Link 
            href="/blogs"
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium inline-block mb-6">
            AI & Automation
          </span>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Building Intelligent AI Chatbots: A Complete Guide for 2026
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm border-b border-blue-900/30 pb-6">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              XTEN Technologies Team
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 5, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
        </div>

        <div className="h-96 relative rounded-2xl mb-12 overflow-hidden">
          <Image
            src="/AIONE-1.png"
            alt="Building Intelligent AI Chatbots"
            fill
            className="object-contain"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Artificial Intelligence has transformed the way businesses interact with customers. AI chatbots have evolved from simple rule-based systems to sophisticated conversational agents capable of understanding context, emotion, and intent.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">Why AI Chatbots Matter in 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The landscape of customer service has fundamentally changed. Today's consumers expect instant responses, 24/7 availability, and personalized experiences. AI chatbots deliver on all these fronts while reducing operational costs and improving customer satisfaction.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            According to recent industry data, businesses implementing AI chatbots see up to 70% reduction in customer service costs while handling 80% of routine inquiries automatically. This frees up human agents to focus on complex issues that require empathy and creative problem-solving.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">Key Components of Modern AI Chatbots</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Natural Language Processing (NLP)</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            At the core of every intelligent chatbot is robust NLP technology. Modern NLP engines can understand context, detect sentiment, and interpret user intent even when queries are ambiguous or contain grammatical errors. We leverage advanced models like GPT-4, Claude, and custom-trained transformers to ensure accurate comprehension.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Machine Learning Models</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Machine learning allows chatbots to continuously improve from interactions. By analyzing conversation patterns, successful resolutions, and user feedback, ML models adapt and become more effective over time. This creates a self-improving system that gets smarter with every interaction.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Integration Capabilities</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            A chatbot's true power lies in its ability to integrate with existing systems. Whether it's CRM platforms, databases, payment gateways, or analytics tools, seamless integration ensures chatbots can perform actions, retrieve information, and provide comprehensive assistance.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">Implementation Best Practices</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Successful chatbot implementation requires careful planning and execution. Start by identifying specific use cases and pain points in your customer journey. Map out conversation flows, prepare comprehensive training data, and establish clear escalation paths to human agents.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Testing is crucial. Before full deployment, conduct extensive testing with diverse user groups to identify edge cases and refine responses. Monitor key metrics like resolution rate, user satisfaction, and conversation drop-off points to continuously optimize performance.
          </p>

          <div className="bg-transparent border border-cyan-500/30 rounded-xl p-8 my-12">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Ready to Build Your AI Chatbot?</h3>
            <p className="text-gray-300 mb-6">
              At XTEN Technologies, we specialize in creating custom AI chatbot solutions tailored to your business needs. Our team has delivered intelligent conversational agents across industries including e-commerce, healthcare, finance, and customer support.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Get Started Today
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">The Future is Conversational</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            As AI technology continues to advance, chatbots will become even more sophisticated. We're already seeing developments in emotional intelligence, multi-modal interactions combining text, voice, and visual elements, and predictive capabilities that anticipate user needs before they're explicitly stated.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The question is no longer whether to implement AI chatbots, but how quickly you can leverage this technology to stay competitive. The businesses that embrace conversational AI today will be the leaders of tomorrow.
          </p>
        </div>
      </article>
                      </div>
  );

  const BlockchainPost = () => (
    <div className="min-h-screen bg-transparent text-white">
          <Starfield/>


      <article className="max-w-4xl mx-auto px-6 py-16 pt-[160px]">
        <div className="mb-8">
          <Link 
            href="/blogs"
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium inline-block mb-6">
            Blockchain Development
          </span>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            The Future of Blockchain: Beyond Cryptocurrency
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm border-b border-blue-900/30 pb-6">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              XTEN Technologies Team
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 3, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
                      </div>
                    </div>
                    
        <div className="h-96 relative rounded-2xl mb-12 overflow-hidden">
          <Image
            src="/BTWO-1.png"
            alt="The Future of Blockchain"
            fill
            className="object-contain"
                    />
                  </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            While cryptocurrency put blockchain on the map, the technology's potential extends far beyond digital currencies. In 2026, we're witnessing blockchain revolutionize industries from supply chain management to healthcare, creating transparent, secure, and efficient systems that were previously impossible.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-purple-400">Understanding Blockchain's Core Value</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Blockchain technology provides three fundamental benefits that make it invaluable across industries: immutability, transparency, and decentralization. These characteristics create trust in digital interactions without requiring intermediaries, reducing costs and increasing efficiency.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The distributed ledger ensures that once data is recorded, it cannot be altered retroactively. This creates an auditable trail of transactions or events that all parties can verify independently. Combined with smart contracts, blockchain enables automated execution of agreements when predefined conditions are met.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-purple-400">Real-World Applications Beyond Crypto</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Supply Chain Transparency</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Global supply chains are incredibly complex, involving multiple parties across different countries. Blockchain provides end-to-end visibility, allowing companies to track products from manufacture to delivery. This is particularly valuable in industries like pharmaceuticals where counterfeit products pose serious health risks, or in food safety where tracing contamination sources quickly can save lives.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Healthcare Records Management</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Patient data is scattered across multiple healthcare providers, making comprehensive care difficult. Blockchain-based health records give patients control over their data while ensuring doctors have access to complete medical histories. This improves diagnosis accuracy, prevents dangerous drug interactions, and streamlines healthcare delivery while maintaining privacy through cryptographic protection.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Digital Identity Verification</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Identity theft and fraud cost billions annually. Blockchain-based digital identities provide secure, portable credentials that individuals control. Users can prove their identity without exposing sensitive information, sharing only the specific attributes required for each transaction. This is transforming everything from airport security to financial services onboarding.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Smart Contract Automation</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Smart contracts are self-executing agreements with terms directly written into code. They automatically enforce and execute contract terms when conditions are met, eliminating the need for intermediaries. This is revolutionizing industries like real estate, insurance claims processing, and royalty distribution in creative industries.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-purple-400">Implementing Blockchain Solutions</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Successful blockchain implementation starts with identifying specific problems that blockchain solves better than traditional solutions. Not every application needs blockchain—it's most valuable when multiple parties need to share data, trust is difficult to establish, or intermediaries create friction and cost.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Choose the right blockchain platform for your needs. Public blockchains like Ethereum offer maximum decentralization but can be slower and more expensive. Private or consortium blockchains provide faster transactions and better privacy but with reduced decentralization. Hybrid approaches often provide the best balance.
          </p>

          <div className="bg-transparent border border-purple-500/30 rounded-xl p-8 my-12">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Building Blockchain Solutions</h3>
            <p className="text-gray-300 mb-6">
              XTEN Technologies has extensive experience developing blockchain solutions across Ethereum, Polygon, and other major networks. We've built smart contracts, NFT platforms, tokenomics systems, and decentralized applications that solve real business challenges.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Discuss Your Project
            </Link>
      </div>
      
          <h2 className="text-3xl font-bold mt-12 mb-6 text-purple-400">Challenges and Considerations</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            While blockchain offers tremendous potential, it's not without challenges. Scalability remains a concern for public blockchains, though layer-2 solutions are addressing this. Energy consumption, particularly for proof-of-work systems, is another consideration, driving adoption of more efficient consensus mechanisms like proof-of-stake.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Regulatory uncertainty also poses challenges in some jurisdictions. However, as governments worldwide develop clearer frameworks for blockchain technology, this is becoming less of a barrier. Organizations should work with legal experts to ensure compliance while maintaining the benefits of blockchain.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-purple-400">The Road Ahead</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The future of blockchain is about integration with other emerging technologies. Combining blockchain with AI creates intelligent, autonomous systems with transparent decision-making. Integration with IoT enables secure device-to-device transactions. These convergences will unlock entirely new possibilities.
          </p>
          <p className="text-gray-300 leading-relaxed">
            As blockchain matures, we'll see it become invisible infrastructure—powering systems in the background rather than being the headline feature. This is when blockchain will truly realize its potential, creating a more transparent, efficient, and equitable digital economy. The question for businesses isn't whether blockchain will impact their industry, but how quickly they can adapt to leverage its advantages.
          </p>
        </div>
      </article>
    </div>
  );

  const AIAutomationPost = () => (
    <div className="min-h-screen bg-transparent text-white">
      <Starfield/>

      <article className="max-w-4xl mx-auto px-6 py-16 pt-[160px]">
        <div className="mb-8">
          <Link 
            href="/blogs"
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium inline-block mb-6">
            AI & Automation
          </span>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Why Your Business Needs AI-Powered Automation in 2026 (And How to Get It Right)
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm border-b border-blue-900/30 pb-6">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              XTEN Technologies Team
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 1, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>
        </div>

        <div className="h-96 relative rounded-2xl mb-12 overflow-hidden">
          <Image
            src="/BTWO-2.png"
            alt="AI-Powered Automation"
            fill
            className="object-contain"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            In today's fast-evolving digital landscape, businesses that leverage artificial intelligence aren't just staying competitive—they're redefining entire industries. From predictive customer behavior models to intelligent automation pipelines, AI is no longer a luxury; it's a necessity for scalable growth.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            At XTEN Technologies, we've helped startups and enterprises alike integrate purpose-built AI solutions that drive efficiency, reduce costs, and unlock new revenue streams. Here's why AI-powered automation should be at the core of your 2026 strategy—and how to implement it without the guesswork.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">The Real Impact of AI in Modern Business</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Consider these use cases:
          </p>
          <ul className="text-gray-300 leading-relaxed mb-6 list-disc list-inside space-y-2">
            <li>Predictive analytics forecasting inventory needs with 92% accuracy</li>
            <li>NLP-powered chatbots resolving 70% of customer queries without human intervention</li>
            <li>Generative AI automating content creation for marketing, reducing campaign turnaround by 60%</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            These aren't hypotheticals—they're real outcomes from our client engagements.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">Common Pitfalls (And How to Avoid Them)</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Many companies rush into AI without a clear strategy, resulting in wasted resources. The key? Start with business outcomes, not technology. Ask:
          </p>
          <ul className="text-gray-300 leading-relaxed mb-6 list-disc list-inside space-y-2">
            <li>What manual processes drain your team's time?</li>
            <li>Where could real-time insights change decision-making?</li>
            <li>Which customer touchpoints could be personalized at scale?</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-cyan-400">How XTEN Builds Tailored AI Solutions</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We don't offer off-the-shelf AI. Instead, we:
          </p>
          <ul className="text-gray-300 leading-relaxed mb-6 list-disc list-inside space-y-2">
            <li>Conduct deep discovery sessions to align AI with your KPIs</li>
            <li>Develop custom machine learning models trained on your data</li>
            <li>Integrate NLP, generative AI, or predictive systems into your existing stack</li>
            <li>Ensure ethical, explainable, and maintainable AI workflows</li>
          </ul>

          <div className="bg-transparent border border-cyan-500/30 rounded-xl p-8 my-12">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Ready to Automate with Intelligence?</h3>
            <p className="text-gray-300 mb-6">
              AI isn't about replacing humans—it's about empowering them. If you're ready to transform operations, enhance customer experience, and future-proof your business, start your project with XTEN today.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </article>
    </div>
  );

  return (
    <div>
      {currentPage === 'home' && <BlogHome />}
      {currentPage === 'ai-chatbots' && <AIChatbotsPost />}
      {currentPage === 'blockchain-future' && <BlockchainPost />}
      {currentPage === 'ai-automation' && <AIAutomationPost />}
    </div>
  );
};

export default XTENBlogPages;
