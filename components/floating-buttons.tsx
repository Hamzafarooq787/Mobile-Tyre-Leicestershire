'use client';

import { ChatBubbleLeftIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function FloatingButtons() {
  const phoneNumber = "07599298404"; // matches all other pages
  const whatsappNumber = "07599298404"; // UK format: remove leading 0, add 44

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <ChatBubbleLeftIcon className="w-7 h-7" />
      </button>

      {/* Call button */}
      <button
        onClick={handleCall}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce active:scale-95 transition-transform hover:scale-105"
        aria-label="Call Now"
      >
        <PhoneIcon className="w-7 h-7" />
      </button>
    </div>
  );
}