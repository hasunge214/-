<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>
开发了一个名为“初中物理学习助手”的交互式学习平台。
主要功能：
核心知识库：涵盖了初中物理的四大核心章节——力学、电学、光学和热学。每个章节都包含核心概念定义、重要公式推导以及经典例题解析。
AI 物理助教：集成 Google Gemini AI，您可以随时在侧边栏向助教提问。它会以专业物理老师的口吻，用生动形象的语言为您解答难题，并清晰地列出计算步骤。
现代化交互界面：
学习概览页：提供全局导航和学习小贴士。
响应式设计：适配不同屏幕尺寸，侧边栏可自由收缩。
动态动效：使用 Framer Motion 实现流畅的面板切换和内容加载动画。
清晰的公式展示：所有物理公式均以醒目的卡片形式展示，方便记忆和查阅。
技术栈：
前端框架：React 19 + TypeScript
样式处理：Tailwind CSS 4 + Typography 插件
人工智能：Google Gemini AI (@google/genai)
人工智能 ：Google Gemini AI ( @google/genai )

动画库：Motion (Framer Motion)
动画库 ：Motion (Framer Motion)

图标库：Lucide React
您现在可以点击左侧菜单开始探索不同的物理章节，或者点击右上角的“AI 助教”开始提问。祝您学习愉快！


# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8de1a7c2-ddc1-477c-a98b-056a0988d171

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
