import React from "react";
import reactDom from "react-dom";
import Header from "./src/Header";
import Footer from "./src/Footer";
import Note from "./Note";
function App() {
  return reactDom.render(
    <div>
      <Header />

      <Note />
      <Footer />
    </div>,
    document.getElementById("root")
  );
}
export default App;
