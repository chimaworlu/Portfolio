import { forwardRef } from "react";

const Container = forwardRef(function Container(
  { children, className = "" },
  ref
) {
  return (
    <div
      ref={ref}
      className={`mx-auto max-w-content px-6 sm:px-10 lg:px-margin ${className}`}
    >
      {children}
    </div>
  );
});

export default Container;
