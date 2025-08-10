"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from "lucide-react"
import Starfield from "@/components/Starfield"

// Blog data structure
const blogPosts = [
//   {
//     id: 1,
//     title: "Introduction to Large Language Models",
//     excerpt: "Discover the fundamentals of LLMs and why they're revolutionizing AI development.",
//     category: "AI Fundamentals",
//     readTime: "5 min read",
//     date: "August 10, 2025",
//     author: "Tech Team",
//     image: "/placeholder.jpg",
//     content: `
//       <h2>The Rise of Large Language Models</h2>
//       <p>Congratulations. You are taking a step in the right direction learning about Large Language Models. This is great. The road ahead is exciting and very perilous. But I can assure you it will be an amazing ride learning about all of the exciting things happening in the wonderful world of AI.</p>
      
//       <p>While libraries and applications such as vLLM and Ollama allow us to host LLMs efficiently without any hassle it is always good to go back to basics so as to learn how these huge libraries may be processing things in the backend.</p>
      
//       <h3>What Are Large Language Models?</h3>
//       <p>Large Language Models are computational behemoths that require serious processing power. Your GPU is the secret weapon that transforms these models from theoretical concepts into practical, responsive AI assistants.</p>
      
//       <h3>The Future of AI</h3>
//       <p>By leveraging GPU acceleration, you can run state-of-the-art language models right on your personal computer, opening up a world of possibilities for developers, researchers, and AI enthusiasts.</p>
//     `
//   },
//   {
//     id: 2,
//     title: "GPU Acceleration for Machine Learning",
//     excerpt: "Learn why GPU acceleration is crucial for running LLMs efficiently on your local machine.",
//     category: "Hardware",
//     readTime: "7 min read",
//     date: "August 9, 2025",
//     author: "Tech Team",
//     image: "/placeholder.jpg",
//     content: `
//       <h2>Why GPU Acceleration Matters</h2>
//       <p>Modern LLMs are computational behemoths that require serious processing power. Your GPU is the secret weapon that transforms these models from theoretical concepts into practical, responsive AI assistants.</p>
      
//       <h3>Hardware Requirements</h3>
//       <p>Before diving into LLM deployment, let's ensure your machine is ready for the challenge:</p>
//       <ul>
//         <li><strong>Hardware Verification:</strong> You'll need a modern GPU with sufficient VRAM (>10GB at least). NVIDIA GPUs are typically the go-to choice for machine learning workloads.</li>
//         <li><strong>Driver Installation:</strong> Ensure you have the latest NVIDIA drivers installed</li>
//         <li><strong>CUDA Compatibility:</strong> Check your CUDA version compatibility</li>
//       </ul>
      
//       <h3>Checking GPU Compatibility</h3>
//       <p>Open your command prompt and run the <code>nvidia-smi</code> command. This command reveals crucial information about your GPU drivers and CUDA version.</p>
      
//       <pre><code>Thu Dec 28 15:58:29 2023       
// +---------------------------------------------------------------------------------------+
// | NVIDIA-SMI 535.98                 Driver Version: 535.98       CUDA Version: 12.2     |
// |-----------------------------------------+----------------------+----------------------+
// | GPU  Name                     TCC/WDDM  | Bus-Id        Disp.A | Volatile Uncorr. ECC |
// | Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |
// |                                         |                      |               MIG M. |
// |=========================================+======================+======================|
// |   0  NVIDIA GeForce RTX 3070 ...  WDDM  | 00000000:01:00.0 Off |                  N/A |
// | N/A   41C    P8              11W /  94W |     59MiB /  8192MiB |      0%      Default |</code></pre>
//     `
//   },
//   {
//     id: 3,
//     title: "Setting Up Your Development Environment",
//     excerpt: "Complete guide to setting up WSL, Python, and essential tools for LLM development.",
//     category: "Setup Guide",
//     readTime: "10 min read",
//     date: "August 8, 2025",
//     author: "Tech Team",
//     image: "/placeholder.jpg",
//     content: `
//       <h2>Development Environment Setup</h2>
      
//       <h3>Choosing Your Tools</h3>
//       <p>For this journey, we'll be using Visual Studio Code which is a versatile, free, and open-source integrated development environment (IDE).</p>
      
//       <p>What we love about Visual Studio Code:</p>
//       <ul>
//         <li>Free and open-source</li>
//         <li>Maintained by Microsoft</li>
//         <li>Cross-platform compatibility</li>
//         <li>Intelligent Python integration</li>
//       </ul>
      
//       <h3>Windows Subsystem for Linux (WSL)</h3>
//       <p>Why WSL? Libraries like accelerate and bitsandbytes prefer a Linux environment. WSL bridges this gap, allowing you to harness the full potential of these libraries on your Windows machine.</p>
      
//       <h4>WSL Installation Steps</h4>
//       <ol>
//         <li>Open command prompt as an administrator</li>
//         <li>List available distributions: <code>wsl --list --online</code></li>
//         <li>Install your preferred distribution: <code>wsl --install -d Ubuntu-22.04</code></li>
//         <li>Set up username and password</li>
//       </ol>
      
//       <h3>Python Environment with Miniconda</h3>
//       <p>Create a dedicated virtual environment for your LLM project:</p>
//       <pre><code>conda create -n testing_llm python=3.11.5
// conda activate testing_llm</code></pre>
//     `
//   },
//   {
//     id: 4,
//     title: "Essential Libraries and Dependencies",
//     excerpt: "Comprehensive list of required Python libraries for LLM deployment and development.",
//     category: "Development",
//     readTime: "6 min read",
//     date: "August 7, 2025",
//     author: "Tech Team",
//     image: "/placeholder.jpg",
//     content: `
//       <h2>Essential Libraries for LLM Deployment</h2>
//       <p>Your requirements.txt is your roadmap to success. Key libraries include:</p>
      
//       <h3>Core Libraries</h3>
//       <ul>
//         <li><strong>transformers:</strong> Hugging Face's transformer library</li>
//         <li><strong>torch:</strong> PyTorch for deep learning</li>
//         <li><strong>accelerate:</strong> Efficient training and inference</li>
//         <li><strong>bitsandbytes:</strong> Quantization techniques</li>
//         <li><strong>fastapi:</strong> Web framework for API endpoints</li>
//       </ul>
      
//       <h3>Installation</h3>
//       <p>Install all dependencies using:</p>
//       <pre><code>pip install -r requirements.txt</code></pre>
      
//       <h3>Key Dependencies Explained</h3>
//       <p><strong>Accelerate:</strong> This library provides efficient distributed training and inference capabilities.</p>
//       <p><strong>BitsAndBytes:</strong> Essential for quantization techniques that allow you to run large models on consumer hardware.</p>
//       <p><strong>FastAPI:</strong> Modern, fast web framework for building APIs with Python.</p>
      
//       <p><em>Pro Tip:</em> Make some tea while the libraries are loading, watch a movie while the model is loading. Model downloads and installations take time!</p>
//     `
//   },
//   {
//     id: 5,
//     title: "Model Loading and Quantization Techniques",
//     excerpt: "Learn advanced techniques for efficiently loading and quantizing large language models.",
//     category: "Advanced",
//     readTime: "12 min read",
//     date: "August 6, 2025",
//     author: "Tech Team",
//     image: "/placeholder.jpg",
//     content: `
//       <h2>Model Loading and Quantization</h2>
      
//       <h3>Downloading Your Model</h3>
//       <p>We'll use Mistral-7B as our example model. Run the following commands in the WSL terminal:</p>
//       <pre><code>git lfs install
// git clone https://huggingface.co/mistralai/Mistral-7B-v0.1</code></pre>
      
//       <h3>Efficient Model Loading</h3>
//       <p>Here's a sample code snippet demonstrating efficient model loading with quantization:</p>
      
//       <pre><code>def load_model(model_path="Mistral-7b-v0.1/"):
//     nf4_config = BitsAndBytesConfig(
//         load_in_4bit=True,
//         bnb_4bit_quant_type="nf4",
//         bnb_4bit_compute_dtype=torch.bfloat16
//     )

//     tokenizer = AutoTokenizer.from_pretrained(model_path, local_files_only=True)
//     model = AutoModelForCausalLM.from_pretrained(
//         model_path,
//         local_files_only=True,
//         device_map="auto",
//         quantization_config=nf4_config
//     )

//     return model, tokenizer</code></pre>
      
//       <h3>Quantization Benefits</h3>
//       <ul>
//         <li>Reduced memory usage</li>
//         <li>Faster inference times</li>
//         <li>Ability to run larger models on consumer hardware</li>
//         <li>Minimal impact on model quality</li>
//       </ul>
//     `
//   },
//   {
//     id: 6,
//     title: "Building FastAPI Endpoints for LLM Inference",
//     excerpt: "Create production-ready API endpoints to serve your locally hosted language models.",
//     category: "API Development",
//     readTime: "8 min read",
//     date: "August 5, 2025",
//     author: "Tech Team",
//     image: "/placeholder.jpg",
//     content: `
//       <h2>Building a FastAPI Endpoint</h2>
      
//       <h3>Creating Your API</h3>
//       <p>Create a simple prediction endpoint that serves your model:</p>
      
//       <pre><code>from fastapi import FastAPI
// import transformers
// from transformers import AutoTokenizer, AutoModelForCausalLM
// from transformers import BitsAndBytesConfig

// app = FastAPI()

// @app.get("/predict")
// async def make_prediction(query: str):
//     prediction = predict(model, tokenizer, query)
//     return {"prediction": prediction}</code></pre>
      
//       <h3>Complete Implementation</h3>
//       <pre><code>def load_model(model_path="Mistral-7b-v0.1/"):
//     nf4_config = BitsAndBytesConfig(
//         load_in_4bit=True,
//         bnb_4bit_quant_type="nf4",
//         bnb_4bit_compute_dtype=torch.bfloat16
//     )

//     tokenizer = AutoTokenizer.from_pretrained(model_path, local_files_only=True)
//     model = AutoModelForCausalLM.from_pretrained(
//         model_path,
//         local_files_only=True,
//         device_map="auto",
//         quantization_config=nf4_config
//     )

//     return model, tokenizer</code></pre>
      
//       <h3>Running Your API</h3>
//       <p>Start your FastAPI server with:</p>
//       <pre><code>uvicorn main:app</code></pre>
      
//       <p>Then open <code>http://127.0.0.1:8000/docs</code> in your browser to access the Swagger documentation and test your LLM API.</p>
      
//       <h3>Best Practices</h3>
//       <ul>
//         <li>Monitor GPU memory usage</li>
//         <li>Use quantization techniques</li>
//         <li>Manage your virtual environments carefully</li>
//         <li>Keep your libraries updated</li>
//       </ul>
//     `
//   }
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost)
    if (!post) return null

    return (
      <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Starfield />
        <div className="container mx-auto px-6 py-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blog-content"
              />
            </div>
          </motion.article>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Starfield />
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-blue-400">Tech Blog</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Insights, tutorials, and deep dives into the latest technology trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <ChevronRight 
                      size={20} 
                      className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          
        </div>
        {
            blogPosts.length ===0 &&(
              <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center "
        >
          <h1 className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            No <span className="text-blue-400">Blog for now!</span>
          </h1>
          
        </motion.div>
            )
          }
      </div>
      
      <style jsx>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #e5e7eb;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #d1d5db;
        }
        
        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #d1d5db;
        }
        
        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
          color: #9ca3af;
        }
        
        .blog-content ul, .blog-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          color: #9ca3af;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        
        .blog-content pre {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .blog-content code {
          background: #1f2937;
          color: #60a5fa;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        
        .blog-content pre code {
          background: transparent;
          padding: 0;
          color: #e5e7eb;
        }
        
        .blog-content strong {
          color: #f3f4f6;
          font-weight: 600;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  )
}
