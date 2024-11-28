import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  PlusCircle, 
  Copy, 
  Edit, 
  DollarSign, 
  Target, 
  Users, 
  Award,
  Send,
  RefreshCw,
  ArrowRight
  
} from 'lucide-react';


const TransactionsList = () => {
    const transactions = [
      { 
        id: "TX-001", 
        amount: 500.00, 
        country: "USA", 
        status: "Completed", 
        date: "2024-02-15",
        message: "Support for medical treatment",
        icon: <Award className="text-green-600" />
      },
      { 
        id: "TX-002", 
        amount: 1250.50, 
        country: "Canada", 
        status: "Processing", 
        date: "2024-02-14",
        message: "Hospital equipment fund",
      },
      { 
        id: "TX-003", 
        amount: 750.25, 
        country: "UK", 
        status: "Pending", 
        date: "2024-02-13",
        message: "Emergency surgery support",
        icon: <Send className="text-purple-600" />
      }
    ];
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <RefreshCw className="mr-3 text-blue-600" />
            Recent Transactions
          </h3>
          <button className="text-blue-600 hover:underline text-sm flex items-center">
            View All <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex items-center space-x-4">
                {transaction.icon}
                <div>
                  <p className="font-medium text-sm">{transaction.message}</p>
                  <p className="text-xs text-gray-500">
                    {transaction.id} · {transaction.country} · {transaction.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">
                  ${transaction.amount.toFixed(2)}
                </p>
                <p className={`text-xs ${
                  transaction.status === 'Completed' ? 'text-green-600' : 
                  transaction.status === 'Processing' ? 'text-yellow-600' : 
                  'text-gray-500'
                }`}>
                  {transaction.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

// Visa and Mastercard SVG Icons
const VisaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-8">
    <path d="M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" fill="#1434CB"/>
    <path d="M21 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18z" fill="#FFFFFF"/>
    <path d="m10.48 14.156-1.268-4.835H7.204l1.944 4.835h1.332zm5.555-4.835L14.54 14.156h1.332l1.268-4.835h-1.287zm-3.474 0h-1.782l-1.782 4.835h1.332l.446-1.269h1.988l.446 1.269h1.332l-1.18-4.835z" fill="#1434CB"/>
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-8">
    <circle cx="12" cy="12" r="9" fill="#FF5F00"/>
    <path d="M12 8.46A5.54 5.54 0 1 0 12 15.54a5.54 5.54 0 0 0 0-7.08z" fill="#EB001B"/>
    <path d="M12 8.46a5.54 5.54 0 0 1 2.122 4.26A5.54 5.54 0 0 1 12 16.98a5.54 5.54 0 0 1-2.122-4.26A5.54 5.54 0 0 1 12 8.46z" fill="#F79E1B"/>
  </svg>
);

// Campaign Creation Modal
const CreateCampaignModal = ({ isOpen, onClose }) => {
  const [campaignDetails, setCampaignDetails] = useState({
    title: '',
    goal: '',
    description: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <PlusCircle className="mr-3 text-blue-600" />
          Create New Campaign
        </h2>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Campaign Title" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={campaignDetails.title}
            onChange={(e) => setCampaignDetails({...campaignDetails, title: e.target.value})}
          />
          <input 
            type="number" 
            placeholder="Fundraising Goal ($)" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={campaignDetails.goal}
            onChange={(e) => setCampaignDetails({...campaignDetails, goal: e.target.value})}
          />
          <textarea 
            placeholder="Campaign Description" 
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
            value={campaignDetails.description}
            onChange={(e) => setCampaignDetails({...campaignDetails, description: e.target.value})}
          />
          <div className="flex space-x-4">
            <button 
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                // TODO: Add campaign creation logic
                onClose();
              }}
            >
              Create Campaign
            </button>
            <button 
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
export const Navbar = () => {
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-purple-800 shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="text-white mr-3" size={32} />
            <h1 className="text-2xl font-bold text-white">HealthHope</h1>
          </div>
          <div className="flex items-center space-x-6">
          <button 
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all flex items-center">
              <Link to='/payouts'>
             
                   <DollarSign className="mr-2" size={20} />
                   Payouts
              </Link>
            
             
            </button>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all flex items-center"
              onClick={() => setIsCreateCampaignOpen(true)}
            >
              <PlusCircle className="mr-2" size={20} />
              Create Campaign
            </button>
            <div className="bg-white/20 px-3 py-1 rounded-full text-white text-sm">
              John Doe
            </div>
          </div>
        </div>
      </nav>
      <CreateCampaignModal 
        isOpen={isCreateCampaignOpen} 
        onClose={() => setIsCreateCampaignOpen(false)} 
      />
    </>
  );
};

// Campaign Card Component
const CampaignCard = () => {
  const [copied, setCopied] = useState(false);
  const campaignLink = 'https://healthhope.org/campaigns/john-doe-uuid';

  const copyLink = () => {
    navigator.clipboard.writeText(campaignLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center">
          <Target className="mr-3 text-blue-600" size={24} />
          Heart Surgery Fund
        </h2>
        <div className="flex items-center space-x-2">
          <button 
            className="text-gray-500 hover:text-blue-600 transition"
            onClick={copyLink}
          >
            {copied ? <CheckCircle2 size={20} className="text-green-600" /> : <Copy size={20} />}
          </button>
          <button className="text-gray-500 hover:text-blue-600 transition">
            <Edit size={20} />
          </button>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-500 ease-in-out" 
          style={{width: '65%'}}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <DollarSign size={16} />
          <span>Raised: $32,500</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target size={16} />
          <span>Goal: $50,000</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users size={16} />
          <span>42 Donors</span>
        </div>
        <div className="flex items-center space-x-2">
          <Share2 size={16} className="text-gray-500" />
          <a 
            href={campaignLink} 
            className="text-blue-600 text-sm hover:underline"
          >
            Share Campaign
          </a>
        </div>
      </div>
    </div>
  );
};

// Payment Methods Component
const PaymentMethods = () => {
  const methods = [
    { name: "Visa", icon: <VisaIcon />, color: "bg-blue-100" },
    { name: "Mastercard", icon: <MastercardIcon />, color: "bg-red-100" },
    { name: "PayPal", icon: <DollarSign />, color: "bg-yellow-100" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Link className="mr-3 text-purple-600" />
        Payment Methods
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {methods.map((method, index) => (
          <div 
            key={index} 
            className={`${method.color} rounded-lg p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform`}
          >
            {method.icon}
            <span className="text-xs mt-2">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const HealthcareFundraiserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <CampaignCard />
          <PaymentMethods />
        </div>
        <div className="space-y-6">
          {/* Placeholder for donor list or additional info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Donor Updates</h3>
          <TransactionsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareFundraiserDashboard;