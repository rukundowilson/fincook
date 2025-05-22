"use client";
import { useState } from 'react';
import { ChevronRightIcon, BookOpenIcon, AcademicCapIcon, ChartBarSquareIcon as ChartBarIcon, CurrencyDollarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/app/components/Nav';
import Footer from '../components/Footer';
import Cta from "../components/Cta&quote"
import React from 'react';

export default function Learn() {
  const [activeTab, setActiveTab] = useState('basics');

  const tabs = [
    { id: 'basics', name: 'Investment Basics' },
    { id: 'types', name: 'Types of Investments' },
    { id: 'strategies', name: 'Investment Strategies' },
    { id: 'risks', name: 'Understanding Risks' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Learn - Route2Wealth</title>
        <meta name="description" content="Learn about investing with Route2Wealth educational resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Nav/>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Investing Education Hub
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-emerald-100">
            Your journey to financial literacy starts here. Explore our comprehensive guides and resources on investing.
          </p>
          <div className="mt-10">
            <div className="inline-flex rounded-md shadow">
              <Link href="#investment-basics" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50">
                Get Started
                <ChevronRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Learning Path Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-emerald-800 mb-6">Your Learning Path</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-8 bg-emerald-50">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <BookOpenIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">For Beginners</h3>
                <p className="text-gray-600">
                  Start with the fundamentals of investing, learn key terminology, and understand basic investment concepts.
                </p>
                <div className="mt-4">
                    <Link href="#investment-basics" className="text-emerald-600 font-medium hover:text-emerald-500">Begin here →</Link>
                  </div>
              </div>
              <div className="lg:w-1/3 p-8 bg-white">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">For Intermediate</h3>
                <p className="text-gray-600">
                  Explore different types of investments, understand market dynamics, and learn about portfolio diversification.
                </p>
                <div className="mt-4">
                  <Link href="#investment-types" className="text-emerald-600 font-medium hover:text-emerald-500">Explore more →</Link>
                </div>
              </div>
              <div className="lg:w-1/3 p-8 bg-emerald-50">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <AcademicCapIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">For Advanced</h3>
                <p className="text-gray-600">
                  Master advanced strategies, risk management techniques, and learn how to analyze investment opportunities.
                </p>
                <div className="mt-4">
                  <Link href="#investment-strategies" className="text-emerald-600 font-medium hover:text-emerald-500">Advance further →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <div className="sm:flex sm:items-baseline">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Investment Education</h3>
            <div className="mt-4 sm:mt-0 sm:ml-10">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                      ${activeTab === tab.id ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-10">
          {/* Investment Basics */}
          {activeTab === 'basics' && (
            <div id="investment-basics" className="prose prose-emerald max-w-none">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Introduction to Investments</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">What is Investing?</h3>
                <p className="mb-4">
                  Investing is the act of allocating resources, usually money, with the expectation of generating an income or profit over time. Unlike saving, which means setting aside money for future use, investing puts your money to work with the goal of growing your wealth.
                </p>
                <p>
                  When you invest, you're purchasing assets that you believe will increase in value over time. The profits you make from these investments can come in different forms:
                </p>
                <ul className="list-disc pl-5 mt-4 mb-4">
                  <li className="mb-2"><strong className="text-emerald-600">Capital appreciation:</strong> The increase in the market value of your investment</li>
                  <li className="mb-2"><strong className="text-emerald-600">Dividends or distributions:</strong> Payments made to shareholders from a company's profits</li>
                  <li className="mb-2"><strong className="text-emerald-600">Interest:</strong> Money paid regularly at a particular rate for using borrowed money</li>
                  <li><strong className="text-emerald-600">Rental income:</strong> Money received from tenants or lessees of real estate properties</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Why Should You Invest?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-emerald-100 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                      <CurrencyDollarIcon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-medium text-emerald-800 mb-2">Building Wealth</h4>
                    <p className="text-gray-600">
                      Investing allows your money to grow through the power of compounding, helping you build wealth over time.
                    </p>
                  </div>
                  <div className="p-4 border border-emerald-100 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                      <ClockIcon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-medium text-emerald-800 mb-2">Planning for Retirement</h4>
                    <p className="text-gray-600">
                      Investments help you prepare for retirement by creating income streams that will support you when you no longer work.
                    </p>
                  </div>
                  <div className="p-4 border border-emerald-100 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                      <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-medium text-emerald-800 mb-2">Beating Inflation</h4>
                    <p className="text-gray-600">
                      Investments typically offer returns that exceed inflation rates, protecting your purchasing power over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Key Investment Concepts</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Risk and Return</h4>
                  <p>
                    One of the most fundamental principles in investing is the relationship between risk and return. Generally, investments with higher potential returns come with higher risks. Understanding your risk tolerance is crucial for building an investment portfolio that aligns with your financial goals and comfort level.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Diversification</h4>
                  <p>
                    Diversification involves spreading your investments across various asset classes and securities to reduce risk. The strategy follows the wisdom of not putting "all your eggs in one basket." A well-diversified portfolio might include a mix of stocks, bonds, real estate, and other investment vehicles.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Compound Interest</h4>
                  <p>
                    Often called the "eighth wonder of the world," compound interest refers to earning interest on both your initial investment and the interest already earned. Over time, compounding can significantly accelerate the growth of your investments, especially when started early.
                  </p>
                  <div className="mt-4 bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm text-emerald-800">
                      <strong>Example:</strong> If you invest $10,000 with an annual return of 7%, after 10 years you would have about $19,672. After 30 years, that same $10,000 would grow to approximately $76,123, showcasing the power of compounding over time.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Time Horizon</h4>
                  <p>
                    Your investment time horizon is the expected period you plan to hold an investment before needing the money. Longer time horizons typically allow for more aggressive investment strategies since there's more time to recover from market downturns. Understanding your time horizon helps in selecting appropriate investments that align with when you'll need to access your funds.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Ready to Learn More?</h3>
                <p className="mb-4">
                  This introduction covers just the basics of investing. Continue exploring our learning modules to deepen your understanding of specific investment types, strategies, and risk management techniques.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setActiveTab('types')} 
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-150 ease-in-out"
                  >
                    Explore Investment Types →
                  </button>
                </div>
              </div>
            </div>  
          )}

          {/* Investment Types */}
          {activeTab === 'types' && (
            <div id="investment-types" className="prose prose-emerald max-w-none">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Types of Investments</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Common Investment Vehicles</h3>
                
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Stocks</h4>
                  <p className="mb-3">
                    Stocks represent ownership shares in a company. When you buy a stock, you're purchasing a small piece of that company, becoming a shareholder.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Advantages</h5>
                      <ul className="list-disc pl-5">
                        <li>Potential for high returns</li>
                        <li>Ownership in real companies</li>
                        <li>Dividend income possibilities</li>
                        <li>Liquidity (easy to buy/sell)</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Considerations</h5>
                      <ul className="list-disc pl-5">
                        <li>Higher volatility</li>
                        <li>Requires research and monitoring</li>
                        <li>Market risk</li>
                        <li>No guaranteed returns</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Bonds</h4>
                  <p className="mb-3">
                    Bonds are debt securities where you loan money to an entity (government, municipality, or corporation) for a defined period at a fixed interest rate.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Advantages</h5>
                      <ul className="list-disc pl-5">
                        <li>Regular income through interest payments</li>
                        <li>Generally lower risk than stocks</li>
                        <li>Principal repayment at maturity</li>
                        <li>Portfolio stabilization</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Considerations</h5>
                      <ul className="list-disc pl-5">
                        <li>Lower potential returns than stocks</li>
                        <li>Interest rate risk</li>
                        <li>Inflation risk</li>
                        <li>Credit/default risk</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Mutual Funds & ETFs</h4>
                  <p className="mb-3">
                    Mutual funds and Exchange-Traded Funds (ETFs) pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Advantages</h5>
                      <ul className="list-disc pl-5">
                        <li>Instant diversification</li>
                        <li>Professional management</li>
                        <li>Accessibility for small investors</li>
                        <li>Variety of investment objectives</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Considerations</h5>
                      <ul className="list-disc pl-5">
                        <li>Management fees and expenses</li>
                        <li>Less control over specific investments</li>
                        <li>Potential tax inefficiencies (mutual funds)</li>
                        <li>Performance variability</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Real Estate</h4>
                  <p className="mb-3">
                    Real estate investments involve purchasing physical property or investing in Real Estate Investment Trusts (REITs).
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Advantages</h5>
                      <ul className="list-disc pl-5">
                        <li>Potential for both income and appreciation</li>
                        <li>Tangible asset</li>
                        <li>Hedge against inflation</li>
                        <li>Tax advantages</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-emerald-700 mb-2">Considerations</h5>
                      <ul className="list-disc pl-5">
                        <li>Less liquidity</li>
                        <li>Management responsibilities</li>
                        <li>Higher initial capital requirement</li>
                        <li>Market fluctuations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Continue Your Investment Education</h3>
                <p className="mb-4">
                  Now that you understand different investment types, learn how to develop effective strategies for combining these investments in your portfolio.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setActiveTab('strategies')} 
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-150 ease-in-out"
                  >
                    Learn Investment Strategies →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Investment Strategies */}
          {activeTab === 'strategies' && (
            <div id="investment-strategies" className="prose prose-emerald max-w-none">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Investment Strategies</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Common Investment Approaches</h3>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Value Investing</h4>
                  <p className="mb-3">
                    Value investing focuses on finding stocks that appear to be undervalued relative to their intrinsic or book value. Value investors look for companies trading at a discount to what they believe the company is actually worth.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-emerald-700 mb-2">Key Principles:</h5>
                    <ul className="list-disc pl-5">
                      <li>Look for stocks with low price-to-earnings (P/E) ratios</li>
                      <li>Evaluate companies based on fundamentals like earnings, dividends, and assets</li>
                      <li>Seek a "margin of safety" between market price and intrinsic value</li>
                      <li>Requires patience and a long-term perspective</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Growth Investing</h4>
                  <p className="mb-3">
                    Growth investing focuses on companies that demonstrate signs of above-average growth, even if the share price appears expensive compared to market metrics like earnings or book value.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-emerald-700 mb-2">Key Principles:</h5>
                    <ul className="list-disc pl-5">
                      <li>Focus on companies with strong revenue and earnings growth</li>
                      <li>Look for businesses in expanding industries</li>
                      <li>Less concerned with current valuations if growth potential is high</li>
                      <li>Often involves technology, healthcare, and other innovative sectors</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Income Investing</h4>
                  <p className="mb-3">
                    Income investing prioritizes investments that generate steady cash flow, such as dividend-paying stocks, bonds, and real estate investment trusts (REITs).
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-emerald-700 mb-2">Key Principles:</h5>
                    <ul className="list-disc pl-5">
                      <li>Focus on dividend yield and consistency of payments</li>
                      <li>Look for companies with strong cash flows and stable business models</li>
                      <li>Reinvest dividends to compound returns</li>
                      <li>Popular among retirees and those seeking passive income</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Investment Strategies */}
          {activeTab === 'risks' && (
            <div id="investment-strategies" className="prose prose-emerald max-w-none">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">Understanding Risks
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">What Is Risk?</h3>

                <div className="mb-8">
                  <p className="mb-3">
                  At its core, risk is the possibility that an action or decision will lead to a loss or an undesired outcome.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc pl-5">
                      <li>Uncertainty: Not knowing exactly what will happen.</li>
                      <li>Impact: The consequence if something goes wrong.</li>
                    </ul>
                  </div>
                  <p className='mb-3'>
                      For example, driving a car involves the risk of an accident. Starting a business involves the risk of financial loss. Even crossing the street carries some level of risk.
                    </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Types of Risk</h4>
                  <p className="mb-3">
                  Understanding the different types of risks helps in identifying and managing them effectively. Common categories include:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-emerald-700 mb-2">Key Principles:</h5>
                    <ul className="list-disc pl-5">
                      <li>Financial Risk: The possibility of losing money or assets.</li>
                      <li>Strategic Risk: Poor investiment decisions or failure to adapt to changes.</li>
                      <li>Compliance Risk: Breaking laws or regulations.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">
                    Why Risk Matters
                  </h4>
                  <p className="mb-3">
                  Risk is not always negative. It can also present opportunities. For instance, investing in a new market is risky—but it could yield high returns. The key is not to eliminate all risk, but to understand, measure, and manage it.  
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-emerald-800 mb-2">Risk Management</h4>
                  <p className="mb-3">
                  Risk management is the process of identifying, assessing, and controlling risks. It involves making informed decisions to minimize potential losses while maximizing opportunities.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-emerald-700 mb-2">Key Principles:</h5>
                    <ul className="list-disc pl-5">
                      <li>Identify potential risks</li>
                      <li>Assess the likelihood and impact of each risk</li>
                      <li>Implement strategies to mitigate or transfer risks</li>
                      <li>Monitor and review risks regularly</li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
                )}
          </div>
        </div>
                        <Cta/>
                        <Footer/>
                      </div>
                      
                    );
                  }
