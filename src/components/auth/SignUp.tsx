"use client";

import { useState } from "react";
import { Eye, EyeOff, ChevronDown, X } from "lucide-react";

import { SiBitcoin, SiEthereum, SiDogecoin, SiLitecoin, SiTether, SiMetabase } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUp({ isOpen, onClose }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");
  const [showReferral, setShowReferral] = useState(false);

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
    <div onClick={onClose} className="fixed w-full inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="flex lg:px-0 bg-[#0a082d] shadow-lg items-center text-white rounded-xl overflow-hidden">
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
        <div className="bg-[#0a082d] md:p-8 p-4 flex-1 relative flex flex-col justify-between gap-2">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
          <div className="flex flex-col">
            <h2 className="md:text-2xl text-xl font-bold mb-6">Sign up</h2>

            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-700 mb-4 w-full md:text-base text-sm">
              <button
                onClick={() => setActiveTab("email")}
                className={`pb-2 mr-6 w-[50%] ${
                  activeTab === "email"
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-gray-400"
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setActiveTab("phone")}
                className={`pb-2 flex-1 ${
                  activeTab === "phone"
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-gray-400"
                }`}
              >
                Phone Number
              </button>
            </div>

            {/* Conditional Form Fields */}
            {activeTab === "email" ? (
              <input
                type="email"
                placeholder="Email"
                className="mb-4 bg-[#354c64] text-white md:text-base text-sm placeholder-gray-400 border-none w-full px-3 py-2 rounded"
              />
            ) : (
              <div className="flex gap-2 mb-4 md:text-base text-sm">
                <select className="bg-[#354c64] text-white border-none rounded px-3 py-2">
                  <option value="+92">+92</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#354c64] md:text-base text-sm text-white placeholder-gray-400 border-none w-full px-3 py-2 rounded"
                />
              </div>
            )}

            {/* Common Password Field */}
            <div className="relative mb-4 md:text-base text-sm">
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

            {/* Referral and Agreement */}
            <div className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer md:text-sm text-xs text-gray-300"
                onClick={() => setShowReferral(!showReferral)}
              >
                <span>Enter Referral/Promo Code</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    showReferral ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showReferral && (
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="mt-2 bg-[#354c64] md:text-base text-sm text-white placeholder-gray-400 border-none w-full px-3 py-2 rounded"
                />
              )}
            </div>

            <div className="flex items-start gap-2 mb-4">
              <input type="checkbox" className="mt-1" />
              <label className="md:text-sm text-xs text-gray-300">
                I agree to the{" "}
                <span className="text-teal-400 cursor-pointer">
                  User Agreement
                </span>{" "}
                & confirm I am at least 18 years old
              </label>
            </div>

            <button className="w-full bg-gradient-to-r md:text-base text-sm from-teal-500 to-green-500 text-white font-semibold py-2 rounded">
              Sign Up
            </button>

            <p className="md:text-sm text-xs text-center mt-4 text-gray-300">
              Already have an account?{" "}
              <span className="text-teal-400 cursor-pointer">Sign in</span>
            </p>
          </div>

          <div className="flex flex-col md:text-base text-sm">
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            <div className="flex justify-center gap-4 md:text-base text-sm">
              {socialIcons.map((icon) => (
                <button
                  key={icon.key}
                  className="bg-[#1c2a3a] hover:bg-[#24394f] p-3  md:text-[24px] text-[18px] rounded-full text-white"
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
