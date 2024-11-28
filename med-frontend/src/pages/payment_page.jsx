import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Share2, 
  CheckCircle, 
  Stethoscope, 
  Star, 
  Users, 
  Clock, 
  DollarSign 
} from 'lucide-react';

// Paystack SDK Script
import { usePaystackPayment } from 'react-paystack';

const HealthCampaignDetailPage = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [campaign, setCampaign] = useState(null);

  // Paystack public key (replace with your actual public key)
  const PAYSTACK_PUBLIC_KEY = "pk_test_your_public_key";

  // Fetch the campaign data from the API (mocked here, replace with real API call)
  useEffect(() => {
    // This is where you would fetch the real campaign data from your API
    const fetchCampaignData = async () => {
      const data = {
        title: "Innovative Telehealth Solutions",
        creator: "Dr. Maria Chen",
        avatar: "/api/placeholder/80/80",
        goal: 75000,
        raised: 47500,
        backers: 312,
        daysLeft: 28,
        category: "Healthcare Technology",
        description: "Developing AI-powered telehealth platforms to improve remote medical diagnostics and patient care accessibility in underserved communities.",
        highlights: [
          "AI-driven diagnostic screening",
          "Multilingual patient support",
          "Low-bandwidth mobile health solutions"
        ]
      };
      setCampaign(data);
    };

    fetchCampaignData();
  }, []);

  if (!campaign) {
    return <div>Loading campaign data...</div>; // Loading state while campaign data is fetched
  }

  const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100);

  // Paystack configuration
  const config = {
    reference: `healthCampaign_${Date.now()}`, // Unique reference for each transaction
    email: "donor@example.com", // Replace with actual donor email
    amount: donationAmount * 100, // Convert to kobo (smallest unit for NGN)
    publicKey: PAYSTACK_PUBLIC_KEY,
  };

  // Payment Success Callback
  const onSuccess = (reference) => {
    alert("Donation Successful! Reference: " + reference.reference);
    setShowPaymentModal(false);

    // You can call your backend to save the transaction details here
    console.log("Transaction successful:", reference);
  };

  // Payment Failure Callback
  const onClose = () => {
    alert("Transaction Cancelled!");
    setShowPaymentModal(false);
  };

  // Initialize Paystack Payment
  const initializePayment = usePaystackPayment(config);

  const handleDonate = () => {
    if (donationAmount <= 0) {
      alert("Please enter a valid donation amount!");
      return;
    }

    // Initialize payment
    initializePayment(onSuccess, onClose);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <Stethoscope className="text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-600">HealthInnovate</h1>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-blue-600 transition-colors">Explore</button>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">Create</button>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Campaign Section */}
        <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-700 transition-all duration-300 hover:text-blue-800">
              {campaign.title}
            </h2>
            <div className="flex space-x-4">
              <Heart className="text-red-500 hover:scale-110 transition-transform cursor-pointer" />
              <Share2 className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>

          {/* Creator Info */}
          <div className="flex items-center mb-6 space-x-4">
            <img 
              src={campaign.avatar} 
              alt="Creator" 
              className="rounded-full border-2 border-blue-500 w-16 h-16"
            />
            <div className="animate-fade-in-up">
              <p className="font-semibold text-gray-800">{campaign.creator}</p>
              <p className="text-sm text-gray-500">Campaign Creator</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-blue-700 flex items-center">
                <DollarSign className="mr-2" />
                Raised: ${campaign.raised.toLocaleString()}
              </span>
              <span className="text-gray-600 flex items-center">
                <Clock className="mr-2" />
                {campaign.daysLeft} days left
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-teal-400 h-full transition-all duration-500" 
                style={{width: `${progressPercentage}%`} }
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Goal: ${campaign.goal.toLocaleString()}</span>
              <span>{progressPercentage.toFixed(1)}% funded</span>
            </div>
          </div>

          {/* Donate Button */}
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="w-full py-4 bg-blue-600 text-white rounded-full 
                       font-bold text-lg hover:bg-blue-700 
                       transition-all transform hover:scale-105 
                       flex items-center justify-center space-x-2 
                       shadow-md hover:shadow-lg"
          >
            <Star className="mr-2" /> Support This Health Innovation
          </button>

          {/* Campaign Description */}
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Campaign Overview</h3>
            <p className="text-gray-700 leading-relaxed">{campaign.description}</p>
            
            <div className="mt-4">
              <h4 className="font-semibold text-blue-600 mb-2">Key Innovations:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {campaign.highlights.map((highlight, index) => (
                  <li key={index} className="transition-all duration-300 hover:text-blue-600">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {/* ... Other sidebar components remain unchanged ... */}

      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 shadow-2xl border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Make a Donation</h3>
            <input 
              type="number" 
              placeholder="Enter donation amount" 
              className="w-full p-3 bg-gray-100 rounded-lg mb-4 border focus:ring-2 focus:ring-blue-300"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
            />
            <button 
              onClick={handleDonate}
              className="w-full py-3 bg-blue-600 text-white rounded-full 
                         font-bold hover:bg-blue-700 transition-colors"
            >
              Proceed with Donation
            </button>
            <button 
              onClick={() => setShowPaymentModal(false)}
              className="w-full py-2 mt-2 text-gray-600 hover:text-blue-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCampaignDetailPage;
