import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Rizki',
      role: 'Frontend Developer di Tokopedia',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'LabKoding memberikan pembelajaran yang sangat praktis. Setelah 6 bulan belajar di sini, saya berhasil mendapat pekerjaan sebagai Frontend Developer.',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Full Stack Developer di Gojek',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Mentor-mentornya sangat berpengalaman dan sabar dalam mengajar. Project-projectnya juga sangat real dan berguna untuk portfolio.',
      rating: 5
    },
    {
      name: 'Budi Santoso',
      role: 'Backend Developer di Bukalapak',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Kurikulum yang up-to-date dan sesuai dengan kebutuhan industri. Sangat rekomendasi untuk yang ingin berkarir di bidang IT.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka Tentang LabKoding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman alumni yang telah berhasil berkarir di perusahaan teknologi ternama
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 left-4" />
              
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;