export default function Noise() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
      style={{
        backgroundImage: "url('/noise.png')",
      }}
    />
  );
}
