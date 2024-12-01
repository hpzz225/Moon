import React, { useState } from 'react';
import { 
  Home, 
  ShoppingCart, 
  Users, 
  Search, 
  Bell, 
  User 
} from 'lucide-react';

const Sidebar = () => {
  const [activeModule, setActiveModule] = useState('homepage');

  const sidebarModules = [
    { 
      id: 'homepage', 
      icon: <Home className="w-6 h-6" />, 
      label: 'Homepage' 
    },
    { 
      id: 'orders', 
      icon: <ShoppingCart className="w-6 h-6" />, 
      label: 'Orders' 
    },
    { 
      id: 'customers', 
      icon: <Users className="w-6 h-6" />, 
      label: 'Customers' 
    }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col">
      {/* Sidebar Header with Logo */}
      <div className="h-16 flex items-center justify-center border-b">
        <img 
          src="/api/placeholder/120/40" 
          alt="Logo" 
          className="h-10"
        />
      </div>

      {/* Sidebar Content */}
      <nav className="flex-grow py-4">
        {sidebarModules.map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module.id)}
            className={`
              w-full px-6 py-3 flex items-center space-x-3 
              ${activeModule === module.id 
                ? 'bg-blue-100 text-blue-600' 
                : 'hover:bg-gray-100'}
            `}
          >
            {module.icon}
            <span className="text-md">{module.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

// Top Navigation Component
const TopNavigation = () => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-6">
      {/* Search Bar - Left Side */}
      <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
        <Search className="w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent outline-none w-64"
        />
      </div>

      {/* Notifications and Avatar - Right Side */}
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            3
          </span>
        </button>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TopNavigation />
      {/* Placeholder for main content area */}
      <main className="ml-64 mt-16 p-6 w-full">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Layout;