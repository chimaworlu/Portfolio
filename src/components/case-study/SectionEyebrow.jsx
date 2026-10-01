export default function SectionEyebrow({ children, color }) {
  return (
    <p style={{ color }} className="text-xs font-semibold uppercase tracking-wide">
      {children}
    </p>
  );
}
