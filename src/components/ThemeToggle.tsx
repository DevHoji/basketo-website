
import React, { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  
  useEffect(() => {
    // Check for saved theme preference or use dark as default
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const updateTheme = (newTheme: string) => {
    if (!newTheme) return;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ToggleGroup 
      type="single" 
      value={theme} 
      onValueChange={updateTheme}
      className="border border-gray-700 rounded-md bg-basketo-dark"
    >
      <ToggleGroupItem value="light" aria-label="Toggle light theme" className="px-2 py-1 text-xs">
        Light
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark theme" className="px-2 py-1 text-xs">
        Dark
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ThemeToggle;
