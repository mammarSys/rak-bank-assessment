import React from "react";
import "./App.css";
import Carousel from "./Carousel";
import { LandingPage } from "./LandingPage";

import { useSelector } from "react-redux";
import { RootState } from "./store";

interface Option {
  icon: string;
  label: string;
}

interface Slide {
  title: string;
  options: Option[];
}

const slides: Slide[] = [
  {
    title: "How was your week overall?",
    options: [
      { icon: "one", label: "Good 1" },
      { icon: "one", label: "Good 1" },
      { icon: "one", label: "Good 1" },
    ],
  },
  {
    title: "Your Favt Color",
    options: [
      { icon: "🔴", label: "Red" },
      { icon: "🟢", label: "Green" },
      { icon: "🔵", label: "Blue" },
    ],
  },
  {
    title: "Your favt pet?",
    options: [
      { icon: "🐱", label: "Cat" },
      { icon: "🐶", label: "Dog" },
      { icon: "🐰", label: "Rabbit" },
    ],
  },
];

const App: React.FC = () => {
  const userName = useSelector((state: RootState) => state.name.value);

  return (
    <div className="app">{!userName ? <LandingPage /> : <Carousel />}</div>
  );
};
export default App;
