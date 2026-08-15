"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(
    undefined,
);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>("light");

    // 1. Read the saved theme when the application starts
    useEffect(() => {
        const savedTheme = localStorage.getItem("ablespace-theme");

        if (savedTheme === "dark" || savedTheme === "light") {
            setTheme(savedTheme);
        }
    }, []);

    // 2. Apply the theme to <html> and save it
    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark",
        );

        localStorage.setItem("ablespace-theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light",
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider",
        );
    }

    return context;
}