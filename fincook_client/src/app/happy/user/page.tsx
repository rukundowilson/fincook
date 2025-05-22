"use client";
import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Cta from "@/app/components/Cta&quote"
import { Coffee, Heart, CreditCard, DollarSign, Check, ArrowRight } from 'lucide-react';

export default function BuyMeCoffeePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const predefinedAmounts = [3000, 5000, 10000, 25000, 50000];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setMessage('');
        setEmail('');
      }, 5000);
    }, 1500);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const getFinalAmount = () => {
    if (selectedAmount !== null) return selectedAmount;
    if (customAmount) return parseFloat(customAmount);
    return 0;
  };

  const getCoffeeCount = () => {
    const amount = getFinalAmount();
    return Math.floor(amount / 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* nav bar */}
      <Nav/>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {!isSuccess ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <Coffee className="h-6 w-6 mr-2" />
                Buy Us a Coffee
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-2">
            If our investment resources have helped you, consider buying us a coffee to support the creation of more free financial education content.
          </p>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-4">How many coffees would you like to buy us today?</p>
                
                {/* Donation Amounts */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`
                        py-2 px-3 rounded flex flex-col items-center justify-center transition
                        ${selectedAmount === amount 
                          ? 'bg-emerald-500 hover:bg-emerald-600 border-2 border-emerald-500 text-white' 
                          : 'bg-gray-50 border border-gray-200 hover:bg-emerald-50 text-gray-800'
                        }
                      `}
                    >
                      <span className="font-bold">{amount}rwf</span>
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="relative mt-4">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Or enter a custom amount:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="custom-amount"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className={`
                        pl-10 pr-4 py-2 w-full border rounded focus:outline-none
                        ${customAmount ? 'border-green-500 ring-1 ring-emerald-500' : 'border-gray-300 focus:ring-1 focus:ring-emerald-500'}
                      `}
                    />
                  </div>
                </div>
                
                {/* Coffee Summary */}
                {(selectedAmount || customAmount) && (
                  <div className="mt-6 bg-emerald-50 rounded-lg p-4 flex items-center">
                    <div className="flex items-center text-green-800">
                      <Coffee className="h-6 w-6 mr-2" />
                      <span className="font-bold">
                        You're buying us {getCoffeeCount() > 0 ? getCoffeeCount() : 'less than 1'} coffee{getCoffeeCount() !== 1 ? 's' : ''}!
                      </span>
                    </div>
                    <span className="ml-auto font-bold text-emerald-800">${getFinalAmount().toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Donation Form */}
              <form onSubmit={handleDonationSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="How should we thank you?"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="For receipt and updates"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Leave a Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any words of encouragement?"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <button 
                    type="submit"
                    disabled={!(selectedAmount || customAmount) || isSubmitting}
                    className={`
                      w-full py-3 rounded-lg font-bold text-white flex items-center justify-center
                      ${(selectedAmount || customAmount) && !isSubmitting
                        ? 'bg-emerald-600 hover:bg-emerald-700' 
                        : 'bg-gray-300 cursor-not-allowed'
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        Processing...
                        <div className="ml-2 animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Support with {getFinalAmount().toFixed(2)}frw
                      </span>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Secure payment powered by MTN mobile money
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-emerald-800 mb-2">Thank You for Your Support!</h2>
              <p className="text-gray-600 mb-6">
                Your donation helps us create more free financial education content for everyone.
              </p>
              {name && (
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-emerald-800">
                    Thank you, <span className="font-bold">{name}</span>! We really appreciate your support.
                  </p>
                </div>
              )}
              <Link 
                href="/"
                className="inline-flex items-center text-green-600 font-medium hover:text-emerald-700"
              >
                Return to Home
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          )}
          
          {/* Recent Supporters */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              Recent Supporters
            </h3>
            <div className="space-y-4">
              {[
                { name: "Sarah J.", amount: 15, message: "Your investment guides helped me start my portfolio!", date: "2 days ago" },
                { name: "Michael T.", amount: 5, message: "Keep up the amazing work on financial education!", date: "5 days ago" },
                { name: "Anonymous", amount: 25, message: null, date: "1 week ago" },
                { name: "Emma L.", amount: 10, message: "The ETF guide was incredible - worth way more than a few coffees!", date: "2 weeks ago" },
                { name: "Robert K.", amount: 50, message: "Your content helped me plan my retirement strategy. Thank you!", date: "3 weeks ago" }
              ].map((supporter, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">{supporter.name}</h4>
                      {supporter.message && (
                        <p className="text-gray-600 text-sm mt-1">{supporter.message}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-green-800">{supporter.amount}frw</span>
                      <p className="text-xs text-gray-500 mt-1">{supporter.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">How is the donation used?</h4>
                <p className="text-gray-600">
                  Your donations directly support the creation of free financial education content, including articles, guides, tools, and resources to help people make better investment decisions.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Is my donation tax-deductible?</h4>
                <p className="text-gray-600">
                  While we're passionate about financial education, donations are not tax-deductible as we're not a registered non-profit organization.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Can I donate monthly?</h4>
                <p className="text-gray-600">
                  Yes! We're working on a monthly supporter program. If you're interested in becoming a regular supporter, please leave your email and we'll notify you when it launches.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, and digital wallets through our secure payment processor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Statement */}
      <div className="bg-green-50 py-16 mt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Your Support Makes a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15,000+</div>
              <p className="text-gray-700">People reached with financial education</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <p className="text-gray-700">Free investment guides created</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0frw</div>
              <p className="text-gray-700">Cost to access our core resources</p>
            </div>
          </div>
        </div>
      </div>

        {/* Call to Action */}
        <Cta/>

    {/* footer */}
    <Footer/>
    </div>
  );
}