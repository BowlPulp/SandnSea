import React from 'react';

const BrandMarquee = () => {
  // Replace these with your actual property developer logos
  const brandImages = [
    'developer1.png',
    'developer2.png', 
    'developer3.png',
    'developer4.png',
    'developer5.png'
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-12 border-y border-slate-200 ">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#d2ab67] mb-2 tracking-tight ">
          A Trusted Partner for Leading Developers
        </h3>
        <p className="text-slate-600 text-sm font-medium">Building tomorrow's landmarks together</p>
      </div>
      
      <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] hover:animate-[scroll_20s_linear_infinite_paused]">
        {/* First set of images */}
        {brandImages.map((brand, index) => (
          <div key={index} className="mx-8 flex-shrink-0 inline-block">
            <img
              src={brand}
              alt={`Developer ${index + 1}`}
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 hover:filter-none"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="64" viewBox="0 0 140 64"><rect width="140" height="64" fill="%23f1f5f9" rx="8" stroke="%23cbd5e1"/><text x="70" y="38" text-anchor="middle" font-family="Arial" font-size="12" fill="%23475569">Developer ${index + 1}</text></svg>`;
              }}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {brandImages.map((brand, index) => (
          <div key={`duplicate-${index}`} className="mx-8 flex-shrink-0 inline-block">
            <img
              src={brand}
              alt={`Developer ${index + 1}`}
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 hover:filter-none"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="64" viewBox="0 0 140 64"><rect width="140" height="64" fill="%23f1f5f9" rx="8" stroke="%23cbd5e1"/><text x="70" y="38" text-anchor="middle" font-family="Arial" font-size="12" fill="%23475569">Developer ${index + 1}</text></svg>`;
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default BrandMarquee;