'use client';

export function FloatingButtons() {
  const whatsappNumber = "971509210785";
  const phoneNumber = "+971509210785";

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
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </button>
      <button
        onClick={handleCall}
        className="w-14 h-14 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-2xl animate-bounce active:scale-95 transition-transform hover:scale-105"
        aria-label="Call Now"
      >
        <span className="material-symbols-outlined text-3xl">call</span>
      </button>
    </div>
  );
}