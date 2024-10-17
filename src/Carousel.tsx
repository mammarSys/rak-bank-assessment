import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import "./Carousel.css";
import { submitResponse } from "./services/user-service";

const Carousel: React.FC = () => {
  const userName = useSelector((state: RootState) => state.name.value);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

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
      title: `Hi ${userName}, How was your week overall?`,
      options: [
        { icon: "😀", label: "Good" },
        { icon: "😎", label: "Best" },
        { icon: "🤯", label: "Exhauted" },
      ],
    },
    {
      title: `${userName} what is your favourite Color?`,
      options: [
        { icon: "🔴", label: "Red" },
        { icon: "🟢", label: "Green" },
        { icon: "🔵", label: "Blue" },
      ],
    },
    {
      title: `${userName} what is your favourite pet?`,
      options: [
        { icon: "🐱", label: "Cat" },
        { icon: "🐶", label: "Dog" },
        { icon: "🐰", label: "Rabbit" },
      ],
    },
  ];

  const handleSlideChange = (index: number): void => {
    if (index < slides.length) setCurrentSlide(index);
    else submitAnswers(); //submit answer to mock API
  };

  const submitAnswers = async (): Promise<void> => {
    try {
      alert(`Submitting answers`);
      setCurrentSlide(currentSlide + 1);

      //   Submit responnse to API
      //   const { data } = await submitResponse({ answers });
      //   if (data) {
      //     console.log("");
      //   }
    } catch (err) {
      alert(`an error occured while submitting answers`);
    }
  };

  const selectOption = (slideIndex: number, option: any): void => {
    let newAnswers = [...answers];
    newAnswers[slideIndex] = option.label;
    setAnswers(newAnswers);
    handleSlideChange(slideIndex + 1);
  };

  return (
    <>
      {currentSlide < slides.length ? (
        <div className="carousel-container">
          <div className="leftBlock">
            <div className="dots">
              {slides.map((_: Slide, slideIndex: number) => (
                <div
                  key={`${currentSlide}_${slideIndex}_dots`}
                  onClick={() => handleSlideChange(slideIndex)}
                  className={
                    currentSlide === slideIndex ? "selected-dot" : "dot"
                  }
                >
                  O
                </div>
              ))}
            </div>
            <div className="slide-title">
              {slides.map((slide: Slide, index: number) => (
                <>
                  {currentSlide === index && (
                    <span key={`${currentSlide}_${index}_title`}>
                      {slide.title}
                    </span>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="carousel-options">
            {currentSlide < slides.length
              ? slides[currentSlide].options.map(
                  (option: Option, optionIndex: number) => (
                    <>
                      <div
                        key={`${currentSlide}_${optionIndex}`}
                        className="carousel-option"
                        onClick={() => selectOption(currentSlide, option)}
                      >
                        <span
                          className="label"
                          key={`${currentSlide}_${optionIndex}_label`}
                        >
                          {option.label}
                        </span>
                        {option.icon}
                      </div>
                    </>
                  )
                )
              : null}
          </div>
        </div>
      ) : (
        <>
          <h1>Selected Answers: {answers.join(",")}</h1>
        </>
      )}
    </>
  );
};

export default Carousel;
