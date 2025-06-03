'use client';
import { ChevronDown, Send } from 'lucide-react';

export default function FeedbackSection() {
  const fullText = `We guarantee to provide you with an immersive gaming experience that’s second to none, with all of the advantages that are offered by gambling with crypto.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gradient-to-b from-[#04022a] to-[#1f276c] text-white p-6 md:p-10 rounded-xl shadow-lg flex lg:flex-row flex-col gap-8">
      {/* Left Content */}
      <div className='lg:w-[50%]'>
        <h2 className="text-2xl font-bold mb-4">
          Bety.com Casino: Your Premier Crypto Gambling Platform with Online Casino & Sports Betting
        </h2>
         <p className="text-white/70 mb-4">{fullText}</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Bety Casino: Crypto Gambling Platform with Online Casino and Sports Betting
        </h3>
        <p className="text-white/70">
          With thousands of online casinos to choose from, at Bety, we wanted to offer something unique. That’s why we’ve
          put together the greatest selection of games and the best in sports betting, and then combined these with all
          that crypto gambling has to offer.
        </p>
      </div>

      {/* Right Form */}
      <div className="bg-[#1f276c] rounded-xl p-6 shadow-inner flex-1">
        <h4 className="text-lg font-bold mb-2">Let's Improve Your Gaming Experience</h4>
        <p className="text-white/60 text-sm mb-4">
          Have you found a bug or have an idea for the platform improvement? Please, leave your message here!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Select a feedback subject</label>
            <div className="relative">
              <select
                className="w-full bg-[#212553] text-white p-2 rounded-md appearance-none pr-10"
                defaultValue="Registration Issues"
              >
                <option>Registration Issues</option>
                <option>Game Feedback</option>
                <option>Bug Report</option>
                <option>Suggestions</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 text-white pointer-events-none" size={18} />
            </div>
          </div>
          <div>
            <textarea
              className="w-full bg-[#212553]  text-white p-3 rounded-md min-h-[120px]"
              placeholder="Your feedback"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-green-400 hover:opacity-90 text-black font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition"
          >
            <Send size={16} />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
