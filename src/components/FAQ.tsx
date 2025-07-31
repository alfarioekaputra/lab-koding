import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Apakah cocok untuk pemula yang belum pernah coding?',
      answer: 'Sangat cocok! Kami memiliki kursus khusus untuk pemula yang dimulai dari dasar-dasar programming. Materi disusun secara bertahap sehingga mudah dipahami bahkan untuk yang tidak memiliki background IT.'
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu kursus?',
      answer: 'Waktu penyelesaian bervariasi tergantung kursus yang dipilih, biasanya antara 6-12 minggu. Anda bisa belajar dengan kecepatan sendiri karena materi dapat diakses kapan saja.'
    },
    {
      question: 'Apakah mendapat sertifikat setelah menyelesaikan kursus?',
      answer: 'Ya, setiap siswa yang berhasil menyelesaikan kursus akan mendapat sertifikat digital yang dapat digunakan untuk melamar pekerjaan atau melanjutkan studi.'
    },
    {
      question: 'Bagaimana sistem pembelajaran di LabKoding?',
      answer: 'Pembelajaran dilakukan secara online melalui platform kami dengan kombinasi video, materi bacaan, quiz, dan project praktik. Ada juga sesi mentoring langsung dengan instruktur.'
    },
    {
      question: 'Apakah ada jaminan kerja setelah lulus?',
      answer: 'Kami memiliki program job placement yang membantu alumni mendapatkan pekerjaan, termasuk persiapan interview dan koneksi dengan perusahaan partner. Namun, kesuksesan juga tergantung pada usaha dan kemampuan masing-masing individu.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Pertanyaan yang sering diajukan tentang LabKoding
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;