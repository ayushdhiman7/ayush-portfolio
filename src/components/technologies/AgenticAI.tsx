export default function AgenticAI() {
  return (
    <svg viewBox="0 0 128 128" fill="none">
      <defs>
        <linearGradient
          id="agenticGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="24" fill="#1E1B4B" />

      {/* Central brain/network node */}
      <circle
        cx="64"
        cy="64"
        r="18"
        fill="url(#agenticGradient)"
        opacity="0.8"
      />

      {/* Surrounding agent nodes */}
      <circle cx="64" cy="28" r="8" fill="#8B5CF6" />
      <circle cx="96" cy="48" r="8" fill="#EC4899" />
      <circle cx="96" cy="80" r="8" fill="#F59E0B" />
      <circle cx="64" cy="100" r="8" fill="#10B981" />
      <circle cx="32" cy="80" r="8" fill="#3B82F6" />
      <circle cx="32" cy="48" r="8" fill="#8B5CF6" />

      {/* Connecting lines */}
      <line
        x1="64"
        y1="28"
        x2="64"
        y2="46"
        stroke="url(#agenticGradient)"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="96"
        y1="48"
        x2="82"
        y2="58"
        stroke="url(#agenticGradient)"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="96"
        y1="80"
        x2="82"
        y2="70"
        stroke="url(#agenticGradient)"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="64"
        y1="100"
        x2="64"
        y2="82"
        stroke="url(#agenticGradient)"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="32"
        y1="80"
        x2="46"
        y2="70"
        stroke="url(#agenticGradient)"
        strokeWidth="2"
        opacity="0.6"
      />
      <line
        x1="32"
        y1="48"
        x2="46"
        y2="58"
        stroke="url(#agenticGradient)"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Inner sparkles */}
      <circle cx="64" cy="64" r="3" fill="#FFFFFF" />
      <circle cx="58" cy="58" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="70" cy="58" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="58" cy="70" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="70" cy="70" r="2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}
