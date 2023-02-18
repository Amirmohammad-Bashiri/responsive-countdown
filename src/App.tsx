import { memo, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./theme";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const [count, setCount] = useState(15);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const preferedTheme = window.matchMedia("(prefers-color-scheme: light)");
    setTheme(preferedTheme.matches ? "light" : "dark");
    preferedTheme.addEventListener("change", ({ matches }) => {
      setTheme(matches ? "light" : "dark");
    });

    return () =>
      preferedTheme.removeEventListener("change", () => {
        setTheme(preferedTheme.matches ? "light" : "dark");
      });
  }, []);

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        if (count >= 1) {
          setCount(prevCount => prevCount - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStarted, count]);

  const handleStart = () => {
    setCount(15);
    setIsStarted(true);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header count={count} toggleTheme={toggleTheme} theme={theme} />
      <Body handleStart={handleStart} />
    </ThemeProvider>
  );
}

export default memo(App);
