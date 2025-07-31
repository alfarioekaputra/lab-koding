import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'JavaScript Fundamentals',
      description: 'Pelajari dasar-dasar JavaScript dari nol hingga mahir membuat aplikasi web interaktif.',
      duration: '8 minggu',
      students: 1250,
      rating: 4.9,
      price: 'Rp 299.000',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'React.js Mastery',
      description: 'Kuasai React.js dan ekosistemnya untuk membangun aplikasi web modern dan scalable.',
      duration: '10 minggu',
      students: 890,
      rating: 4.8,
      price: 'Rp 399.000',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      title: 'Node.js Backend',
      description: 'Bangun API dan aplikasi backend yang robust menggunakan Node.js dan Express.',
      duration: '12 minggu',
      students: 654,
      rating: 4.7,
      price: 'Rp 449.000',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kursus Populer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih kursus yang sesuai dengan minat dan tujuan karir Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {course.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} siswa</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            Lihat Semua Kursus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;