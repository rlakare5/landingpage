import React, { useState, useEffect } from 'react';
import { Home, User, Mail } from 'lucide-react';

type Page = 'landing' | 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [showFoam, setShowFoam] = useState(false);
  const [foamReachedBottom, setFoamReachedBottom] = useState(false);

  useEffect(() => {
    // Start foam animation after component mounts
    const timer1 = setTimeout(() => {
      setShowFoam(true);
    }, 1000);

    // Show navigation after foam reaches bottom
    const timer2 = setTimeout(() => {
      setFoamReachedBottom(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const renderLandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Champagne Bottle Container */}
        <div className="relative mx-auto mb-8">
          <div className="relative w-32 h-96 mx-auto">
            {/* Bottle */}
            <img
              src="/champagne-146885_1920.png"
              alt="Champagne Bottle"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            
            {/* Foam Animation - Starting from bottle cap */}
            {showFoam && (
              <div className="absolute inset-0 overflow-hidden">
                {/* Main foam stream from cap to bottom */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 bg-gradient-to-b from-white via-white to-transparent opacity-90 foam-stream-cap" />
                
                {/* Foam bubbles starting from cap area */}
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-white rounded-full opacity-80 foam-bubble-cap-${i}`}
                    style={{
                      left: `${44 + Math.random() * 12}%`,
                      top: '16px', // Start from cap area
                      animationDelay: `${Math.random() * 1.5}s`,
                      animationDuration: `${2.5 + Math.random() * 1.5}s`,
                    }}
                  />
                ))}
                
                {/* Additional smaller bubbles for realistic effect */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={`small-${i}`}
                    className={`absolute w-1 h-1 bg-white rounded-full opacity-60 foam-bubble-small-${i}`}
                    style={{
                      left: `${46 + Math.random() * 8}%`,
                      top: '20px',
                      animationDelay: `${0.5 + Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
                
                {/* Foam splash effect at the cap */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full opacity-70 foam-splash" />
              </div>
            )}
          </div>
        </div>

        {/* Brand Title */}
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 mb-4 tracking-wider">
          MATHIE & CLAUDINE
        </h1>
        <p className="text-xl text-gray-300 mb-8 font-light">
          Brut Impérial • Premium Champagne
        </p>

        {/* Navigation Tabs */}
        {foamReachedBottom && (
          <div className="flex justify-center space-x-8 animate-fade-in">
            <button
              onClick={() => setCurrentPage('home')}
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-full hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">HOME</span>
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <User className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">ABOUT</span>
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:from-green-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">CONTACT</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderHomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-600">MATHIE & CLAUDINE</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-yellow-600 hover:text-yellow-800 px-3 py-2 font-medium border-b-2 border-yellow-600"
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="text-gray-600 hover:text-yellow-600 px-3 py-2 font-medium"
              >
                ABOUT
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-gray-600 hover:text-yellow-600 px-3 py-2 font-medium"
              >
                CONTACT
              </button>
              <button
                onClick={() => setCurrentPage('landing')}
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Back to Landing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the finest champagne crafted with tradition, passion, and uncompromising quality. 
            Every bottle tells a story of French heritage and exceptional taste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Premium Quality</h3>
            <p className="text-gray-600 text-center">
              Crafted from the finest grapes in the Champagne region of France, ensuring exceptional taste and quality.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Traditional Methods</h3>
            <p className="text-gray-600 text-center">
              Using time-honored techniques passed down through generations to create the perfect champagne experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Luxury Experience</h3>
            <p className="text-gray-600 text-center">
              Every sip delivers an unforgettable experience, perfect for celebrations and special moments.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Discover Our Collection</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From our signature Brut Impérial to limited edition vintages, explore a world of exceptional champagne 
            that embodies French elegance and sophistication.
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">MATHIE & CLAUDINE</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 font-medium"
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="text-purple-600 hover:text-purple-800 px-3 py-2 font-medium border-b-2 border-purple-600"
              >
                ABOUT
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 font-medium"
              >
                CONTACT
              </button>
              <button
                onClick={() => setCurrentPage('landing')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Back to Landing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of excellence spanning generations, rooted in the heart of France's champagne region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Founded in Excellence</h3>
            <p className="text-lg text-gray-600 mb-6">
              Established in 1895 in the prestigious Champagne region of France, Mathie & Claudine has been 
              crafting exceptional champagne for over a century. Our founders, Mathie and Claudine Guilherand, 
              began with a simple vision: to create champagne that embodies the true spirit of French elegance.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Through generations of dedication and refinement, we have perfected our craft while staying true 
              to traditional methods. Each bottle represents not just a beverage, but a piece of French heritage 
              and artisanal excellence.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">1895</span>
              </div>
              <span className="text-lg text-gray-600">Year of Foundation</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">M&C</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Brut Impérial</h4>
              <p className="text-gray-600">
                Our signature champagne, representing the pinnacle of our craftsmanship and tradition.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Tradition</h4>
              <p className="text-gray-600">
                Honoring centuries-old methods while embracing innovation for the future.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Quality</h4>
              <p className="text-gray-600">
                Uncompromising standards in every aspect of our champagne production.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Excellence</h4>
              <p className="text-gray-600">
                Striving for perfection in every bottle we create and every experience we deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">MATHIE & CLAUDINE</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-gray-600 hover:text-green-600 px-3 py-2 font-medium"
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="text-gray-600 hover:text-green-600 px-3 py-2 font-medium"
              >
                ABOUT
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-green-600 hover:text-green-800 px-3 py-2 font-medium border-b-2 border-green-600"
              >
                CONTACT
              </button>
              <button
                onClick={() => setCurrentPage('landing')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Back to Landing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, orders, or to learn more about our champagne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">contact@mathie-claudine.fr</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+33 3 26 XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">Guilherand, Champagne Region<br />France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Vineyard</h3>
              <p className="text-gray-600 mb-4">
                Experience our champagne-making process firsthand with guided tours of our historic vineyard 
                and cellars. Book your visit to taste our exclusive collection.
              </p>
              <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {currentPage === 'landing' && renderLandingPage()}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'about' && renderAboutPage()}
      {currentPage === 'contact' && renderContactPage()}
    </div>
  );
}

export default App;