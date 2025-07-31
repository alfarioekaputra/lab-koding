import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">LabKoding</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Beranda
            </a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kursus
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tentang
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontak
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              Masuk
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Daftar
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600">
                Beranda
              </a>
              <a href="#courses" className="block text-gray-700 hover:text-blue-600">
                Kursus
              </a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">
                Tentang
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">
                Kontak
              </a>
              <div className="pt-4 border-t space-y-2">
                <button className="block w-full text-left text-gray-700 hover:text-blue-600">
                  Masuk
                </button>
                <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;