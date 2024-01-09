"use client";

import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const index = () => {
  const [boolTheme, setBoolTheme] = useState(false);

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme") || "light";

    document.documentElement.classList.add(currentTheme);
    setBoolTheme(currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    let currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.remove(currentTheme);

    if (currentTheme === "dark") {
      currentTheme = "light";
      setBoolTheme(false);
    } else {
      currentTheme = "dark";
      setBoolTheme(true);
    }

    document.documentElement.classList.add(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <>
      {boolTheme ? (
        <CiLight onClick={toggleTheme} className="cursor-pointer" size={24} />
      ) : (
        <CiDark onClick={toggleTheme} className="cursor-pointer" size={24} />
      )}
    </>
  );
};

export default index;
