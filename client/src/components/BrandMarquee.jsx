import React from 'react';

const BrandMarquee = () => {
  const brandImages = [
    '/partners/Adanirealty.png',
    '/partners/DLF.png',
    '/partners/Dosti.png',
    '/partners/Kalpataru.png',
    '/partners/Lodha.png',
    '/partners/Oberoi.png',
    '/partners/PrestigeCity.png',
    '/partners/Raymondrealty.png',
    '/partners/Shahpoorji.png',
    '/partners/ShobhaRealty.png',
    '/partners/Suntech.png',
    '/partners/Piramal.png',
    '/partners/KRaheja.png',
    '/partners/Hiranandani.png',
    '/partners/Runwal.png',
    '/partners/Mahindra.png',
  ];

  // Duplicate the array to allow seamless looping
  const marqueeImages = [...brandImages, ...brandImages];

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-12 border-y border-slate-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#d2ab67] mb-2 tracking-tight">
          A Trusted Partner for Leading Developers
        </h3>
        <p className="text-slate-600 text-sm font-medium">
          Building tomorrow's landmarks together
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-marquee">
          {marqueeImages.map((brand, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img
                src={brand}
                alt="Developer Partner"
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='64' viewBox='0 0 140 64'><rect width='140' height='64' fill='%23f1f5f9' rx='8' stroke='%23cbd5e1'/><text x='70' y='38' text-anchor='middle' font-family='Arial' font-size='12' fill='%23475569'>Partner Logo</text></svg>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandMarquee;
