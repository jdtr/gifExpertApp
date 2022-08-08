import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon ball"]);

  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;
    setCategories([newValue, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* List */}
      
      <AddCategory onNewValue={(value) => onAddCategory(value)} />
      
      {/* Se agrega el prop que recibira el componente */}
      
      <button onClick={onAddCategory}>Add category</button>

      {
        categories.map((category, i) => (
          <GifGrid key={ category } category={ category } />
        ))
      }
    </>
  );
};
