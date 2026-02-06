import { useEffect } from "react";
import Index from "./Index";

const DarkThemePage = () => {
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");
    if (!hadDark) root.classList.add("dark");
    return () => {
      if (!hadDark) root.classList.remove("dark");
    };
  }, []);

  return <Index />;
};

export default DarkThemePage;
