"use client"
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentExperience: string;
  investmentGoals: string;
  riskTolerance: string;
  newsletter: boolean;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentExperience: '',
    investmentGoals: '',
    riskTolerance: '',
    newsletter: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform animate-pulse">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Fincook!</h2>
          <p className="text-gray-600 mb-6">
            Your account has been created successfully. You'll start receiving investment insights and updates soon.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">f</span>
                </div>
                <span className="text-xl font-bold text-emerald-600">fincook</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">Resources</a>
                <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">Learn</a>
                <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">Buy me coffee</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content - Two-Sided Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-6xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[700px]">
              
              {/* Left Side - Header/Branding Content */}
              <div className="lg:w-1/2 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  {/* Logo */}
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-bold text-xl">f</span>
                    </div>
                    <span className="text-2xl font-bold text-white">fincook</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Empowering Smart Investment Decisions
                  </h1>
                  
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Wealth begins with knowledge. Join thousands of investors who trust Fincook for reliable resources, education, and expert guidance.
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-white">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Real-time market insights and analysis</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Personalized investment recommendations</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Educational resources and webinars</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>24/7 expert support and guidance</span>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">10K+</div>
                      <div className="text-white/80 text-sm">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">$50M+</div>
                      <div className="text-white/80 text-sm">Assets Guided</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-white/80 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Signup Form */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      Create Your Account
                    </h2>
                    <p className="text-gray-600">
                      Start your investment journey today
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Investment Experience */}
                    <div>
                      <label htmlFor="investmentExperience" className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Experience *
                      </label>
                      <select
                        id="investmentExperience"
                        name="investmentExperience"
                        value={formData.investmentExperience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                        <option value="professional">Professional Investor</option>
                      </select>
                    </div>

                    {/* Investment Goals */}
                    <div>
                      <label htmlFor="investmentGoals" className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Investment Goals *
                      </label>
                      <select
                        id="investmentGoals"
                        name="investmentGoals"
                        value={formData.investmentGoals}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select your primary goal</option>
                        <option value="wealth-building">Long-term Wealth Building</option>
                        <option value="retirement">Retirement Planning</option>
                        <option value="income">Generate Income</option>
                        <option value="short-term">Short-term Growth</option>
                        <option value="diversification">Portfolio Diversification</option>
                      </select>
                    </div>

                    {/* Risk Tolerance */}
                    <div>
                      <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 mb-2">
                        Risk Tolerance *
                      </label>
                      <select
                        id="riskTolerance"
                        name="riskTolerance"
                        value={formData.riskTolerance}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select your risk tolerance</option>
                        <option value="conservative">Conservative (Low Risk)</option>
                        <option value="moderate">Moderate (Medium Risk)</option>
                        <option value="aggressive">Aggressive (High Risk)</option>
                        <option value="very-aggressive">Very Aggressive (Very High Risk)</option>
                      </select>
                    </div>

                    {/* Newsletter Checkbox */}
                    <div className="flex items-start">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                      />
                      <label htmlFor="newsletter" className="ml-3 block text-sm text-gray-700">
                        I want to receive investment insights, market updates, and educational content via email
                      </label>
                    </div>

                    {/* Terms */}
                    <div className="text-xs text-gray-600">
                      By creating an account, you agree to our{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">Privacy Policy</a>.
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Creating Your Account...
                        </div>
                      ) : (
                        'Start Your Investment Journey'
                      )}
                    </button>

                    {/* Login Link */}
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">
                        Already have an account?{' '}
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                          Sign in here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;