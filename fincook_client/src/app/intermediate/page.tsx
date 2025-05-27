'use client';

import React, { useState } from 'react';

const BondInvestmentLesson: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [calculatorAmount, setCalculatorAmount] = useState(50000);
  const [bondDuration, setBondDuration] = useState(3);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [showQuizResults, setShowQuizResults] = useState(false);

  const interestRate = 0.11; // 11% annual interest

  const quizQuestions = [
    {
      question: "If you invest RWF 100,000 in a 3-year bond at 11%, how much do you earn annually?",
      options: ["RWF 10,000", "RWF 11,000", "RWF 12,000", "RWF 15,000"],
      correct: 1
    },
    {
      question: "What makes bonds a 'safe' investment compared to stocks?",
      options: ["Higher returns", "Predictable income", "No risk at all", "Government guarantee only"],
      correct: 1
    },
    {
      question: "What is the minimum amount to start investing in bonds in Rwanda?",
      options: ["RWF 1,000", "RWF 5,000", "RWF 10,000", "RWF 50,000"],
      correct: 1
    }
  ];

  const showSection = (section: string) => {
    setActiveSection(section);
    // Reset quiz state when navigating away
    if (section !== 'quiz') {
      setCurrentQuizQuestion(0);
      setQuizAnswers([]);
      setShowQuizResults(false);
    }
  };

  const calculateReturns = () => {
    const annualReturn = calculatorAmount * interestRate;
    const totalReturn = annualReturn * bondDuration;
    const totalAmount = calculatorAmount + totalReturn;
    return { annualReturn, totalReturn, totalAmount };
  };

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuizQuestion] = answerIndex.toString();
    setQuizAnswers(newAnswers);

    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      setShowQuizResults(true);
    }
  };

  const calculateQuizScore = () => {
    let correct = 0;
    quizAnswers.forEach((answer, index) => {
      if (parseInt(answer) === quizQuestions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const navigationItems = [
    { id: 'introduction', title: '📘 Introduction', icon: '📘' },
    { id: 'what-are-bonds', title: '🧱 What Are Bonds?', icon: '🧱' },
    { id: 'types-of-bonds', title: '📊 Types of Bonds', icon: '📊' },
    { id: 'investment-levels', title: '💰 Investment Levels', icon: '💰' },
    { id: 'calculator', title: '🧮 Calculator', icon: '🧮' },
    { id: 'how-to-start', title: '🚀 How to Start', icon: '🚀' },
    { id: 'quiz', title: '❓ Quiz', icon: '❓' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">📘 Investing in Bonds: Grow Your Money with Low-Risk Strategies</h2>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-emerald-700 mb-3">🧠 Learning Objectives</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Understand what bonds are and how they generate income
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Identify types of bonds available in Rwanda
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Choose the right bond investment based on your budget
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Start investing using mobile money, banks, or advisors
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-100 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-2">Simple Analogy:</h4>
                <p className="text-emerald-700">"Think of bonds like giving your friend money for their cow business. They pay you interest every month until they return your original money."</p>
              </div>
            </div>
          </div>
        );

      case 'what-are-bonds':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">🧱 What Are Bonds?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-700 mb-2">Definition</h3>
                    <p className="text-gray-700">A bond is like a loan you give to the government or a company. In return, they pay you regular interest and return your money at the end.</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-700 mb-2">How It Works</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                      <li>You lend money (buy a bond)</li>
                      <li>Receive regular interest payments</li>
                      <li>Get your original money back at maturity</li>
                    </ol>
                  </div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-800 mb-3">Rwanda Example</h3>
                  <div className="space-y-2 text-emerald-700">
                    <p><strong>Investment:</strong> RWF 100,000</p>
                    <p><strong>Interest Rate:</strong> 11% per year</p>
                    <p><strong>Duration:</strong> 3 years</p>
                    <p><strong>Annual Interest:</strong> RWF 11,000</p>
                    <p><strong>Total Return:</strong> RWF 133,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'types-of-bonds':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">📊 Types of Bonds in Rwanda</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Government Bonds</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-400 pl-4">
                    <h4 className="font-semibold text-gray-800">Treasury Bonds (T-Bonds)</h4>
                    <p className="text-gray-600 text-sm">Long-term government securities with higher returns</p>
                    <p className="text-emerald-600 font-medium">Duration: 2-10 years</p>
                  </div>
                  <div className="border-l-4 border-emerald-400 pl-4">
                    <h4 className="font-semibold text-gray-800">Umurenge Bonds</h4>
                    <p className="text-gray-600 text-sm">Local government bonds for community development</p>
                    <p className="text-emerald-600 font-medium">Duration: 1-5 years</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Corporate Bonds</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-gray-800">Bank Bonds</h4>
                    <p className="text-gray-600 text-sm">Issued by commercial banks for expansion</p>
                    <p className="text-blue-600 font-medium">Higher risk, higher return</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-gray-800">Company Bonds</h4>
                    <p className="text-gray-600 text-sm">Private companies seeking funding</p>
                    <p className="text-blue-600 font-medium">Varies by company rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'investment-levels':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">💰 Investment Levels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🌱</div>
                  <h3 className="text-lg font-semibold text-emerald-800">Small Investor</h3>
                </div>
                <div className="space-y-2 text-emerald-700">
                  <p><strong>Minimum:</strong> RWF 5,000+</p>
                  <p><strong>Ideal for:</strong> Beginners</p>
                  <p><strong>Access:</strong> Mobile Money</p>
                  <p><strong>Example:</strong> RWF 10,000 → RWF 1,100/year</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-6 border border-emerald-300">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🌿</div>
                  <h3 className="text-lg font-semibold text-emerald-800">Medium Investor</h3>
                </div>
                <div className="space-y-2 text-emerald-700">
                  <p><strong>Range:</strong> RWF 100,000+</p>
                  <p><strong>Ideal for:</strong> Regular savers</p>
                  <p><strong>Access:</strong> Bank CDS</p>
                  <p><strong>Example:</strong> RWF 500,000 → RWF 55,000/year</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg p-6 border border-emerald-400">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🌳</div>
                  <h3 className="text-lg font-semibold text-emerald-800">Large Investor</h3>
                </div>
                <div className="space-y-2 text-emerald-700">
                  <p><strong>Range:</strong> RWF 5,000,000+</p>
                  <p><strong>Ideal for:</strong> Serious investors</p>
                  <p><strong>Access:</strong> Financial advisors</p>
                  <p><strong>Example:</strong> RWF 10M → RWF 1.1M/year</p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">🛡️ Why Bonds Are Safe</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-emerald-700 mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Predictable income</li>
                    <li>• Government backing</li>
                    <li>• Lower volatility than stocks</li>
                    <li>• Regular interest payments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-2">Risks to Know:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Inflation risk</li>
                    <li>• Interest rate changes</li>
                    <li>• Limited liquidity</li>
                    <li>• Credit risk (corporate bonds)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'calculator':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">🧮 Bond Investment Calculator</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount (RWF)
                    </label>
                    <input
                      type="number"
                      value={calculatorAmount}
                      onChange={(e) => setCalculatorAmount(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bond Duration (Years)
                    </label>
                    <select
                      value={bondDuration}
                      onChange={(e) => setBondDuration(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      {[2, 3, 4, 5, 7, 10].map(year => (
                        <option key={year} value={year}>{year} years</option>
                      ))}
                    </select>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm text-emerald-700">
                      <strong>Interest Rate:</strong> 11% per year (fixed)
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-4">Projected Returns</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Initial Investment:</span>
                      <span className="font-semibold">RWF {calculatorAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Interest:</span>
                      <span className="font-semibold text-emerald-600">RWF {calculateReturns().annualReturn.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest ({bondDuration} years):</span>
                      <span className="font-semibold text-emerald-600">RWF {calculateReturns().totalReturn.toLocaleString()}</span>
                    </div>
                    <hr className="border-emerald-200" />
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-medium">Final Amount:</span>
                      <span className="font-bold text-emerald-800 text-lg">RWF {calculateReturns().totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'how-to-start':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">🚀 How to Start Investing in Bonds</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">📱</div>
                  <h3 className="text-lg font-semibold text-emerald-800">Mobile Money</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-emerald-50 rounded p-3">
                    <h4 className="font-medium text-emerald-700 mb-1">MTN MoMo</h4>
                    <p className="text-sm text-gray-600">Dial *182# → Financial Services → Bonds</p>
                  </div>
                  <div className="bg-emerald-50 rounded p-3">
                    <h4 className="font-medium text-emerald-700 mb-1">Airtel Money</h4>
                    <p className="text-sm text-gray-600">Dial *500# → Investment → Government Bonds</p>
                  </div>
                  <div className="text-center mt-4">
                    <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Min: RWF 5,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏦</div>
                  <h3 className="text-lg font-semibold text-emerald-800">Bank CDS Account</h3>
                </div>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Step 1:</strong> Visit your bank</p>
                    <p className="text-sm text-gray-700"><strong>Step 2:</strong> Open CDS account</p>
                    <p className="text-sm text-gray-700"><strong>Step 3:</strong> Fund your account</p>
                    <p className="text-sm text-gray-700"><strong>Step 4:</strong> Place bond orders</p>
                  </div>
                  <div className="text-center mt-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Min: RWF 100,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">👨‍💼</div>
                  <h3 className="text-lg font-semibold text-emerald-800">Financial Advisors</h3>
                </div>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">• Portfolio diversification</p>
                    <p className="text-sm text-gray-700">• Professional guidance</p>
                    <p className="text-sm text-gray-700">• Access to premium bonds</p>
                    <p className="text-sm text-gray-700">• Risk management</p>
                  </div>
                  <div className="text-center mt-4">
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Min: RWF 5,000,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">❓ Test Your Knowledge</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {!showQuizResults ? (
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">
                        Question {currentQuizQuestion + 1} of {quizQuestions.length}
                      </span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {quizQuestions[currentQuizQuestion].question}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                      >
                        <span className="font-medium text-emerald-600 mr-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {calculateQuizScore() === quizQuestions.length ? '🎉' : calculateQuizScore() >= quizQuestions.length / 2 ? '👍' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">Quiz Complete!</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    You scored {calculateQuizScore()} out of {quizQuestions.length}
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                    {calculateQuizScore() === quizQuestions.length ? (
                      <p className="text-emerald-700">Excellent! You're ready to start investing in bonds! 🚀</p>
                    ) : calculateQuizScore() >= quizQuestions.length / 2 ? (
                      <p className="text-emerald-700">Good job! Review the lesson and you'll be ready to invest! 📈</p>
                    ) : (
                      <p className="text-orange-700">Consider reviewing the lesson material before investing. 📚</p>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setCurrentQuizQuestion(0);
                      setQuizAnswers([]);
                      setShowQuizResults(false);
                    }}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-800 text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-emerald-100">🧩 FinCook</h1>
          <p className="text-emerald-200 text-sm mt-2">Bond Investment Lesson</p>
        </div>
        
        <nav className="mt-8">
          <div className="px-6 py-2">
            <h3 className="text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              Lesson Navigation
            </h3>
          </div>
          <ul className="mt-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => showSection(item.id)}
                  className={`w-full text-left block px-6 py-3 transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-700 text-emerald-100 border-r-4 border-emerald-300'
                      : 'text-emerald-100 hover:bg-emerald-700'
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="px-6 py-2 mt-8">
            <h3 className="text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              Quick Actions
            </h3>
          </div>
          <ul className="mt-4">
            <li>
              <a
                href="#"
                className="block px-6 py-3 text-emerald-100 hover:bg-emerald-700 transition-colors"
              >
                📲 Invest with MTN/Airtel
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-6 py-3 text-emerald-100 hover:bg-emerald-700 transition-colors"
              >
                💬 Contact FinCook Advisor
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
          
          {/* Call to Action */}
          {activeSection !== 'quiz' && (
            <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Investing? 🚀</h3>
                <p className="text-emerald-100 mb-6">
                  Take your first step towards financial growth with bond investments
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                    📲 Invest with Mobile Money
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
                    💬 Talk to an Advisor
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BondInvestmentLesson;