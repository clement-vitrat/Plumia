'use client';

import { Quote, UsersRound } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type Review = {
  name: string;
  role: string;
  company: string;
  content: string;
};

type ReviewsS = {
  t: {
    testimonials: {
      title: string;
      description: string;
      items: Review[];
    };
  };
};

export default function Reviews({ t }: ReviewsS) {
  const testimonials = t.testimonials.items;

  return (
    <section id="testimonials" className="py-10 to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6 text-sm font-medium ring-1 ring-blue-200">
            <UsersRound className="w-4 h-4" />
            <span className="text-sm font-medium">{t.testimonials.title}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.testimonials.title}{' '}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          key={t.testimonials.title} // 👈 Ajout de la clé dynamique ici
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-300/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                  “{testimonial.content}”
                </p>

                {/* User Info */}
                <div className="text-sm text-gray-800 font-semibold">{testimonial.name}</div>
                <div className="text-xs text-gray-500">
                  {testimonial.role} — {testimonial.company}
                </div>

                {/* Underline on hover */}
                <div className="mt-2 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-[#a8c8ff] to-white transition-transform duration-300 rounded-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
