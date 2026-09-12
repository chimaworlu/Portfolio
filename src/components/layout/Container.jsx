export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-content px-6 sm:px-10 lg:px-margin ${className}`}>
      {children}
    </div>
  );
}
