import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Zap, 
  Cpu, 
  Lock 
} from 'lucide-react';

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-blue-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-blue-600">FinPulse</h1>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">Mission</button>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</button>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in-down">
          Transforming Finance Through Technology
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We're reimagining financial services by leveraging cutting-edge technology to create more accessible, transparent, and intelligent financial solutions for everyone.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg">
            Explore Our Solutions
          </button>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </header>

      {/* Mission Pillars */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Our Mission Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Security First",
              description: "Advanced encryption and AI-powered fraud detection to protect your financial ecosystem.",
              color: "text-green-600"
            },
            {
              icon: Globe,
              title: "Global Accessibility",
              description: "Breaking down financial barriers with inclusive, borderless financial technologies.",
              color: "text-blue-600"
            },
            {
              icon: Zap,
              title: "Instant Innovation",
              description: "Rapid development of cutting-edge financial tools that adapt to your evolving needs.",
              color: "text-purple-600"
            }
          ].map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <pillar.icon className={`mx-auto mb-4 w-12 h-12 ${pillar.color}`} />
              <h3 className="text-xl font-bold mb-4 text-gray-800">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Focus */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Technologies Powering Financial Revolution
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "AI-Driven Insights", description: "Machine learning algorithms for predictive financial analysis" },
              { icon: Lock, title: "Blockchain Security", description: "Decentralized technologies ensuring transparent transactions" },
              { icon: TrendingUp, title: "Real-Time Analytics", description: "Instant financial performance tracking and recommendations" }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <tech.icon className="mx-auto mb-4 w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Join FinPulse and be part of a technological revolution that's making financial services smarter, safer, and more accessible.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors shadow-xl">
            Get Started
          </button>
          <button className="px-10 py-4 border border-blue-600 text-blue-600 rounded-full text-lg hover:bg-blue-50 transition-colors">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 FinPulse. Revolutionizing Financial Technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MissionPage;