import clsx from "clsx";

const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded transition-colors duration-200 focus:outline-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
