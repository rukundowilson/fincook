"use client";
import React, { useState } from "react";
import {
  TrendingUp,
  BookOpen,
  PieChart,
  DollarSign,
  BarChart,
  Home,
  User,
  Target,
  Award,
  ChevronRight,
  Settings,
  Bell,
  Search,
  CheckCircle,
  Clock,
  Star,
  Play,
  Trophy,
  Filter,
} from "lucide-react";

const FinCookDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // User profile data
  const userProfile = {
    name: "John Uwimana",
    level: "Advanced Learner",
    completedLessons: 12,
    totalLessons: 24,
    points: 2450,
    streak: 7,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  };

  // Lesson categories
  const categories = [
    { id: "all", name: "All Lessons", icon: BookOpen, color: "bg-blue-500", count: 24 },
    { id: "bonds", name: "Bonds", icon: TrendingUp, color: "bg-emerald-500", count: 8 },
    { id: "savings", name: "Savings", icon: PieChart, color: "bg-purple-500", count: 6 },
    { id: "forex", name: "Forex", icon: DollarSign, color: "bg-orange-500", count: 5 },
    { id: "stocks", name: "Stocks", icon: BarChart, color: "bg-red-500", count: 5 },
  ];

  // Lessons data
  const lessons = [
    {
      id: 1,
      title: "Introduction to Government Bonds",
      category: "bonds",
      duration: "15 min",
      difficulty: "Beginner",
      completed: true,
      progress: 100,
      description: "Learn the basics of government bonds and how they work",
      rating: 4.8,
      students: 1250,
    },
    {
      id: 2,
      title: "Bond Investment Strategies",
      category: "bonds",
      duration: "25 min",
      difficulty: "Intermediate",
      completed: true,
      progress: 100,
      description: "Advanced strategies for bond portfolio management",
      rating: 4.9,
      students: 890,
    },
    {
      id: 3,
      title: "Corporate vs Government Bonds",
      category: "bonds",
      duration: "20 min",
      difficulty: "Intermediate",
      completed: false,
      progress: 45,
      description: "Compare different types of bonds and their risk profiles",
      rating: 4.7,
      students: 675,
    },
    {
      id: 4,
      title: "Building Your Emergency Fund",
      category: "savings",
      duration: "18 min",
      difficulty: "Beginner",
      completed: true,
      progress: 100,
      description: "Essential strategies for building financial security",
      rating: 4.9,
      students: 2100,
    },
    {
      id: 5,
      title: "High-Yield Savings Accounts",
      category: "savings",
      duration: "12 min",
      difficulty: "Beginner",
      completed: false,
      progress: 0,
      description: "Maximize your savings with the right account types",
      rating: 4.6,
      students: 1580,
    },
    {
      id: 6,
      title: "Forex Trading Fundamentals",
      category: "forex",
      duration: "30 min",
      difficulty: "Advanced",
      completed: false,
      progress: 0,
      description: "Master the basics of foreign exchange trading",
      rating: 4.5,
      students: 945,
    },
    {
      id: 7,
      title: "Stock Market Basics",
      category: "stocks",
      duration: "22 min",
      difficulty: "Beginner",
      completed: false,
      progress: 20,
      description: "Introduction to stock market investing",
      rating: 4.8,
      students: 1800,
    },
  ];

  // Navigation items
  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "lessons", name: "Lessons", icon: BookOpen },
    { id: "profile", name: "Profile", icon: User },
    { id: "progress", name: "Progress", icon: Target },
    { id: "achievements", name: "Achievements", icon: Award },
  ];

  // Filter lessons by category
  const filteredLessons =
    selectedCategory === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.category === selectedCategory);

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {userProfile.name}! 👋
          </h1>
          <p className="text-emerald-100 mb-6">
            Continue your financial learning journey
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">{userProfile.completedLessons}</div>
              <div className="text-sm text-emerald-100">Lessons Completed</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">{userProfile.points}</div>
              <div className="text-sm text-emerald-100">Points Earned</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">{userProfile.streak}</div>
              <div className="text-sm text-emerald-100">Day Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.slice(1).map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  {category.count}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">Available lessons</p>
            </div>
          );
        })}
      </div>

      {/* Continue Learning */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Continue Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons
            .filter((lesson) => lesson.progress > 0 && lesson.progress < 100)
            .slice(0, 2)
            .map((lesson) => (
              <div
                key={lesson.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {lesson.description}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${{
                      bonds: "bg-emerald-100 text-emerald-800",
                      savings: "bg-purple-100 text-purple-800",
                      forex: "bg-orange-100 text-orange-800",
                      stocks: "bg-red-100 text-red-800",
                    }[lesson.category]}`}
                  >
                    {lesson.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-800">
                        {lesson.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lesson.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  // Lessons Component
  const Lessons = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Learning Modules</h1>
          <p className="text-gray-600">Choose your path to financial mastery</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search lessons..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.name}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${{
                        bonds: "bg-emerald-100 text-emerald-800",
                        savings: "bg-purple-100 text-purple-800",
                        forex: "bg-orange-100 text-orange-800",
                        stocks: "bg-red-100 text-red-800",
                      }[lesson.category]}`}
                    >
                      {lesson.category.toUpperCase()}
                    </span>
                    {lesson.completed && (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {lesson.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {lesson.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {lesson.rating}
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${{
                    Beginner: "bg-green-100 text-green-800",
                    Intermediate: "bg-yellow-100 text-yellow-800",
                    Advanced: "bg-red-100 text-red-800",
                  }[lesson.difficulty]}`}
                >
                  {lesson.difficulty}
                </span>
              </div>

              {lesson.progress > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-medium text-gray-800">
                      {lesson.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${{
                        bonds: "bg-emerald-500",
                        savings: "bg-purple-500",
                        forex: "bg-orange-500",
                        stocks: "bg-red-500",
                      }[lesson.category]}`}
                      style={{ width: `${lesson.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {lesson.students} students
                </span>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${{
                    bonds: "bg-emerald-600 hover:bg-emerald-700 text-white",
                    savings: "bg-purple-600 hover:bg-purple-700 text-white",
                    forex: "bg-orange-600 hover:bg-orange-700 text-white",
                    stocks: "bg-red-600 hover:bg-red-700 text-white",
                  }[lesson.category]}`}
                >
                  {lesson.completed
                    ? "Review"
                    : lesson.progress > 0
                    ? "Continue"
                    : "Start"}
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Profile Component
  const Profile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-8">
          <div className="flex items-center gap-6">
            <img
              src={userProfile.avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-emerald-100">{userProfile.level}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">{userProfile.points} points</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">{userProfile.streak} day streak</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {userProfile.completedLessons}
              </div>
              <div className="text-sm text-gray-600">Completed Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {Math.round(
                  (userProfile.completedLessons / userProfile.totalLessons) * 100
                )}
                %
              </div>
              <div className="text-sm text-gray-600">Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">4.8</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Learning Progress by Category
        </h2>
        <div className="space-y-4">
          {categories.slice(1).map((category) => {
            const completed = lessons.filter(
              (l) => l.category === category.id && l.completed
            ).length;
            const total = lessons.filter((l) => l.category === category.id)
              .length;
            const percentage = total > 0 ? (completed / total) * 100 : 0;

            return (
              <div key={category.id} className="flex items-center gap-4">
                <div className={`${category.color} p-2 rounded-lg`}>
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-800">{category.name}</span>
                    <span className="text-sm text-gray-600">
                      {completed}/{total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${category.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Progress Component
  const Progress = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Your Learning Progress</h1>

      {/* Weekly Progress */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          This Week's Activity
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-gray-600 mb-2">{day}</div>
              <div
                className={`w-8 h-8 rounded-full mx-auto ${
                  index < 5 ? "bg-emerald-500" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                {index < 5 && <CheckCircle className="w-4 h-4 text-white" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Recent Achievements
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
            <Award className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Bond Master
              </h3>
              <p className="text-sm text-gray-600">
                Completed all bond lessons
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-emerald-50 rounded-lg">
            <Target className="w-8 h-8 text-emerald-500" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Week Warrior
              </h3>
              <p className="text-sm text-gray-600">7-day learning streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Achievements Component
  const Achievements = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Achievements & Badges</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="font-bold text-gray-800 mb-2">First Investment</h3>
          <p className="text-sm text-gray-600">Completed your first lesson</p>
          <div className="mt-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm inline-block">
            Earned
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
          <Award className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="font-bold text-gray-800 mb-2">Bond Expert</h3>
          <p className="text-sm text-gray-600">Master all bond lessons</p>
          <div className="mt-4 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm inline-block">
            Earned
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center opacity-50">
          <Star className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-bold text-gray-800 mb-2">Forex Trader</h3>
          <p className="text-sm text-gray-600">Complete all forex lessons</p>
          <div className="mt-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm inline-block">
            Locked
          </div>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "lessons":
        return <Lessons />;
      case "profile":
        return <Profile />;
      case "progress":
        return <Progress />;
      case "achievements":
        return <Achievements />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-screen w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col
          transform transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">FinCook</h1>
            <p className="text-xs text-gray-600">Financial Learning</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? "bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                    {currentPage === item.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t border-gray-200 mt-auto">
          <div className="flex items-center gap-3">
            <img
              src={userProfile.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-emerald-600"
            />
            <div>
              <h2 className="text-sm font-medium text-gray-800">
                {userProfile.name}
              </h2>
              <p className="text-xs text-gray-600">{userProfile.level}</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between bg-white shadow-sm border-b border-gray-200 px-4 py-3 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-emerald-700 hover:bg-emerald-50 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="font-bold text-lg text-emerald-700">FinCook</span>
          <img
            src={userProfile.avatar}
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-emerald-600"
          />
        </div>

        {/* Page Content */}
        <main className="p-4 sm:p-6 md:p-8">{renderCurrentPage()}</main>
      </div>
    </div>
  );
};

export default FinCookDashboard;