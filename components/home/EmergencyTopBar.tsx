export function EmergencyTopBar() {
  return (
    <div className="bg-primary text-background-dark py-2 px-4 md:px-10 flex flex-wrap justify-between items-center gap-4 sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="material-symbols-outlined text-xl">call</span>
          <a className="font-bold text-sm md:text-base" href="tel:+971509210785">
            +971 50 921 0785
          </a>
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap border-l border-background-dark/20 pl-6">
          <span className="material-symbols-outlined text-xl">phone_iphone</span>
          <a className="font-bold text-sm md:text-base" href="tel:+971527879800">
            +971 52 787 9800
          </a>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <span className="material-symbols-outlined text-xl">mail</span>
        <a className="font-medium text-sm" href="mailto:rukhsarrecovery@gmail.com">
          rukhsarrecovery@gmail.com
        </a>
      </div>
    </div>
  );
}