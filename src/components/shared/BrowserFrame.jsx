export default function BrowserFrame({ children, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-white ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
