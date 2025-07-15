import React, { useState } from 'react';
import { 
  Instagram, 
  Twitter, 
  
  Linkedin, 
  Youtube, 
  Github,
  Facebook,
  Globe
} from 'lucide-react';
import logo from '../src/image/logo.png';

// =============================================================================
// CONFIGURATION SECTION - Easy customization
// =============================================================================

// Social Media Links - Easy to update and add new platforms
const SOCIAL_LINKS = [
  {
    platform: "Facebook",
    url: "https://facebook.com/profile.php?id=61578206197095",
    icon: Facebook, // Replace with Facebook icon if available
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    hoverColor: "hover:from-blue-600 hover:to-blue-800"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/govu_palu",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    hoverColor: "hover:from-purple-600 hover:to-pink-600"
  },
  {
    platform: "X",
    url: "https://x.com/govupalu",
    icon: Twitter, // Replace with X icon if available
    color: "bg-gradient-to-br from-gray-800 to-black",
    hoverColor: "hover:from-gray-900 hover:to-black"
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@Govupalu",
    icon: Youtube,
    color: "bg-gradient-to-br from-red-500 to-red-700",
    hoverColor: "hover:from-red-600 hover:to-red-800"
  },
  {
    platform: "Website",
    url: "https://govupalu.com",
    icon: Globe, // Replace with a globe or link icon if available
    color: "bg-gradient-to-br from-green-400 to-green-700",
    hoverColor: "hover:from-green-500 hover:to-green-800"
  }
];

// =============================================================================
// MAIN APP COMPONENT
// =============================================================================

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <img src={logo} alt="govupalu logo" className="w-24 h-24 mb-4 rounded-full shadow-lg object-cover" />
      {/* Brand Name */}
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">govupalu</h1>
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000 opacity-30"></div>
      </div>
      
      {/* Social Icons Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
        {SOCIAL_LINKS.map((link, index) => {
          const IconComponent = link.icon;
          
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`Visit ${link.platform}`}
            >
              <div className={`
                relative overflow-hidden rounded-3xl ${link.color} ${link.hoverColor} 
                w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                flex items-center justify-center
                transition-all duration-300 ease-out
                transform hover:scale-110 hover:rotate-3
                shadow-lg hover:shadow-2xl
                group-focus:scale-110 group-focus:shadow-2xl
              `}>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Platform name tooltip on hover */}
              <div className={`
                absolute -bottom-8 left-1/2 transform -translate-x-1/2
                bg-gray-900 text-white text-xs px-2 py-1 rounded
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                pointer-events-none whitespace-nowrap
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `}>
                {link.platform}
              </div>
            </a>
          );
        })}
      </div>
      {/* Contact Email */}
      <div className="mt-10 text-center">
        <a href="mailto:contact@govupalu.com" className="text-blue-700 hover:underline text-lg font-medium">contact@govupalu.com</a>
      </div>
    </div>
  );
}

export default App;