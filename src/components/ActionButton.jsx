import { useTheme } from "../hooks/useTheme";

function ActionButton({ children, disabled, onClick }) {
  const { theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";

  return (
    <button
      className={`text-white font-bold p-4 rounded-[5px] shadow-[0_0_10px_0_rgba(25,145,143,1)] transition-all ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-105 active:scale-110"
      }`}
      style={{
        backgroundColor: themeColor,
        boxShadow: `0 0 10px 0 ${themeColor}`,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;
