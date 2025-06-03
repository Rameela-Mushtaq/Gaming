'use client';

import { CreditCard, Apple, BadgeDollarSign } from 'lucide-react';

export default function BuyCryptoBanner() {
  return (
    <div className="bg-gradient-to-r from-[#945238] to-[#180d51] rounded-xl py-8 px-6 flex lg:flex-row flex-col gap-4 justify-between items-center text-white shadow-md">
      <div className="flex flex-col space-y-1">
        <span className="font-bold text-sm sm:text-base">BUY CRYPTO QUICKLY AND EASILY</span>
      </div>
      <div className="flex items-center space-x-4 mt-1 text-white/80 text-sm">
          <div className="flex items-center space-x-1">
            <BadgeDollarSign width={24} height={24} />
            <span className="hidden sm:inline">G Pay</span>
          </div>
          <div className="flex items-center space-x-1">
            <Apple size={18} />
            <span className="hidden sm:inline">Pay</span>
          </div>
          <div className="flex items-center space-x-1">
            <CreditCard size={18} className="text-orange-500" />
            <span className="hidden sm:inline">Mastercard</span>
          </div>
          <div className="flex items-center space-x-1">
            <CreditCard size={18} className="text-blue-500" />
            <span className="hidden sm:inline">Visa</span>
          </div>
        </div>
      <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-xs sm:text-sm px-4 py-2 mt-2 rounded-lg ml-4">
        Buy Crypto
      </button>
    </div>
  );
}
