import React from 'react';
import { 
  Heart, 
  Shield, 
  Globe, 
  Zap, 
  Handshake, 
  User, 
  Lock 
} from 'lucide-react';

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <Heart className="text-red-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-red-600">MedRelief</h1>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-red-600 transition-colors">Home</button>
          <button className="text-gray-700 hover:text-red-600 transition-colors">Our Mission</button>
          <button className="text-gray-700 hover:text-red-600 transition-colors">Campaigns</button>
          <button className="text-gray-700 hover:text-red-600 transition-colors">Donate</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 animate-fade-in-down">
          Empowering Lives Through Healthcare Access
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          At MedRelief, we’re on a mission to provide life-saving healthcare to underserved communities through donations and impactful campaigns.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg">
            Support a Campaign
          </button>
          <button className="px-8 py-3 border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-colors">
            Learn More
          </button>
        </div>
      </header>

      {/* Mission Pillars */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-800">
          Our Mission Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Health Security",
              description: "Ensuring access to basic healthcare for vulnerable populations through donations.",
              color: "text-green-600"
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Expanding campaigns to underserved communities worldwide for greater impact.",
              color: "text-blue-600"
            },
            {
              icon: Handshake,
              title: "Community Partnerships",
              description: "Collaborating with local organizations to amplify healthcare campaigns and services.",
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

      {/* Campaign Focus */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-red-900">
            Current Campaigns Changing Lives
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: User, title: "Child Vaccination Drives", description: "Providing vaccines to children in rural areas." },
              { icon: Heart, title: "Emergency Relief Fund", description: "Funding emergency healthcare for disaster-affected regions." },
              { icon: Lock, title: "Women’s Health Access", description: "Ensuring maternal care and women’s health services." }
            ].map((campaign, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <campaign.icon className="mx-auto mb-4 w-12 h-12 text-red-600" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{campaign.title}</h3>
                <p className="text-gray-600">{campaign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
          Join Us in Saving Lives
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Your contributions can make a difference. Help us bring essential healthcare to those in need.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-10 py-4 bg-red-600 text-white rounded-full text-lg hover:bg-red-700 transition-colors shadow-xl">
            Donate Now
          </button>
          <button className="px-10 py-4 border border-red-600 text-red-600 rounded-full text-lg hover:bg-red-50 transition-colors">
            Start a Campaign
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4 text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 MedRelief. Empowering Healthcare Access for All.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MissionPage;
