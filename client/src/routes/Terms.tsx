import React, { useEffect, useState } from 'react';
import { terms } from '~/staticData';

const Terms: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            aria-label="Go back"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>
      </nav>

      {/* Hero Section - added pt-20 for navbar spacing */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-fade-in"
            style={{ 
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}
          >
            Terms & Conditions
          </h1>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8 animate-slide-in"
            style={{ 
              animationDelay: '0.4s',
              animationFillMode: 'both'
            }}
          ></div>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ 
              animationDelay: '0.6s',
              animationFillMode: 'both'
            }}
          >
            Welcome to <span className="text-purple-400 font-semibold">CAFA AI</span>. These terms govern your use of our artificial intelligence services and establish the legal framework for our relationship.
          </p>
          <div 
            className="mt-8 text-sm text-gray-400 animate-fade-in-up"
            style={{ 
              animationDelay: '0.8s',
              animationFillMode: 'both'
            }}
          >
            Effective date: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {terms.map((term, index) => (
            <section
              key={term.id}
              id={term.id}
              data-section
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has(term.id)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {term.title}
                  </h2>
                </div>
                <div className="ml-12 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
              </div>

              {/* Section Content */}
              <div className="ml-12 space-y-6">
                {term.content.map((paragraph, paragraphIndex) => (
                  <div
                    key={paragraphIndex}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has(term.id)
                        ? 'opacity-100 transform translate-x-0'
                        : 'opacity-0 transform translate-x-4'
                    }`}
                    style={{ 
                      transitionDelay: `${(index * 0.1) + (paragraphIndex * 0.1) + 0.2}s`
                    }}
                  >
                    <p className="text-gray-300 leading-relaxed text-lg hover:text-gray-200 transition-colors duration-300 pl-4 border-l border-gray-700 hover:border-purple-400 hover:pl-6 transition-all duration-300">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Important Notice */}
        <div 
          className="mt-24 p-8 bg-gradient-to-r from-purple-900/30 to-purple-800/30 rounded-2xl border border-purple-500/30 shadow-2xl animate-fade-in-up"
          style={{ 
            animationDelay: '1s',
            animationFillMode: 'both'
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Important Legal Notice
              </h3>
              <p className="text-gray-300 leading-relaxed">
                These terms constitute a legally binding agreement. By using CAFA AI's services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div 
          className="mt-12 text-center p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl shadow-2xl border border-gray-600 animate-fade-in-up"
          style={{ 
            animationDelay: '1.2s',
            animationFillMode: 'both'
          }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/privacy"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              role="button"
              aria-label="View privacy policy"
            >
              View Privacy Policy
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 6rem;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #8b5cf6;
        }
      `}</style>
    </div>
  );
};

export default Terms;