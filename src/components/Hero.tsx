import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Belajar Coding
                <span className="text-blue-600 block">Dengan Mudah</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Platform pembelajaran programming terlengkap dengan mentor berpengalaman, 
                kurikulum terupdate, dan project real-world yang siap pakai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Mulai Belajar</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Tonton Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1000+ Siswa Aktif</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>50+ Kursus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-green-400 font-mono text-sm">
                <div className="mb-2">
                  <span className="text-blue-400">function</span>{' '}
                  <span className="text-yellow-400">belajarCoding</span>() {'{'}
                </div>
                <div className="ml-4 mb-2">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">skill</span> = {'"'}
                  <span className="text-green-300">JavaScript</span>{'"'};
                </div>
                <div className="ml-4 mb-2">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-orange-400">`Selamat datang di ${'{'}skill{'}'}`</span>;
                </div>
                <div className="mb-2">{'}'}</div>
                <div className="text-gray-400">// Mulai perjalanan coding Anda!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;