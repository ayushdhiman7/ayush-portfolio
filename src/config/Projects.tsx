import Bun from '@/components/technologies/Bun';
import ChatGPT from '@/components/technologies/ChatGPT';
import Clerk from '@/components/technologies/Clerk';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
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

export const projects: Project[] = [
  {
    title: 'Nirdesh AI',
    description:
      'An instrumented multilingual voice agent featuring real-time speech-to-text, LangGraph tool calling, streaming TTS, and local VAD.',
    image: '/project/nirdesh-ai.png',
    link: 'https://github.com/Saurabhsing21/NirdeshAI',
    technologies: [
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'LangGraph', icon: <LangChain key="langgraph" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/Saurabhsing21/NirdeshAI',
    live: 'https://github.com/Saurabhsing21/NirdeshAI',
    details: true,
    projectDetailsPageSlug: '/projects/nirdesh-ai',
    isWorking: true,
    detailContent: {
      overview:
        'Nirdesh AI is an instrumented multilingual voice agent built as a sandwich architecture: streaming speech-to-text feeds a LangGraph-backed text agent, which pipelines into streaming text-to-speech returning 24 kHz PCM audio over an authenticated WebSocket.',
      highlightsLabel: 'Nirdesh AI features & system architecture:',
      highlights: [
        'Multilingual voice loop using Saaras v3 STT, sarvam-105b LLM, and Bulbul v3 TTS',
        'Silero ONNX VAD running 32 ms local frames, speech pre-roll, 500 ms endpointing, and silence gating',
        'Barge-in handling that cancels generation, tears down active TTS sockets, flushes audio, and truncates history',
        'LangChain tools for server-side Exa web search and browser-proxied local todo management',
        'Paise-denominated wallet, mock recharge, per-second voice-session billing, warnings, and auto-cutoff',
        'Full-stack instrumentation with TurnTimer metrics, structured logs, and client latency waterfalls',
      ],
      outcome:
        'A production-style voice platform offering real-time multilingual voice interaction with low-latency streaming and full-stack session instrumentation.',
    },
  },
  {
    title: 'Lumina',
    description:
      'An AI search agent powered by a custom tool-calling agent loop that intelligently decides when to search the web, streaming cited answers with live sources.',
    image: '/project/lumina.png',
    link: 'https://perpelexity.vercel.app/',
    technologies: [
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Express 5', icon: <ExpressJs key="express" /> },
      { name: 'React 19', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/Saurabhsing21/Lumina',
    live: 'https://perpelexity.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/lumina',
    isWorking: true,
    detailContent: {
      overview:
        'Lumina is a production-style AI search assistant built around a tool-first agent loop. Rather than forcing a web search on every query, the LLM autonomously decides when external information is needed, executing Tavily searches iteratively and returning streamed, cited answers with real-time sources.',
      highlightsLabel: 'Lumina highlights & features:',
      highlights: [
        'Tool-first agent loop — the LLM decides when to search, eliminating forced pre-search on every query',
        'Live web search via Tavily with basic and advanced depth modes (search vs research)',
        'Streamed, cited answers with NDJSON streaming and inline [1][2] citations tied to real web sources',
        'Conversation memory retaining the last 20 messages with source markers stripped before LLM ingestion',
        'Multi-model routing swapping between GPT-4.1, Claude Sonnet 4, and Gemini 2.5 Flash via OpenRouter',
        'Auth & credit limits powered by Supabase JWT auth and server-side credit gate enforcement',
        'Follow-up suggestions with the model proposing relevant next questions at the end of each answer',
      ],
      outcome:
        'A high-performance AI search engine combining tool calling, streamed citations, multi-model routing, and credit-gated session management.',
    },
  },
  {
    title: 'Drug Discovery',
    description:
      'Enterprise-grade multi-agent AI system for drug-target prioritisation across DepMap, Open Targets, Pharos, and Europe PMC.',
    image: '/project/drug-discovery.png',
    link: 'https://github.com/Saurabhsing21/Drug-discovery-agent/',
    technologies: [
      { name: 'LangGraph', icon: <LangChain key="langgraph" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'https://github.com/Saurabhsing21/Drug-discovery-agent/',
    live: 'https://github.com/Saurabhsing21/Drug-discovery-agent/',
    details: true,
    projectDetailsPageSlug: '/projects/drug-discovery',
    isWorking: true,
    detailContent: {
      overview:
        'Drug Discovery Agent automates end-to-end drug-target prioritisation with a LangGraph orchestrator, MCP-connected biomedical databases, deterministic scoring with conflict detection, and optional human-in-the-loop plan and review gates.',
      highlightsLabel: 'Drug Discovery highlights & features:',
      highlights: [
        'LangGraph pipeline spanning planning, parallel collection, normalisation, scoring, evidence graphs, and synthesis',
        'MCP data layer querying DepMap, Pharos, Open Targets, and Europe PMC in parallel',
        'Deterministic multi-source druggability scoring with conflict severity tiers',
        'Five-layer memory system for reproducible, auditable research runs',
        'Optional plan approval and review gates before dossier acceptance',
        'FastAPI + Next.js research workbench with live SSE progress and follow-up Q&A',
      ],
      outcome:
        'A production-style biomedical research agent that turns multi-database target assessment into a reproducible, traceable dossier in minutes.',
    },
  },
  {
    title: 'ExploitDB RAG',
    description:
      'AI-powered exploit intelligence system with RAG over 46,000+ ExploitDB entries, intent-aware retrieval, and hallucination validation.',
    image: '/project/exploitdb.png',
    link: 'https://github.com/Saurabhsing21/Exploitdb_Rag/',
    technologies: [
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'HuggingFace', icon: <HuggingFace key="huggingface" /> },
      { name: 'OpenAI', icon: <ChatGPT key="openai" /> },
    ],
    github: 'https://github.com/Saurabhsing21/Exploitdb_Rag/',
    live: 'https://github.com/Saurabhsing21/Exploitdb_Rag/',
    details: true,
    projectDetailsPageSlug: '/projects/exploitdb-rag',
    isWorking: true,
    detailContent: {
      overview:
        'ExploitDB RAG is a Retrieval-Augmented Generation assistant for searching and analyzing exploits from ExploitDB. It combines intent-aware retrieval, hybrid semantic search, conversational context, and response validation over 46,000+ indexed entries.',
      highlightsLabel: 'ExploitDB RAG features & capabilities:',
      highlights: [
        'Search 46K+ ExploitDB entries by CVE, software name, vulnerability type, or natural language',
        'Intent classification that routes queries to exact CVE match or semantic similarity search',
        'Hybrid retrieval with ChromaDB and HuggingFace embeddings',
        'GPT-4o-mini answers grounded in retrieved exploit documents',
        'Multi-turn conversation memory for follow-up security queries',
        'Hallucination validation against source documents and exploit code customization',
      ],
      outcome:
        'A practical pentesting assistant that turns ExploitDB into grounded, conversational exploit intelligence.',
    },
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
    github: 'https://github.com/Saurabhsing21/crime-report-ai',
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
        'AI-assisted report drafting and categorization powered by Google Gemini',
        'Interactive Mapbox location pinning so reports are tied to real places',
        'Authenticated admin-side workflows with NextAuth and encrypted credentials',
        'Prisma + Neon backed storage for reliable report persistence and queries',
      ],
      outcome:
        'The result is a production-ready reporting platform where anonymity, location context, and AI assistance work together instead of fighting each other.',
    },
  },
  {
    title: 'Yoom',
    description:
      'A modern Zoom clone crafted with Next.js and TypeScript, delivering a robust video conferencing experience',
    image: '/project/yoom.png',
    link: 'https://yoom.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'WebRTC', icon: <WebRTC key="webrtc" /> },
      { name: 'Clerk', icon: <Clerk key="clerk" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/Saurabhsing21/yoom',
    live: 'https://yoom.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/yoom',
    isWorking: true,
    detailContent: {
      overview:
        'Yoom is a Zoom-style video conferencing app I built to learn real-time collaboration end to end — auth, meeting rooms, media controls, and scheduling — without sacrificing a clean product feel.',
      highlightsLabel: 'Yoom lets users:',
      highlights: [
        'Sign in securely with Clerk (social + email/password)',
        'Start instant meetings or schedule upcoming ones with shareable links',
        'Control the call with mute, video toggle, screen share, reactions, and layout options',
        'Manage participants (pin, mute, remove) and end or leave meetings cleanly',
        'Revisit past meetings and recordings from a dedicated history view',
        'Use a personal room with a permanent meeting link for quick 1:1s',
      ],
      outcome:
        'It ships as a responsive, real-time meeting product — the kind of system where auth, state, and media controls all have to stay in sync.',
    },
  },
  {
    title: 'Klimate',
    description:
      'A comprehensive weather application that automatically detects your location and provides real-time weather data with 24-hour forecasts',
    image: '/project/klimate.png',
    link: 'https://github.com/Saurabhsing21/Klimate',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/Saurabhsing21/Klimate',
    live: 'https://github.com/Saurabhsing21/Klimate',
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
    title: 'Wealth',
    description:
      'A comprehensive financial management solution that harnesses AI to simplify tracking income and expenses across multiple accounts',
    image: '/project/wealth.png',
    link: 'https://welth-roan.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/Saurabhsing21/Wealth-',
    live: 'https://welth-roan.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/wealth',
    isWorking: true,
    detailContent: {
      overview:
        'Wealth is an AI-assisted finance platform I built to make multi-account money tracking less tedious. Instead of only logging numbers, it helps categorize activity and surface what’s actually happening in your finances.',
      highlightsLabel: 'Wealth helps you:',
      highlights: [
        'Track income and expenses across multiple accounts in one place',
        'Use AI (Gemini) to assist with categorization and financial insights',
        'Secure access with Clerk-based authentication and onboarding',
        'Stay protected with rate limiting / bot protection via ArcJet',
        'Run background jobs and email workflows for recurring finance ops',
        'Manage data through a modern Next.js + Prisma backed architecture',
      ],
      outcome:
        'A practical personal-finance product where AI reduces busywork and the dashboard stays trustworthy enough for real money decisions.',
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
    github: 'https://github.com/Saurabhsing21/Iphonee',
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
];
