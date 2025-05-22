import React from 'react';
import { Lock, Bookmark, Share2, TrendingUp, Building2, Star, ArrowRight } from 'lucide-react';

interface InvestmentResource {
  id: string;
  title: string;
  description: string;
  type: 'investment-guide' | 'market-analysis' | 'company-ratings';
  category: string;
  author: string;
  publishDate: string;
  isLocked: boolean;
  companyCount: number;
  topRatedCompanies: string[];
  lastUpdated: string;
}

interface RwandaInvestmentGradesProps {
  isLoggedIn: boolean;
  isBookmarked: boolean;
  onNavigateToGrades: () => void;
  onBookmark: () => void;
  onShare: () => void;
  onLogin: () => void;
  
}

const RwandaInvestmentGrades: React.FC<RwandaInvestmentGradesProps> = ({
  isLoggedIn,
  isBookmarked,
  onNavigateToGrades,
  onBookmark,
  onShare,
  onLogin
}) => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'investment-guide':
        return <TrendingUp className="h-6 w-6 text-emerald-500" />;
      case 'market-analysis':
        return <Building2 className="h-6 w-6 text-blue-500" />;
      case 'company-ratings':
        return <Star className="h-6 w-6 text-yellow-500" />;
      default:
        return <TrendingUp className="h-6 w-6 text-emerald-500" />;
    }
  };

  const explainGrade = {
    companyCount: 20,
    topRatedCompanies: ['Inyange', "Bralirwa", "Cimerwa"],
    lastUpdated: 'N/A',
    publishDate: 'N/A',
    isLocked: true,
  }

  const handleNavigateToGrades = () => {
    if (!isLoggedIn && explainGrade.isLocked) {
      onLogin();
      return;
    }
    onNavigateToGrades();
  };

  return (
    <div className="mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              {/* {getResourceIcon(explainGrade.type)} */}
              <span className="ml-2 text-sm text-gray-500 uppercase"></span>
              <span className="ml-4 text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                Rwanda Market
              </span>
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {/* {explainGrade.category} */}
                <Building2 className="h-4 w-4 mr-2" />
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {/* {explainGrade.title} */}
            </h1>
            <p className="text-gray-600 mb-4">
                {/* {explainGrade.description} */}
            </p>
            
            {/* Investment Highlights */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-emerald-800 mb-2 flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Rwanda Investment Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center text-gray-700">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span>{explainGrade.companyCount}+ Top-Rated Companies</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <TrendingUp className="h-4 w-4 text-emerald-500 mr-2" />
                  <span>Investment Grade Analysis</span>
                </div>
              </div>
              
              {explainGrade.topRatedCompanies.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gray-600 mb-1">Featured Companies:</p>
                  <div className="flex flex-wrap gap-1">
                    {explainGrade.topRatedCompanies.slice(0, 3).map((company, index) => (
                      <span key={index} className="text-xs bg-white text-emerald-700 px-2 py-1 rounded border border-emerald-200">
                        {company}
                      </span>
                    ))}
                    {explainGrade.topRatedCompanies.length > 3 && (
                      <span className="text-xs text-emerald-600">
                        +{explainGrade.topRatedCompanies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2">
              {/* <span>By: {explainGrade.author}</span> */}
              <span>Published: {explainGrade.publishDate}</span>
              <span>Last Updated: {explainGrade.lastUpdated}</span>
              <span>Companies: {explainGrade.companyCount}</span>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col md:items-end md:ml-6">
            {!isLoggedIn && explainGrade.isLocked ? (
              <div className="flex items-center mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <Lock className="h-5 w-5 text-yellow-500 mr-3" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Login Required</h3>
                  <p className="text-xs text-gray-600">Access exclusive investment grades and company analysis</p>
                </div>
              </div>
            ) : null}
            
            <div className="flex flex-col space-y-2 w-full md:w-auto">
              {/* Main CTA Button */}
              <button
                onClick={handleNavigateToGrades}
                className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {!isLoggedIn && explainGrade.isLocked ? (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    Login to View Grades
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Investment Grades
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </button>
              
              {/* Secondary Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={onBookmark}
                  className={`p-2 rounded ${
                    isBookmarked 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-gray-100 text-gray-600'
                  } hover:bg-emerald-200 transition-colors`}
                  title="Bookmark this resource"
                >
                  <Bookmark className="h-5 w-5" />
                </button>
                <button 
                  onClick={onShare}
                  className="p-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  title="Share this resource"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RwandaInvestmentGrades;