import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetails";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/items/:id" element={<ItemDetail />} />
    </Routes>
  );
};

export default App;
