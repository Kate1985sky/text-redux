import { useEffect, useState } from "react";

export const EditorProvider = ({ dataKey = "text-redux" }) => {
  const itemLocalStorage = localStorage.getItem(dataKey)
    ? JSON.parse(localStorage.getItem(dataKey))
    : [];

  const [currentCatalog, setcurrentCatalog] = useState(itemLocalStorage);

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(currentCatalog));
  }, [currentCatalog]);
};
