'use client';

import { Coins, Gamepad2 } from 'lucide-react';
import clsx from 'clsx';

const bets = [
  {
    game: 'LIMBO',
    user: '52l3oPu62nXY',
    time: '06/03/25, 06:13:11 PM',
    betAmount: 0.01,
    multiplier: 0.0,
    payout: 0.0,
  },
  {
    game: 'LIMBO',
    user: '52l3oPu62nXY',
    time: '06/03/25, 06:13:09 PM',
    betAmount: 0.01,
    multiplier: 1.0,
    payout: 0.01,
  },
  {
    game: 'DICE',
    user: 'Bitantix',
    time: '06/03/25, 06:13:04 PM',
    betAmount: 0.08,
    multiplier: 0.0,
    payout: 0.0,
  },
  {
    game: 'TOWER',
    user: '3684559412x7',
    time: '06/03/25, 06:13:00 PM',
    betAmount: 0.08,
    multiplier: 0.75,
    payout: 0.06,
  },
  {
    game: 'LIMBO',
    user: '52l3oPu62nXY',
    time: '06/03/25, 06:13:11 PM',
    betAmount: 0.01,
    multiplier: 0.0,
    payout: 0.0,
  },
  {
    game: 'LIMBO',
    user: '52l3oPu62nXY',
    time: '06/03/25, 06:13:09 PM',
    betAmount: 0.01,
    multiplier: 1.0,
    payout: 0.01,
  },
];

export default function LatestBetsTable() {
  return (
    <div className="rounded-xl p-4 text-white shadow-md overflow-x-auto flex flex-col gap-6">
      <div className="lg:text-2xl md:text-xl text-lg font-semibold">
          Latest Bets
        </div>

      <table className="min-w-[700px] w-full text-sm">
        <thead className="text-white/70  border-white/10">
          <tr>
            <th className="text-left py-2 px-6">Game</th>
            <th className="text-left py-2 px-6">User</th>
            <th className="text-left py-2 px-6">Time</th>
            <th className="text-left py-2 px-6">Bet Amount</th>
            <th className="text-left py-2 px-6">Multiplier</th>
            <th className="text-left py-2 px-6">Payout</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((bet, idx) => (
            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition">
              <td className="py-4 px-6 flex items-center space-x-2">
                <Gamepad2 size={16} />
                <span>{bet.game}</span>
              </td>
              <td className="py-4 px-6">{bet.user}</td>
              <td className="py-4 px-6">{bet.time}</td>
              <td className="py-4 px-6 flex items-center">
                ${bet.betAmount.toFixed(2)}
                <Coins size={14} className="ml-1 text-yellow-400" />
              </td>
              <td className="py-4 px-6">{bet.multiplier.toFixed(2)}x</td>
              <td className="py-4 px-6 font-semibold" style={{ color: bet.payout > 0 ? '#00FF88' : '#ccc' }}>
                ${bet.payout.toFixed(2)}{' '}
                {bet.payout > 0 && <Coins size={14} className="inline text-yellow-400 ml-1" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
