export default function Clerk() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="size-5"
    >
      <defs>
        <linearGradient id="clerk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C47FF" />
          <stop offset="100%" stopColor="#17CCFC" />
        </linearGradient>
      </defs>
      <path
        fill="url(#clerk-gradient)"
        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      />
      <circle fill="url(#clerk-gradient)" cx="64" cy="64" r="32" />
    </svg>
  );
}
