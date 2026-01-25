import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme === "light" ? (
        <WiMoonAltThirdQuarter className="w-5 h-5 text-white" />
      ) : (
        <FiSun className="w-5 h-5 text-white" />
      )}
    </div>
  );
};

export default ToggleTheme;
