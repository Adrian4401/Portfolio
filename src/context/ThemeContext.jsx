import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const getDefaultTheme = () => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;
        return 'dark';
    };

    const [theme, setTheme] = useState(getDefaultTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};