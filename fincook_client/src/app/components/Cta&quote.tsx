"use client";
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChevronDownIcon, ChartBarIcon, AcademicCapIcon, CurrencyDollarIcon, CheckBadgeIcon as BadgeCheckIcon, CalendarIcon, UserIcon, ChatBubbleOvalLeftIcon as ChatAlt2Icon, EnvelopeIcon as MailIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
export default function Cta() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consultationType: 'virtual'
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would handle the form submission, e.g., send to an API
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
        
      <div id="contact" className="bg-gradient-to-r from-emerald-800 to-emerald-600 py-16">
        {/* CTA & Quote Request Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="px-6 py-10 md:px-8 md:py-12 bg-emerald-50">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-extrabold text-emerald-800">
                  Ready to start your wealth journey?
                </h2>
                <p className="mt-4 text-gray-600">
                  Request a consultation with our financial experts to get personalized investment guidance. Choose between virtual or face-to-face meetings.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ChatAlt2Icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="ml-3 text-gray-700">
                      Virtual consultation with investment experts
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <UserIcon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="ml-3 text-gray-700">
                      Face-to-face meetings for in-depth guidance
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <MailIcon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="ml-3 text-gray-700">
                      Custom investment reports and recommendations
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-10 md:px-8 md:py-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-emerald-800">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700">Consultation Type</label>
                    <select
                      name="consultationType"
                      id="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
                    >
                      <option value="virtual">Virtual Meeting</option>
                      <option value="inperson">Face-to-Face Meeting</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}