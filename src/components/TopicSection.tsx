import React, { useState } from 'react';
import { PhysicsTopic } from '../data/physicsData';
import { BookOpen, Calculator, Lightbulb, ChevronRight, BrainCircuit, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CircuitSimulator from './CircuitSimulator';
import OpticsSimulator from './OpticsSimulator';
import VelocitySimulator from './VelocitySimulator';
import PhysicsQuiz from './PhysicsQuiz';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TopicSectionProps {
  topic: PhysicsTopic;
  onQuizComplete: (score: number) => void;
}

export default function TopicSection({ topic, onQuizComplete }: TopicSectionProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{topic.title}</h2>
          <p className="text-slate-500 text-lg">{topic.description}</p>
        </div>
        
        <div className="flex bg-slate-100 p-1.5 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab('content')}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all",
              activeTab === 'content' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            <BookOpen size={18} />
            知识讲解
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all",
              activeTab === 'quiz' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            <BrainCircuit size={18} />
            章节测评
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'content' ? (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Interactive Demos */}
            {topic.id === 'mechanics-motion' && <VelocitySimulator />}
            {topic.id === 'ohm-law' && <CircuitSimulator />}
            {topic.id === 'lens' && <OpticsSimulator />}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Concepts */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">核心概念</h3>
                </div>
                <div className="space-y-4">
                  {topic.content.concepts.map((concept, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                      <h4 className="font-bold text-slate-800 mb-1">{concept.name}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{concept.definition}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulas */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">重要公式</h3>
                </div>
                <div className="space-y-4">
                  {topic.content.formulas.map((formula, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800">{formula.name}</h4>
                        <span className="bg-white px-3 py-1 rounded-lg text-sm font-mono text-purple-600 border border-purple-100">
                          {formula.formula}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{formula.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">经典例题</h3>
                </div>
                <div className="space-y-6">
                  {topic.content.examples.map((example, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">问</div>
                        <p className="text-slate-800 font-medium">{example.question}</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">答</div>
                        <div className="bg-emerald-50 p-4 rounded-2xl text-sm text-slate-700 border border-emerald-100 flex-1">
                          {example.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <PhysicsQuiz quizzes={topic.quizzes} onComplete={onQuizComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
