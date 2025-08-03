import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024–2025",
      content: (
        <div>
          <section>
            <h2 className="text-xl font-semibold mb-2">Artificial Intelligence Solutions</h2>
            <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
              In 2024–2025, we significantly expanded our capabilities in artificial intelligence, delivering
              innovative solutions across a variety of industries. Our initiatives focused on creating intelligent
              systems that enhance user experience, streamline operations, and unlock data-driven insights.
            </p>
            <h3 className="text-md font-medium">Key Deliverables:</h3>
            <ul className="list-disc list-inside mb-6 text-sm">
              <li><strong>AI Chatbots:</strong> Integrated into web and mobile apps.</li>
              <li><strong>Custom ML Models:</strong> For user behavior analysis and personalization.</li>
              <li><strong>NLP & Sentiment Analysis:</strong> For customer support enhancement.</li>
              <li><strong>Predictive Analytics & Automation:</strong> For enterprise efficiency.</li>
            </ul>
          </section>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/AI-${i}.png`}
                alt={`startup template ${i}`}
                className="h-20 w-full md:h-44 lg:h-60 rounded-lg object-contain shadow"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <section>
            <h2 className="text-xl font-semibold mb-2">Blockchain Development</h2>
            <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
              In 2023, our team led innovative blockchain projects. We built decentralized systems
              with security, trust, and transparency in mind, including smart contracts, token platforms,
              and NFT ecosystems.
            </p>
            <h3 className="text-md font-medium">Key Deliverables:</h3>
            <ul className="list-disc list-inside mb-6 text-sm">
              <li><strong>Smart Contracts:</strong> On Ethereum and Polygon networks.</li>
              <li><strong>Reward Tokens:</strong> Custom tokenomics for loyalty systems.</li>
              <li><strong>NFT Platforms:</strong> For digital asset management.</li>
              <li><strong>Crypto Wallet Integrations:</strong> For secure user access.</li>
            </ul>
          </section>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/PI-${i}.png`}
                alt={`blockchain project ${i}`}
                className="h-20 w-full md:h-44 lg:h-60 rounded-lg object-contain shadow"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2021–2022",
      content: (
        <div>
          <section>
            <h2 className="text-xl font-semibold mb-2">Web & Mobile App Development</h2>
            <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
              During 2021–2022, we built scalable web and mobile platforms for startups and enterprises. We
              leveraged modern frameworks to ensure performance and cross-platform consistency.
            </p>
            <h3 className="text-md font-medium">Key Deliverables:</h3>
            <ul className="list-disc list-inside mb-6 text-sm">
              <li><strong>Mobile Apps:</strong> Built using Flutter and React Native.</li>
              <li><strong>Web Platforms:</strong> Responsive, SEO-optimized, and API-driven.</li>
              <li><strong>Admin Dashboards:</strong> For analytics and operations.</li>
              <li><strong>Authentication & Security:</strong> Best practices across all apps.</li>
            </ul>
          </section>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/AB-${i}.png`}
                alt={`web mobile project ${i}`}
                className="h-20 w-full md:h-44 lg:h-60 rounded-lg object-contain shadow"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2020–2021",
      content: (
        <div>
          <section>
            <h2 className="text-xl font-semibold mb-2">Social Media & Brand Tools</h2>
            <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
              In our early years, we provided social media services and lightweight SaaS tools to help brands
              launch their digital presence. We offered both strategic and technical support.
            </p>
            <h3 className="text-md font-medium">Key Deliverables:</h3>
            <ul className="list-disc list-inside mb-6 text-sm">
              <li><strong>Social Media Marketing:</strong> Growth strategies for Instagram, LinkedIn & Twitter.</li>
              <li><strong>Automation Tools:</strong> For scheduling and analytics.</li>
              <li><strong>Brand Kits & Visuals:</strong> Templates, logos, and assets.</li>
              <li><strong>Landing Pages:</strong> Fast-deploy, optimized pages.</li>
            </ul>
          </section>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <img
                key={i}
                src={`MB-${i}.png`}
                alt={`social project ${i}`}
                className="h-20 w-full md:h-44 lg:h-60 rounded-lg object-contain shadow"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
