import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
