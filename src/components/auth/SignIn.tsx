"use client";

import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { SiBitcoin, SiEthereum, SiDogecoin, SiLitecoin, SiTether, SiMetabase } from "react-icons/si";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignIn({ isOpen, onClose }: SignInProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const cryptoIcons = [
     <SiBitcoin key="btc" size={28} color="#f2a900" />,
     <SiEthereum key="eth" size={28} color="#3c3c3d" />,
     <SiDogecoin key="doge" size={28} color="#c2a633" />,
     <SiLitecoin key="ltc" size={28} color="#b8b8b8" />,
     <SiTether key="usdt" size={28} color="#50af95" />,
   ];
 
   const socialIcons = [
     <FcGoogle key="google"  />,
     <FaFacebookF key="facebook"  color="#4267B2" />,
     <FaTelegramPlane key="telegram"  color="#0088cc" />,
     <FcGoogle key="metamask"  color="#f6851b" />,
   ];

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="flex w-full lg:px-0 lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-[350px] bg-[#0a082d] shadow-lg items-center text-white rounded-xl overflow-hidden">
        {/* Left Panel */}
        <div className="bg-gradient-to-r from-[#04022a] to-[#1f276c] p-6 md:w-[40%] md:flex hidden flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Pack</h2>
          <h3 className="text-lg font-semibold text-center text-[#ffcc00] mb-2">
            380% up to 1800 USDT
          </h3>
          <p className="text-center text-sm text-gray-300 mb-4">
            Crypto friendly
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {cryptoIcons.map((icon) => (
              <span key={icon.key} className="text-2xl">
                {icon}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mb-6">
            And many other crypto currencies
          </p>

          <div className="space-y-4">
            {[
              {
                percent: "100%",
                usdt: "300",
                color: "bg-gradient-to-r from-green-400 to-teal-500",
              },
              {
                percent: "80%",
                usdt: "400",
                color: "bg-gradient-to-r from-blue-500 to-blue-700",
              },
              {
                percent: "100%",
                usdt: "500",
                color: "bg-gradient-to-r from-purple-500 to-purple-700",
              },
              {
                percent: "100%",
                usdt: "600",
                color: "bg-gradient-to-r from-pink-500 to-pink-700",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-3 rounded-xl ${item.color} bg-opacity-80`}
              >
                <div className="text-2xl">🎁</div>
                <div>
                  <p className="text-white font-semibold">{item.percent}</p>
                  <p className="text-sm text-white/90">
                    up to {item.usdt} USDT
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-[#0a082d] p-8 flex-1 relative flex flex-col justify-between gap-2">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <X size={20} />
          </button>

          <div className="flex flex-col">
            <h2 className="md:text-2xl text-xl font-bold mb-6">Sign in</h2>

            <input
              type="email"
              placeholder="Email"
              className="mb-4 bg-[#354c64] text-white placeholder-gray-400 border-none w-full px-3 py-2 rounded"
            />

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-[#354c64] text-white placeholder-gray-400 border-none pr-10 w-full px-3 py-2 rounded"
              />
              <button
                type="button"
                className="absolute top-2.5 right-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-teal-500" />
                Remember me
              </label>
              <span className="cursor-pointer hover:text-white">Forgot Password</span>
            </div>

            <button className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded mb-4">
              Sign In
            </button>

            <p className="text-center text-sm text-gray-300">
              New to bety.com? <span className="text-teal-400 cursor-pointer">Create account</span>
            </p>
          </div>

          <div className="flex flex-col md:text-base text-sm">
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            <div className="flex justify-center gap-4">
              {socialIcons.map((icon) => (
                <button
                  key={icon.key}
                  className="bg-[#1c2a3a] hover:bg-[#24394f] p-3 rounded-full text-white"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
