import React, { useState, useEffect } from 'react';
import "./App.css";

function DarkMode() {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
localStorage.setItem("theme", theme);
document.querySelector("body").classList.remove("light", "dark");
document.querySelector("body").classList.add(theme);
}, [theme]);

const switchTheme = () => {
setTheme(theme === "dark" ? "light" : "dark");
};

return (
<header>
<button aria-label="Przełącznik trybu nocnego" onClick={switchTheme}>
<div className="icon"></div>
</button>
</header>
);
}

export default DarkMode;