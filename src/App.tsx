import React, { useState } from 'react';
import { physicsTopics, PhysicsTopic } from './data/physicsData';
import TopicSection from './components/TopicSection';
import PhysicsAssistant from './components/PhysicsAssistant';
import { 
  Activity, 
  Zap, 
  Sun, 
  Thermometer, 
  Volume2,
  Target,
  Scale,
  Waves,
  ArrowDown,
  MessageSquare, 
  LayoutDashboard,
  GraduationCap,
  ChevronRight,
  Menu,
  X,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={20} />,
  Zap: <Zap size={20} />,
  Sun: <Sun size={20} />,
  Thermometer: <Thermometer size={20} />,
  Volume2: <Volume2 size={20} />,
  Target: <Target size={20} />,
  Scale: <Scale size={20} />,
  Waves: <Waves size={20} />,
  ArrowDown: <ArrowDown size={20} />,
};

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Track quiz scores: { topicId: score }
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  const activeTopic = physicsTopics.find(t => t.id === activeTopicId);

  const handleQuizComplete = (score: number) => {
    if (activeTopicId) {
      setQuizScores(prev => ({ ...prev, [activeTopicId]: Math.max(prev[activeTopicId] || 0, score) }));
    }
  };

  const totalPossibleScore = physicsTopics.length * 9;
  const currentTotalScore = Object.values(quizScores).reduce((a, b) => a + b, 0);
  const progressPercentage = Math.round((currentTotalScore / totalPossibleScore) * 100);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col shrink-0",
        isSidebarOpen ? "w-72" : "w-20"
      )}>
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200">
            <GraduationCap size={24} />
          </div>
          {isSidebarOpen && (
            <span className="font-bold text-xl tracking-tight text-slate-900">物理助手</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => setActiveTopicId(null)}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all group",
              activeTopicId === null 
                ? "bg-blue-50 text-blue-700 font-bold" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <LayoutDashboard size={20} />
            {isSidebarOpen && <span>学习概览</span>}
          </button>

          <div className="pt-4 pb-2">
            {isSidebarOpen && <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-2">核心章节</p>}
            <div className="h-px bg-slate-100 mx-3 mb-4" />
          </div>

          {physicsTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-all group relative",
                activeTopicId === topic.id 
                  ? "bg-blue-50 text-blue-700 font-bold" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <div className={cn(
                "transition-transform group-hover:scale-110",
                activeTopicId === topic.id ? "text-blue-600" : "text-slate-400"
              )}>
                {iconMap[topic.icon]}
              </div>
              {isSidebarOpen && (
                <div className="flex-1 flex items-center justify-between">
                  <span>{topic.title}</span>
                  {quizScores[topic.id] !== undefined && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold">
                      {quizScores[topic.id]}/9
                    </span>
                  )}
                </div>
              )}
              {activeTopicId === topic.id && isSidebarOpen && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-l-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar Progress */}
        {isSidebarOpen && (
          <div className="p-6 border-t border-slate-100 space-y-3">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>总进度</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }} 
              />
            </div>
          </div>
        )}

        {/* Footer Toggle */}
        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>物理学习</span>
            <ChevronRight size={14} />
            <span className="text-slate-900">{activeTopic ? activeTopic.title : '学习概览'}</span>
          </div>
          
          <button
            onClick={() => setIsAssistantOpen(!isAssistantOpen)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm",
              isAssistantOpen 
                ? "bg-blue-600 text-white shadow-blue-200" 
                : "bg-white text-blue-600 border border-blue-100 hover:bg-blue-50"
            )}
          >
            <MessageSquare size={18} />
            <span>AI 助教</span>
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {activeTopic ? (
              <TopicSection topic={activeTopic} onQuizComplete={handleQuizComplete} />
            ) : (
              <div className="space-y-12">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl">
                  <div className="relative z-10 max-w-2xl">
                    <h1 className="text-5xl font-black mb-6 leading-tight">
                      探索物理的奥秘，<br />
                      开启智慧之门。
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      欢迎来到初中物理学习助手。在这里，你可以系统地学习力学、电学、光学和热学知识，
                      并随时向我们的 AI 助教寻求帮助。
                    </p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setActiveTopicId('mechanics-motion')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20"
                      >
                        开始学习
                      </button>
                      <button 
                        onClick={() => setIsAssistantOpen(true)}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold transition-all"
                      >
                        咨询 AI
                      </button>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -mr-32 -mb-32" />
                </div>

                {/* Statistics Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">已掌握知识点</p>
                    <p className="text-3xl font-black text-slate-900">{Object.keys(quizScores).length} / {physicsTopics.length}</p>
                    <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: `${(Object.keys(quizScores).length / physicsTopics.length) * 100}%` }} />
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">测评总得分</p>
                    <p className="text-3xl font-black text-slate-900">{currentTotalScore} <span className="text-sm text-slate-400 font-normal">/ {totalPossibleScore}</span></p>
                    <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${progressPercentage}%` }} />
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">学习等级</p>
                    <p className="text-3xl font-black text-blue-600">
                      {progressPercentage > 80 ? '物理学霸' : progressPercentage > 50 ? '进阶学者' : '初级探索者'}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">继续努力，解锁更高成就！</p>
                  </div>
                </div>

                {/* Topic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {physicsTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setActiveTopicId(topic.id)}
                      className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all text-left"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                          topic.id === 'mechanics-motion' ? "bg-blue-50 text-blue-600" :
                          topic.id === 'ohm-law' ? "bg-amber-50 text-amber-600" :
                          topic.id === 'lens' ? "bg-purple-50 text-purple-600" :
                          "bg-emerald-50 text-emerald-600"
                        )}>
                          {iconMap[topic.icon]}
                        </div>
                        {quizScores[topic.id] !== undefined && (
                          <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                            已完成测评: {quizScores[topic.id]}/9
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed mb-6">
                        {topic.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-bold text-sm gap-1">
                        立即探索 <ChevronRight size={16} />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Quick Tips Section */}
                <div className="bg-blue-600/5 rounded-[40px] p-10 border border-blue-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Lightbulb className="text-amber-500" />
                    学习小贴士
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 font-bold">1</div>
                      <h4 className="font-bold text-slate-800">理解重于记忆</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">物理不是死记硬背，尝试理解现象背后的原理，比记住公式更重要。</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 font-bold">2</div>
                      <h4 className="font-bold text-slate-800">联系生活实际</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">观察身边的物理现象，比如骑自行车的惯性、烧水时的能量转换。</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 font-bold">3</div>
                      <h4 className="font-bold text-slate-800">多做实验练习</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">动手做一些简单的小实验，或者通过模拟程序来加深对知识点的印象。</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Assistant Sidebar/Overlay */}
        <AnimatePresence>
          {isAssistantOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAssistantOpen(false)}
                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
              />
              {/* Panel */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute top-4 right-4 bottom-4 w-full max-w-md z-50 pointer-events-auto"
              >
                <div className="h-full flex flex-col">
                  <div className="flex-1">
                    <PhysicsAssistant />
                  </div>
                  <button 
                    onClick={() => setIsAssistantOpen(false)}
                    className="absolute -left-12 top-4 p-2 bg-white rounded-full shadow-lg text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
