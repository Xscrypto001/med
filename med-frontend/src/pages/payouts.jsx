import React, { useState, useEffect } from 'react';
import {
  Bank,
  DollarSign,
  Clock,
  FileText,
  Wallet,
  Send,
  CreditCard,
} from 'lucide-react';
import Navbar from './Dashboard';

export const PayoutPage = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [payoutMethod, setPayoutMethod] = useState('bank');
  const [campaignData, setCampaignData] = useState({
    target_amount: 0,
    amount_raised: 0,
    pendingPayouts: 0,
  });
  const [payoutHistory, setPayoutHistory] = useState([]);

  // Fetching real data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint to fetch campaign data
        const responseCampaignData = await fetch('http://176.16.0.95:8000/api/campaigns'); // Update URL as per your API
        const campaignData = await responseCampaignData.json();

        // Replace with your actual API endpoint to fetch payout history
        const responsePayoutHistory = await fetch('http://176.16.0.95:8000/api/payouts'); // Update URL as per your API
        const payoutHistory = await responsePayoutHistory.json();

        // Set the data in the state
        setCampaignData(campaignData);
        setPayoutHistory(payoutHistory);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const payoutMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: <Bank className="mr-3" />,
      details: 'Transfer directly to your bank account',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <DollarSign className="mr-3" />,
      details: 'Instant transfer to your PayPal account',
    },
    {
      id: 'card',
      name: 'Debit Card',
      icon: <CreditCard className="mr-3" />,
      details: 'Instant transfer to your linked card',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Payout Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 grid grid-cols-3 gap-4">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <Wallet className="text-blue-600" size={40} />
            <div>
              <p className="text-sm text-gray-600">Total Raised</p>
              <p className="text-2xl font-bold text-blue-800">
                ${campaignData.target_amount.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <Send className="text-green-600" size={40} />
            <div>
              <p className="text-sm text-gray-600">Available Funds</p>
              <p className="text-2xl font-bold text-green-800">
                ${campaignData.amount_raised.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
            <Clock className="text-purple-600" size={40} />
            <div>
              <p className="text-sm text-gray-600">Pending Payouts</p>
              <p className="text-2xl font-bold text-purple-800">
                ${campaignData.amount_raised.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Payout Methods */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bank className="mr-3 text-blue-600" />
            Payout Methods
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {payoutMethods.map((method) => (
              <div
                key={method.id}
                className={`p-4 border rounded-lg cursor-pointer transition ${
                  payoutMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setPayoutMethod(method.id)}
              >
                <div className="flex items-center justify-between">
                  {method.icon}
                  <input
                    type="radio"
                    checked={payoutMethod === method.id}
                    onChange={() => setPayoutMethod(method.id)}
                    className="form-radio"
                  />
                </div>
                <h3 className="mt-2 font-semibold">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payout History */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <FileText className="mr-3 text-blue-600" />
              Payout History
            </h2>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 rounded-full text-sm ${
                  activeTab === 'pending'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveTab('pending')}
              >
                Pending
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm ${
                  activeTab === 'completed'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {payoutHistory
              .filter(
                (payout) =>
                  (activeTab === 'pending' && payout.status === 'Pending') ||
                  (activeTab === 'completed' && payout.status === 'Completed')
              )
              .map((payout) => (
                <div
                  key={payout.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-medium">{payout.id}</p>
                    <p className="text-sm text-gray-500">{payout.method}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      ${payout.amount.toFixed(2)}
                    </p>
                    <p
                      className={`text-xs ${
                        payout.status === 'Completed'
                          ? 'text-green-600'
                          : payout.status === 'Processing'
                          ? 'text-yellow-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {payout.status}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
