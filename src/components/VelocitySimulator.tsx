import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Play, Pause, RotateCcw, Timer, Ruler, Gauge } from 'lucide-react';
import { cn } from '../lib/utils';

export default function VelocitySimulator() {
  const [velocity, setVelocity] = useState(20); // m/s
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const requestRef = useRef<number>(null);
  const previousTimeRef = useRef<number>(null);

  const animate = (t: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (t - previousTimeRef.current) / 1000; // seconds
      setTime(prev => {
        const newTime = prev + deltaTime;
        setDistance(newTime * velocity);
        return newTime;
      });
    }
    previousTimeRef.current = t;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = undefined;
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, velocity]);

  const reset = () => {
    setIsPlaying(false);
    setTime(0);
    setDistance(0);
    previousTimeRef.current = undefined;
  };

  // Scale: 1m = 5px
  const carPosition = (distance * 5) % 400;

  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
            <Gauge size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">匀速直线运动演示</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
            <Timer size={16} className="text-slate-400" />
            <span className="text-sm font-mono font-bold text-blue-600">{time.toFixed(2)}s</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
            <Ruler size={16} className="text-slate-400" />
            <span className="text-sm font-mono font-bold text-emerald-600">{distance.toFixed(2)}m</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Animation Area */}
        <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-center">
          {/* Road */}
          <div className="h-1 bg-slate-700 w-full relative">
            {/* Markers */}
            {[0, 100, 200, 300, 400].map(m => (
              <div key={m} className="absolute top-0 h-4 border-l border-slate-600" style={{ left: `${m}px` }}>
                <span className="absolute top-4 left-0 -translate-x-1/2 text-[10px] text-slate-500 font-mono">{(m/5).toFixed(0)}m</span>
              </div>
            ))}
          </div>

          {/* Car */}
          <motion.div 
            className="absolute bottom-24 flex flex-col items-center"
            style={{ left: `${50 + carPosition}px` }}
          >
            <div className="bg-blue-500 w-12 h-6 rounded-t-lg relative">
              <div className="absolute -bottom-2 left-1 w-3 h-3 bg-slate-800 rounded-full" />
              <div className="absolute -bottom-2 right-1 w-3 h-3 bg-slate-800 rounded-full" />
            </div>
            <div className="mt-4 text-[10px] font-bold text-blue-400 uppercase tracking-widest">v = {velocity}m/s</div>
          </motion.div>

          <div className="absolute bottom-4 right-8 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
            比例尺: 1m = 5px
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700">设定速度 (v)</label>
              <span className="text-lg font-bold text-blue-600">{velocity} m/s</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="50" 
              step="5"
              value={velocity}
              onChange={(e) => setVelocity(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>5m/s</span>
              <span>25m/s</span>
              <span>50m/s</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all shadow-lg",
                isPlaying ? "bg-amber-100 text-amber-700 shadow-amber-100" : "bg-blue-600 text-white shadow-blue-100"
              )}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isPlaying ? "暂停" : "开始运动"}
            </button>
            <button 
              onClick={reset}
              className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-all"
            >
              <RotateCcw size={20} />
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong>物理公式：</strong> s = v × t。当速度恒定时，路程与时间成正比。你可以观察到速度越快，相同时间内通过的路程越长。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
