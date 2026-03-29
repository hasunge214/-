import React, { useState } from 'react';
import { Question } from '../data/physicsData';
import { CheckCircle2, XCircle, BarChart3, RotateCcw, ChevronRight, Award, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PhysicsQuizProps {
  quizzes: Question[];
  onComplete: (score: number) => void;
}

export default function PhysicsQuiz({ quizzes, onComplete }: PhysicsQuizProps) {
  const [currentStep, setCurrentStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(quizzes.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = quizzes[currentIndex];
  const isFinished = currentIndex === quizzes.length - 1 && userAnswers[currentIndex] !== null;

  const handleAnswer = (optionIndex: number) => {
    if (userAnswers[currentIndex] !== null) return; // Prevent re-answering
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = optionIndex;
    setUserAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
    } else {
      setCurrentStep('result');
      const score = userAnswers.filter((ans, i) => ans === quizzes[i].answer).length;
      onComplete(score);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers(new Array(quizzes.length).fill(null));
    setShowExplanation(false);
    setCurrentStep('start');
  };

  const levelLabels = {
    low: "基础巩固 (Low)",
    mid: "中考难度 (Mid)",
    high: "重点挑战 (High)"
  };

  const levelColors = {
    low: "bg-emerald-100 text-emerald-700",
    mid: "bg-blue-100 text-blue-700",
    high: "bg-purple-100 text-purple-700"
  };

  if (currentStep === 'start') {
    return (
      <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm text-center space-y-6">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
          <BrainCircuit size={40} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900">章节知识测评</h3>
        <p className="text-slate-500 max-w-md mx-auto">
          本测评包含 9 道题目，分为基础、中等、挑战三个等级，每级 3 题。完成测评以检验你的学习成果。
        </p>
        <button 
          onClick={() => setCurrentStep('quiz')}
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          开始测评
        </button>
      </div>
    );
  }

  if (currentStep === 'result') {
    const correctCount = userAnswers.filter((ans, i) => ans === quizzes[i].answer).length;
    const stats = {
      low: userAnswers.filter((ans, i) => quizzes[i].level === 'low' && ans === quizzes[i].answer).length,
      mid: userAnswers.filter((ans, i) => quizzes[i].level === 'mid' && ans === quizzes[i].answer).length,
      high: userAnswers.filter((ans, i) => quizzes[i].level === 'high' && ans === quizzes[i].answer).length,
    };

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-slate-900 text-white p-12 rounded-[40px] text-center relative overflow-hidden">
          <div className="relative z-10">
            <Award size={64} className="mx-auto mb-6 text-amber-400" />
            <h3 className="text-4xl font-black mb-2">测评完成！</h3>
            <p className="text-slate-400 mb-8">你一共答对了 {correctCount} / {quizzes.length} 道题</p>
            
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">基础级</p>
                <p className="text-2xl font-bold">{stats.low}/3</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">中考级</p>
                <p className="text-2xl font-bold">{stats.mid}/3</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">挑战级</p>
                <p className="text-2xl font-bold">{stats.high}/3</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 size={20} className="text-blue-600" />
            详细解析与回顾
          </h4>
          {quizzes.map((q, i) => (
            <div key={q.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold uppercase h-fit", levelColors[q.level])}>
                    {q.level}
                  </span>
                  <p className="font-bold text-slate-800">{i + 1}. {q.text}</p>
                </div>
                {userAnswers[i] === q.answer ? (
                  <CheckCircle2 className="text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="text-red-500 shrink-0" />
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8">
                {q.options.map((opt, optIdx) => (
                  <div 
                    key={optIdx} 
                    className={cn(
                      "p-3 rounded-xl text-sm border",
                      optIdx === q.answer ? "bg-emerald-50 border-emerald-200 text-emerald-700 font-medium" : 
                      optIdx === userAnswers[i] ? "bg-red-50 border-red-200 text-red-700" :
                      "bg-slate-50 border-slate-100 text-slate-500"
                    )}
                  >
                    {String.fromCharCode(65 + optIdx)}. {opt}
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl text-sm text-blue-800 border border-blue-100 ml-8">
                <p className="font-bold mb-1">解析：</p>
                {q.explanation}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <button 
            onClick={resetQuiz}
            className="flex items-center gap-2 bg-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
          >
            <RotateCcw size={18} />
            重新测评
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>题目 {currentIndex + 1} / {quizzes.length}</span>
          <span>{levelLabels[currentQuestion.level]}</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / quizzes.length) * 100}%` }}
            className="h-full bg-blue-600"
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 leading-relaxed">
          {currentQuestion.text}
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={userAnswers[currentIndex] !== null}
              className={cn(
                "group flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left",
                userAnswers[currentIndex] === null 
                  ? "border-slate-100 hover:border-blue-200 hover:bg-blue-50/50" 
                  : i === currentQuestion.answer 
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700" 
                    : i === userAnswers[currentIndex]
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-slate-100 opacity-50"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 transition-colors",
                userAnswers[currentIndex] === null 
                  ? "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600" 
                  : i === currentQuestion.answer 
                    ? "bg-emerald-500 text-white" 
                    : i === userAnswers[currentIndex]
                      ? "bg-red-500 text-white"
                      : "bg-slate-100 text-slate-400"
              )}>
                {String.fromCharCode(65 + i)}
              </div>
              <span className="font-medium">{option}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 pt-6 border-t border-slate-100"
            >
              <div className={cn(
                "p-6 rounded-3xl flex gap-4",
                userAnswers[currentIndex] === currentQuestion.answer ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
              )}>
                <div className="shrink-0">
                  {userAnswers[currentIndex] === currentQuestion.answer ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                </div>
                <div>
                  <p className="font-bold mb-1">
                    {userAnswers[currentIndex] === currentQuestion.answer ? "回答正确！" : "回答错误"}
                  </p>
                  <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
                </div>
              </div>
              <button 
                onClick={nextQuestion}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
              >
                {currentIndex === quizzes.length - 1 ? "查看结果" : "下一题"}
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
