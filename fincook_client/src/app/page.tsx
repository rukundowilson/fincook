"use client"
import { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChevronDownIcon, ChartBarIcon, AcademicCapIcon, CurrencyDollarIcon, CheckBadgeIcon as BadgeCheckIcon, CalendarIcon, UserIcon, ChatBubbleOvalLeftIcon as ChatAlt2Icon, EnvelopeIcon as MailIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cta from './components/Cta&quote';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consultationType: 'virtual'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      consultationType: 'virtual'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>fincook - Empowering Investment Decisions</title>
        <meta name="description" content="fincook - Empowering local communities to make smarter investment decisions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      
      {/* Hero Section */}
      <div id="home" className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 pt-16 pb-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Smart Investment Decisions
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl">
              Wealth begins with knowledge. fincook is the path to financial success through reliable resources, education, and expert guidance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-400 shadow-md">
                sign up for free
              </a>
              <a href="#contact" className="px-8 py-3 border border-emerald-200 text-base font-medium rounded-md text-white hover:bg-emerald-700 shadow-md">
                Request a Quote
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/invest-rw.png" 
              alt="Investment Illustration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-emerald-800 sm:text-4xl">
              Why Choose fincook?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our platform provides everything you need to make informed investment decisions
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-500">
              <div className="bg-emerald-100 rounded-full p-3 inline-block">
                <ChartBarIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-emerald-800">Investment Insights</h3>
              <p className="mt-2 text-gray-600">
                Updated, easy-to-understand content on stock markets, partnerships, and savings plans.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-500">
              <div className="bg-emerald-100 rounded-full p-3 inline-block">
                <BadgeCheckIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-emerald-800">Top Rankings</h3>
              <p className="mt-2 text-gray-600">
                We research and rank the most profitable local institutions and investment options.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-500">
              <div className="bg-emerald-100 rounded-full p-3 inline-block">
                <CurrencyDollarIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-emerald-800">Business Advisory</h3>
              <p className="mt-2 text-gray-600">
                Smart strategies and recommendations for entrepreneurs and SMEs to maximize returns.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-500">
              <div className="bg-emerald-100 rounded-full p-3 inline-block">
                <AcademicCapIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-emerald-800">Learning Center</h3>
              <p className="mt-2 text-gray-600">
                Access curated educational material tailored to your local financial ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-emerald-800 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive financial guidance customized to your needs
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="bg-emerald-500 rounded-lg p-4 absolute -left-4 mt-2">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-medium text-emerald-800">Investment Hub</h3>
                  <p className="mt-2 text-gray-600">
                    Explore short-term and long-term investment opportunities tailored to your local market. Get real-time updates and personalized recommendations.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-emerald-500 rounded-lg p-4 absolute -left-4 mt-2">
                  <BadgeCheckIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-medium text-emerald-800">Rankings & Reports</h3>
                  <p className="mt-2 text-gray-600">
                    View comprehensive rankings of high-performing local financial institutions, funds, and investment opportunities based on reliable data.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-emerald-500 rounded-lg p-4 absolute -left-4 mt-2">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-medium text-emerald-800">Business Advisory</h3>
                  <p className="mt-2 text-gray-600">
                    Learn how to allocate and grow business capital with expert strategies tailored to your industry and company size.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-emerald-500 rounded-lg p-4 absolute -left-4 mt-2">
                  <ChatAlt2Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-medium text-emerald-800">Expert Consultation</h3>
                  <p className="mt-2 text-gray-600">
                    Schedule virtual or face-to-face consultations with our financial professionals to get personalized investment guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-emerald-800 sm:text-4xl">
              Learning Center
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Build your financial literacy with our educational resources
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <AcademicCapIcon className="h-24 w-24 text-emerald-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-emerald-800">Investment Basics</h3>
                <p className="mt-2 text-gray-600">
                  Learn fundamental investing concepts with our beginner-friendly guides and courses.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-500">
                  Learn more
                  <ChevronDownIcon className="ml-1 h-4 w-4 transform rotate-270" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <CalendarIcon className="h-24 w-24 text-emerald-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-emerald-800">Webinars & Workshops</h3>
                <p className="mt-2 text-gray-600">
                  Participate in live and recorded training sessions with our financial experts.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-500">
                  See schedule
                  <ChevronDownIcon className="ml-1 h-4 w-4 transform rotate-270" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <UserIcon className="h-24 w-24 text-emerald-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-emerald-800">Personalized Learning Path</h3>
                <p className="mt-2 text-gray-600">
                  Get a customized education plan based on your experience level and investment goals.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-500">
                  Get started
                  <ChevronDownIcon className="ml-1 h-4 w-4 transform rotate-270" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cta/>
      <Footer/>

      {/* Footer */}
    </div>
  );
}