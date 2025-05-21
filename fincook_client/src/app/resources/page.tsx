"use client";
import { ArrowLeft, Download, Lock, Share2, Bookmark, FileText, BookOpen, Video, Unlock } from 'lucide-react';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/app/components/Nav';
import Footer from '../components/Footer';
import Cta from "../components/Cta&quote"
import Toast from '../components/Toast';

interface ResourcePageProps {
  resourceId?: string;
}

export default function SingleResourcePage({ resourceId = '1' }: ResourcePageProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastCondition, setToastCondition] = useState<boolean>(false);

  // Mock resource data
  const resource = {
    id: '1',
    title: "Beginner's Guide to Stock Market",
    type: 'pdf',
    description: 'A comprehensive guide for those new to stock investing.',
    longDescription: 'This comprehensive guide walks you through everything you need to know to start investing in the stock market. From understanding what stocks are to learning how to analyze companies and build a balanced portfolio, this resource is perfect for beginners who want to start their investment journey.',
    category: 'Stocks',
    isLocked: true,
    author: 'Financial Education Team',
    publishDate: 'April 15, 2025',
    fileSize: '2.4 MB',
    pageCount: 42,
    relatedResources: [
      { id: '2', title: 'Understanding ETFs', type: 'guide' },
      { id: '6', title: 'Market Analysis Techniques', type: 'pdf' }
    ]
  };
  const resource2 = {
    id: '2',
    title: "Overview of Agricultural Finance in Rwanda",
    type: 'pdf',
    description: 'A comprehensive guide for those who want to invest in agriculture in Rwanda.',
    longDescription: `Agriculture is the most important sector of the \
                        economy of Rwanda. Eighty six percent (86%) of the \
                        adult population is involved in agriculture whether \
                        as its main source of income or employment. \
                        Since 2014 agriculture has a growth of six percent \
                        (6%) and in the last quarter of 2018, it contributed \
                        twenty seven percent (27%) to Rwandan GDP. \
                        The agriculture sector growth is hence essential if \
                        Rwanda wants to achieve its target set in NST 1 and \
                        national development programs.`,
    category: 'Stocks',
    isLocked: false,
    author: 'fincook educatin team',
    publishDate: 'may 21, 2025',
    fileSize: '2.8 MB',
    pageCount: 96,
    relatedResources: [
      { id: '6', title: 'Understanding ETFs', type: 'guide' },
      { id: '6', title: 'Market Analysis Techniques', type: 'pdf' }
    ]
  };

  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-green-600" />;
      case 'guide':
        return <BookOpen className="h-5 w-5 text-green-600" />;
      case 'video':
        return <Video className="h-5 w-5 text-green-600" />;
      default:
        return <FileText className="h-5 w-5 text-green-600" />;
    }
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleDownload = () => {
    if (!isLoggedIn) {
      alert('Please log in to download this resource');
    } else {
      console.log(`Downloading resource: ${resource.title}`);
    }
  };
  const noLoginDownload = () => {
    const fileName = "documents/fincook_agriculture_finance.pdf";
    const fileUrl = `/${fileName}`;
  
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName.split("/").pop() || "download"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setToastMessage("your file is ready for download")

  };
  
  const handleBookmark = () => {
    if (!isLoggedIn) {
      alert('Please log in to bookmark this resource');
    } else {
      setIsBookmarked(!isBookmarked);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

    {/* toast */}
    {toastMessage && (
        <Toast message={toastMessage} conditiion={toastCondition} onclose={() => setToastMessage('')}/>
    )}
      {/* navbar */}
      <Nav/>
      {/* Back Navigation */}
      <div className='max-w-7xl mx-auto'>
      <div className="mx-auto px-4 py-6">
      <button
                  onClick={()=>window.location.href="/login"}
                  className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded font-medium"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  login
                </button>

      </div>

      {/* Resource Header */}
      <div className="mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center mb-2">
                {getResourceIcon(resource2.type)}
                <span className="ml-2 text-sm text-gray-500 uppercase">{resource2.type}</span>
                <span className="ml-4 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{resource2.category}</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{resource2.title}</h1>
              <p className="text-gray-600 mb-4">{resource2.description}</p>
              <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2">
                <span>By: {resource2.author}</span>
                <span>Published: {resource2.publishDate}</span>
                <span>Size: {resource2.fileSize}</span>
                <span>Pages: {resource2.pageCount}</span>
              </div>
            </div>
            {/* no login required */}
            <div className="mt-6 md:mt-0 flex flex-col md:items-end">
              <div className="flex space-x-2">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded ${isBookmarked ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'} hover:bg-green-200`}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={noLoginDownload}
                  className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded font-medium"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource login required */}
      <div className="mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center mb-2">
                {getResourceIcon(resource.type)}
                <span className="ml-2 text-sm text-gray-500 uppercase">{resource.type}</span>
                <span className="ml-4 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{resource.category}</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{resource.title}</h1>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2">
                <span>By: {resource.author}</span>
                <span>Published: {resource.publishDate}</span>
                <span>Size: {resource.fileSize}</span>
                <span>Pages: {resource.pageCount}</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col md:items-end">
              {!isLoggedIn && resource.isLocked ? (
                <div className="flex items-center mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <Lock className="h-5 w-5 text-yellow-500 mr-3" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">login required</h3>
                    <p className="text-xs text-gray-600">Login to access this document</p>
                  </div>
                </div>
              ) : null}
              <div className="flex space-x-2">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded ${isBookmarked ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'} hover:bg-green-200`}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded font-medium"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Preview and Login CTA */}
      <div className="mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Resource preview section */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About this Resource</h2>
            <p className="text-gray-700 mb-6">{resource.longDescription}</p>
            
            {/* Preview content - visible to all */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Preview Contents</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 hover:bg-emerald-600 mr-3"></div>
                  Chapter 1: Introduction to the Stock Market
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 hover:bg-emerald-600 mr-3"></div>
                  Chapter 2: Understanding Stocks and Shares
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 hover:bg-emerald-600 mr-3"></div>
                  Chapter 3: How to Research Companies
                </li>
              </ul>
            </div>
          </div>
          
          {/* Locked content overlay */}
          {!isLoggedIn && resource.isLocked && (
            <div className="bg-gray-50 p-8 border-t border-gray-200">
              <div className="text-center max-w-lg mx-auto">
                <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Full Content Locked</h3>
                <p className="text-gray-600 mb-6">
                  Log in to unlock the complete document, download it, and access all our premium investment resources.
                </p>
                <button 
                  onClick={handleLoginClick}
                  className="bg-emerald-500 hover:bg-emerald-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium w-full sm:w-auto"
                >
                  Log In to Access
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  Don't have an account? <a href="#" className="text-green-600 hover:underline">Sign up for free</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Resources */}
      <div className="mx-auto px-4 py-6 mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resource.relatedResources.map((related) => (
            <a 
              key={related.id}
              href={`/resources/${related.id}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                {getResourceIcon(related.type)}
                <span className="ml-2 text-xs text-gray-500 uppercase">{related.type}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600">{related.title}</h3>
            </a>
          ))}
        </div>
      </div>
      </div>
      {/* Call to Action */}
      <Cta/>
      {/* Footer */}
        <Footer/>
    </div>
  );
}