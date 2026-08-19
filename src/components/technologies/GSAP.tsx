export default function GSAP() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="size-5"
    >
      <defs>
        <linearGradient id="gsap-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#88CE02" />
          <stop offset="100%" stopColor="#0AE448" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gsap-gradient)"
        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32 80H32V48h64v32z"
      />
      <path fill="#FFFFFF" d="M48 56h32v16H48z" />
    </svg>
  );
}
