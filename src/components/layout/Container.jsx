import { forwardRef } from "react";

const Container = forwardRef(function Container(
  { children, className = "", ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={`mx-auto max-w-content px-6 sm:px-10 lg:px-margin ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Container;
