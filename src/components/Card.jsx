function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded shadow p-6 transition-transform duration-200 hover:scale-105 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
