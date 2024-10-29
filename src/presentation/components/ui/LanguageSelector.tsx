"use client";

import { languageOptions } from "@/infrastructure/data/languages";
import React, { useState } from "react";

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    // Language update logic goes here
  };

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="px-3 py-1 bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200 max-h-[90vh] overflow-y-auto">
      {languageOptions.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
