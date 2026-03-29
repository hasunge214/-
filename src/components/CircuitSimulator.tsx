import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Zap, Sliders, Info, Calculator } from 'lucide-react';

export default function CircuitSimulator() {
  const [voltage, setVoltage] = useState(9); // Volts
  const [resistance, setResistance] = useState(10); // Ohms
  
  // Ohm's Law: I = V / R
  const current = useMemo(() => (voltage / resistance).toFixed(2), [voltage, resistance]);
  const currentNum = parseFloat(current);

  // Animation speed based on current
  // Higher current = faster movement
  const animationDuration = useMemo(() => {
    if (currentNum === 0) return 0;
    return Math.max(0.5, 5 / currentNum);
  }, [currentNum]);

  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
            <Zap size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">欧姆定律互动实验</h3>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
          <Calculator size={16} className="text-slate-400" />
          <span className="text-sm font-mono font-bold text-blue-600">I = U / R = {voltage}V / {resistance}Ω = {current}A</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SVG Circuit Visualization */}
        <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center">
          <svg width="400" height="240" viewBox="0 0 400 240" className="drop-shadow-2xl">
            {/* Circuit Path */}
            <rect x="50" y="40" width="300" height="160" fill="none" stroke="#334155" strokeWidth="4" rx="10" />
            
            {/* Battery */}
            <g transform="translate(180, 20)">
              <rect x="0" y="10" width="40" height="20" fill="#ef4444" rx="2" />
              <rect x="35" y="15" width="10" height="10" fill="#ef4444" rx="1" />
              <text x="20" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">U</text>
            </g>

            {/* Resistor */}
            <g transform="translate(180, 185)">
              <rect x="0" y="0" width="40" height="15" fill="#3b82f6" rx="2" />
              <path d="M0 7.5 L5 0 L15 15 L25 0 L35 15 L40 7.5" fill="none" stroke="white" strokeWidth="1.5" />
              <text x="20" y="-5" textAnchor="middle" fill="#94a3b8" fontSize="10">R</text>
            </g>

            {/* Ammeter */}
            <g transform="translate(330, 100)">
              <circle cx="20" cy="20" r="18" fill="white" stroke="#334155" strokeWidth="2" />
              <text x="20" y="25" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold">A</text>
              <text x="20" y="55" textAnchor="middle" fill="#94a3b8" fontSize="10">电流表</text>
            </g>

            {/* Electron Animation */}
            <circle r="4" fill="#fbbf24">
              <animateMotion 
                path="M 200 40 L 350 40 L 350 200 L 50 200 L 50 40 L 200 40" 
                dur={`${animationDuration}s`} 
                repeatCount="indefinite" 
              />
            </circle>
            <circle r="4" fill="#fbbf24">
              <animateMotion 
                path="M 200 40 L 350 40 L 350 200 L 50 200 L 50 40 L 200 40" 
                dur={`${animationDuration}s`} 
                begin={`${animationDuration * 0.25}s`}
                repeatCount="indefinite" 
              />
            </circle>
            <circle r="4" fill="#fbbf24">
              <animateMotion 
                path="M 200 40 L 350 40 L 350 200 L 50 200 L 50 40 L 200 40" 
                dur={`${animationDuration}s`} 
                begin={`${animationDuration * 0.5}s`}
                repeatCount="indefinite" 
              />
            </circle>
            <circle r="4" fill="#fbbf24">
              <animateMotion 
                path="M 200 40 L 350 40 L 350 200 L 50 200 L 50 40 L 200 40" 
                dur={`${animationDuration}s`} 
                begin={`${animationDuration * 0.75}s`}
                repeatCount="indefinite" 
              />
            </circle>
          </svg>

          {/* Labels */}
          <div className="absolute bottom-4 left-8 text-slate-400 text-xs flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span>黄色小球代表电子流向</span>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Sliders size={16} className="text-blue-500" />
                电源电压 (U)
              </label>
              <span className="text-lg font-bold text-blue-600">{voltage} V</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="24" 
              step="1"
              value={voltage}
              onChange={(e) => setVoltage(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>1V</span>
              <span>12V</span>
              <span>24V</span>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Sliders size={16} className="text-purple-500" />
                电阻阻值 (R)
              </label>
              <span className="text-lg font-bold text-purple-600">{resistance} Ω</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="50" 
              step="1"
              value={resistance}
              onChange={(e) => setResistance(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>1Ω</span>
              <span>25Ω</span>
              <span>50Ω</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <div className="flex gap-3">
              <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>观察提示：</strong> 增加电压或减小电阻，都会使电路中的电流增大。你可以看到电流表读数变大，且电子运动速度加快。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation Text */}
      <div className="prose prose-slate max-w-none">
        <h4 className="text-lg font-bold text-slate-900">欧姆定律 (Ohm's Law) 详解</h4>
        <p className="text-slate-600">
          欧姆定律描述了电路中电流、电压和电阻之间的基本关系。公式表示为：
          <code className="mx-2 px-2 py-1 bg-slate-100 rounded text-blue-600 font-bold">I = U / R</code>
        </p>
        <ul className="text-sm text-slate-600 space-y-2">
          <li><strong>电流 (I)：</strong> 单位是安培 (A)，表示单位时间内通过导体的电荷量。</li>
          <li><strong>电压 (U)：</strong> 单位是伏特 (V)，是推动电荷流动的“压力”。</li>
          <li><strong>电阻 (R)：</strong> 单位是欧姆 (Ω)，是导体对电流流动的阻碍作用。</li>
        </ul>
      </div>
    </div>
  );
}
