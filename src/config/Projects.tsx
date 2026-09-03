import Bun from '@/components/technologies/Bun';
import ChatGPT from '@/components/technologies/ChatGPT';
import Clerk from '@/components/technologies/Clerk';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Css from "@/components/technologies/CSS";
import Js from "@/components/technologies/JavaScript";
import NodeJs from "@/components/technologies/NodeJs";
import Vite from "@/components/technologies/Vite";
import FastAPI from '@/components/technologies/FastAPI';
import GSAP from '@/components/technologies/GSAP';
import HuggingFace from '@/components/technologies/HuggingFace';
import LangChain from '@/components/technologies/LangChain';
import Mapbox from '@/components/technologies/Mapbox';
import MongoDB from '@/components/technologies/MongoDB';
import NextAuth from '@/components/technologies/NextAuth';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import WebRTC from '@/components/technologies/WebRTC';
import { Project } from '@/types/project';
import Html from '@/components/technologies/Html';

export const projects: Project[] = [
  {
  title: "Wave AI",
  description: "Ask questions, chat with AI, and explore the possibilities of AI-powered conversation using Hugging Face inference with Qwen/Qwen3-4B-Thinking-2507:nscale model. A modern web application built with React, Vite, and Tailwind CSS.",
  image: "/project/wave.png",
  link: "https://github.com/ayushdhiman7/wave-ai",
  technologies: [
    { name: "React", icon: <ReactIcon key="react" /> },
  { name: "Hugging Face", icon: <HuggingFace key="huggingface" /> },
    { name: "Vite", icon: <Vite key="vite" /> },
    { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
    { name: "Node.js", icon: <NodeJs key="nodejs" /> },
    { name: "Express", icon: <ExpressJs key="express" /> },
    { name: "JavaScript", icon: <Js key="js" /> },
    { name: "HTML5", icon: <Html  /> },
    { name: "CSS3", icon: <Css key="css" /> },
  ],
  github: "https://github.com/ayushdhiman7/wave-ai",
  live: "https://wave-ai-two.vercel.app",
  details: true,
  projectDetailsPageSlug: "/projects/wave-ai",
  isWorking: true,
  detailContent: {
    overview: "Wave AI is a modern AI-powered chat application built with a sandbox architecture featuring a React frontend, Vite build tool, and Tailwind CSS styling. It provides a seamless conversational AI experience with context-aware responses and a clean, intuitive interface, using Hugging Face inference with the Qwen/Qwen3-4B-Thinking-2507:nscale model.",
    highlightsLabel: "Wave AI features:",
    highlights: [
      "AI Chat: Powerful AI conversations with context awareness",
      "Responsive Design: Works beautifully on mobile and desktop",
      "Modern UI: Clean, intuitive interface built with Tailwind CSS",
      "Route-based Navigation: Home, Pricing, Roadmap, and Chat pages",
      "AI-powered Features: Smart chatbot with personalized recommendations",
    ],
    outcome: "A production-style AI chat application offering real-time conversational AI with low-latency streaming and a clean, intuitive interface.",
    }
  },
  {
    title: 'Crime Alert',
    description:
      'A full-stack application built with Next.js 14 for anonymous crime reporting with AI-powered features and location mapping',
    image: '/project/crimereport_ai.png',
    link: 'https://crime-alert-app.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'NextAuth', icon: <NextAuth key="nextauth" /> },
      { name: 'Mapbox', icon: <Mapbox key="mapbox" /> },
    ],
    github: 'https://github.com/ayushdhiman7/crime-alert',
    live: 'https://crime-alert-app.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/crime-alert',
    isWorking: true,
    detailContent: {
      overview:
        'Built Crime Alert so people can report incidents without exposing their identity. The goal was a secure reporting flow that still feels fast, map-aware, and useful for follow-up — not just a form that dumps text into a database.',
      highlightsLabel: 'Crime Alert gives reporters:',
      highlights: [
        'Fully anonymous incident reporting with protected identity by default',
        'Interactive Mapbox location pinning so reports are tied to real places',
        'Authenticated admin-side workflows with NextAuth and encrypted credentials',
        'Prisma + Neon backed storage for reliable report persistence and queries',
      ],
      outcome:
        'The result is a production-ready reporting platform where anonymity, location context, and AI assistance work together instead of fighting each other.',
    },
  },
  {
    title: 'Klimate',
    description:
      'A comprehensive weather application that automatically detects your location and provides real-time weather data with 24-hour forecasts',
    image: '/project/klimate.png',
    link: 'https://github.com/ayushdhiman7/Climate',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/ayushdhiman7/Climate',
    live: 'https://github.com/ayushdhiman7/Climate',
    details: true,
    projectDetailsPageSlug: '/projects/klimate',
    isWorking: true,
    detailContent: {
      overview:
        'Klimate is a weather app focused on clarity: detect where you are, show what’s happening now, and make the next 24 hours easy to scan — without burying people under charts they don’t need.',
      highlightsLabel: 'Klimate focuses on:',
      highlights: [
        'Automatic location detection so weather loads with almost no setup',
        'Real-time current conditions with a clean, readable dashboard',
        '24-hour forecast views for planning the rest of the day',
        'City search when you want weather for somewhere else',
        'A responsive UI that stays usable on phone and desktop',
      ],
      outcome:
        'A lightweight weather experience that prioritizes speed and readability over noisy widgets.',
    },
  },
  {
    title: 'Apple Website',
    description:
      "A visually stunning recreation of Apple's iPhone 15 Pro landing page with seamless animations and interactive 3D models",
    image: '/project/apple_website.jpg',
    link: 'https://iphone-ivory-zeta.vercel.app/',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="react" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'GSAP', icon: <GSAP key="gsap" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/ayushdhiman7/iphone-gsap',
    live: 'https://iphone-ivory-zeta.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/apple-website',
    isWorking: true,
    detailContent: {
      overview:
        'This is a high-fidelity recreation of Apple’s iPhone 15 Pro marketing site — built to practice cinematic web motion, 3D product presentation, and the kind of polish that makes a landing page feel expensive.',
      highlightsLabel: 'The experience includes:',
      highlights: [
        'Smooth GSAP-powered scroll and section animations',
        'Interactive Three.js iPhone models with color and size variations',
        'A custom video carousel crafted with GSAP timelines',
        'Pixel-conscious layout and typography inspired by Apple’s marketing site',
        'Fully responsive behavior across desktop and mobile viewports',
      ],
      outcome:
        'A front-end showcase focused on animation craft, 3D interaction, and product storytelling on the web.',
    },
  },
  {
    title: 'RedBus Clone',
    description:
      'A full-stack bus ticket booking platform inspired by RedBus — search routes, select seats, pay with Razorpay, and manage bookings with JWT authentication.',
    image: '/project/redbus.png',
    link: 'https://github.com/ayushdhiman7/red-bus',
    technologies: [
      { name: 'React 18', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vite', icon: <Vite key="vite" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'JWT Auth', icon: <NodeJs key="jwt" /> },
      { name: 'Razorpay', icon: <NodeJs key="razorpay" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'https://github.com/ayushdhiman7/red-bus',
    live: 'https://red-bus-silk.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/redbus-clone',
    isWorking: true,
    detailContent: {
      overview:
        'RedBus Clone is a production-style online bus ticket booking platform built with a modern full-stack architecture. It features a React 18 + TypeScript frontend powered by Vite and Tailwind CSS, and a Node.js + Express backend with MongoDB for data persistence. The platform implements the complete user journey: search buses by source, destination, and date; view bus details with interactive seat layouts; authenticate via JWT; checkout with Razorpay payment integration; and manage booking history.',
      highlightsLabel: 'RedBus Clone features & capabilities:',
      highlights: [
        'Smart bus search with source, destination, and journey date filtering',
        'Interactive seat selection layout with real-time seat availability',
        'JWT-based authentication with protected routes and user profiles',
        'Razorpay payment integration with server-side order creation and verification',
        'Booking history management under My Bookings with full detail views',
        'Fully responsive UI optimized for desktop and mobile',
        'Docker Compose orchestration for full-stack local development',
        'RESTful API design with Express controllers, Mongoose models, and middleware',
      ],
      outcome:
        'A complete full-stack bus booking application demonstrating real-world patterns: authentication, payments, state management, and responsive UI — all containerized for easy deployment.',
    },
  },
];
