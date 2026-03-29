import React, { useState, useMemo } from 'react';
import { Sun, Sliders, Info, Eye } from 'lucide-react';

export default function OpticsSimulator() {
  const [objectDistance, setObjectDistance] = useState(100); // cm
  const [focalLength, setFocalLength] = useState(40); // cm
  
  // Lens Formula: 1/f = 1/u + 1/v => 1/v = 1/f - 1/u => v = (f * u) / (u - f)
  // u is object distance, v is image distance, f is focal length
  const imageDistance = useMemo(() => {
    if (objectDistance === focalLength) return Infinity;
    return (focalLength * objectDistance) / (objectDistance - focalLength);
  }, [objectDistance, focalLength]);

  const magnification = useMemo(() => {
    if (objectDistance === 0) return 0;
    return -(imageDistance / objectDistance);
  }, [imageDistance, objectDistance]);

  const imageType = useMemo(() => {
    if (objectDistance > focalLength) return "实像 (Real Image)";
    if (objectDistance < focalLength) return "虚像 (Virtual Image)";
    return "不成像 (No Image)";
  }, [objectDistance, focalLength]);

  const imageOrientation = useMemo(() => {
    if (magnification < 0) return "倒立 (Inverted)";
    if (magnification > 0) return "正立 (Upright)";
    return "-";
  }, [magnification]);

  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
            <Sun size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">凸透镜成像互动实验</h3>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
          <Eye size={16} className="text-slate-400" />
          <span className="text-sm font-mono font-bold text-purple-600">f = {focalLength}cm | u = {objectDistance}cm</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SVG Optics Visualization */}
        <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 relative overflow-hidden min-h-[300px] flex items-center justify-center border border-slate-100">
          <svg width="500" height="200" viewBox="0 0 500 200" className="drop-shadow-sm">
            {/* Optical Axis */}
            <line x1="0" y1="100" x2="500" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Lens */}
            <path d="M 250 20 Q 270 100 250 180 Q 230 100 250 20" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
            <text x="250" y="195" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">凸透镜</text>

            {/* Focal Points */}
            <circle cx={250 - focalLength} cy="100" r="3" fill="#ef4444" />
            <text x={250 - focalLength} y="115" textAnchor="middle" fill="#ef4444" fontSize="10">F</text>
            <circle cx={250 + focalLength} cy="100" r="3" fill="#ef4444" />
            <text x={250 + focalLength} y="115" textAnchor="middle" fill="#ef4444" fontSize="10">F</text>

            {/* Object */}
            <g transform={`translate(${250 - objectDistance}, 100)`}>
              <line x1="0" y1="0" x2="0" y2="-40" stroke="#1e293b" strokeWidth="3" />
              <path d="M -5 -35 L 0 -45 L 5 -35" fill="#1e293b" />
              <text x="0" y="15" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">物体</text>
            </g>

            {/* Image */}
            {imageDistance !== Infinity && Math.abs(imageDistance) < 500 && (
              <g transform={`translate(${250 + imageDistance}, 100)`}>
                <line x1="0" y1="0" x2="0" y2={-40 * magnification} stroke={objectDistance > focalLength ? "#10b981" : "#3b82f6"} strokeWidth="2" strokeDasharray={objectDistance < focalLength ? "4 4" : "0"} />
                <path 
                  d={magnification < 0 ? "M -4 35 L 0 45 L 4 35" : "M -4 -35 L 0 -45 L 4 -35"} 
                  fill={objectDistance > focalLength ? "#10b981" : "#3b82f6"} 
                />
                <text x="0" y={magnification < 0 ? 55 : 15} textAnchor="middle" fill={objectDistance > focalLength ? "#10b981" : "#3b82f6"} fontSize="10" fontWeight="bold">
                  {objectDistance < focalLength ? "虚像" : "实像"}
                </text>
              </g>
            )}

            {/* Light Rays (Simplified) */}
            {/* Parallel Ray */}
            <line x1={250 - objectDistance} y1="60" x2="250" y2="60" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
            {imageDistance !== Infinity && (
               <line x1="250" y1="60" x2={250 + imageDistance} y2={100 + 40 * magnification} stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
            )}
            
            {/* Center Ray */}
            {imageDistance !== Infinity && (
               <line x1={250 - objectDistance} y1="60" x2={250 + imageDistance} y2={100 + 40 * magnification} stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
            )}
          </svg>

          <div className="absolute top-4 left-4 space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-[10px] text-slate-500">实像：光线实际汇聚</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-[10px] text-slate-500">虚像：光线反向延长线汇聚</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Sliders size={16} className="text-blue-500" />
                物距 (u)
              </label>
              <span className="text-lg font-bold text-blue-600">{objectDistance} cm</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="200" 
              step="5"
              value={objectDistance}
              onChange={(e) => setObjectDistance(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>10cm</span>
              <span>100cm</span>
              <span>200cm</span>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Sliders size={16} className="text-purple-500" />
                焦距 (f)
              </label>
              <span className="text-lg font-bold text-purple-600">{focalLength} cm</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="80" 
              step="5"
              value={focalLength}
              onChange={(e) => setFocalLength(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
              <span>20cm</span>
              <span>50cm</span>
              <span>80cm</span>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl text-white space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">成像性质</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-slate-500 mb-1">类型</p>
                <p className="text-sm font-bold text-blue-400">{imageType}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 mb-1">姿态</p>
                <p className="text-sm font-bold text-purple-400">{imageOrientation}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] text-slate-500 mb-1">放大倍数</p>
                <p className="text-sm font-bold text-amber-400">{Math.abs(magnification).toFixed(2)} 倍</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation Text */}
      <div className="prose prose-slate max-w-none">
        <h4 className="text-lg font-bold text-slate-900">凸透镜成像规律总结</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="font-bold text-slate-800 mb-2">u &gt; 2f</p>
            <p className="text-slate-600">倒立、缩小的实像。应用：照相机。</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="font-bold text-slate-800 mb-2">f &lt; u &lt; 2f</p>
            <p className="text-slate-600">倒立、放大的实像。应用：投影仪。</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <p className="font-bold text-slate-800 mb-2">u &lt; f</p>
            <p className="text-slate-600">正立、放大的虚像。应用：放大镜。</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <p className="font-bold text-blue-800 mb-2">提示</p>
            <p className="text-blue-700">实像可以用光屏承接，虚像只能用眼睛观察。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
