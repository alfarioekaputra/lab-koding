import React from 'react';
import { BookOpen, Users, Award, Laptop, Clock, HeadphonesIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Kurikulum Terupdate',
      description: 'Materi pembelajaran yang selalu mengikuti perkembangan teknologi terbaru dan kebutuhan industri.'
    },
    {
      icon: Users,
      title: 'Mentor Berpengalaman',
      description: 'Dibimbing langsung oleh praktisi IT yang berpengalaman di berbagai perusahaan teknologi.'
    },
    {
      icon: Award,
      title: 'Sertifikat Resmi',
      description: 'Dapatkan sertifikat yang diakui industri setelah menyelesaikan setiap kursus.'
    },
    {
      icon: Laptop,
      title: 'Project Real-World',
      description: 'Kerjakan project nyata yang bisa langsung digunakan untuk portfolio profesional.'
    },
    {
      icon: Clock,
      title: 'Belajar Fleksibel',
      description: 'Akses materi kapan saja dan dimana saja sesuai dengan jadwal dan kecepatan Anda.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support 24/7',
      description: 'Tim support yang siap membantu Anda mengatasi kesulitan dalam proses pembelajaran.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih LabKoding?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan pengalaman belajar coding yang komprehensif dengan fasilitas terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;