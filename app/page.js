"use client";

import { useState } from "react";

import Steps from "./components/Steps";
import {
  CARD_TITLE_BUTTON_STEP,
  NOT_SELECTED_INTEREST,
  SELECTED_INTEREST,
} from "./constants";
import Card from "./components/Card";
import Interest from "./components/Interest";
import Summary from "./components/Summary";
import Register from "./components/Register";

export default function Home() {
  const [registrantInfo, setRegistrantInfo] = useState({
    name: "",
    email: "",
    topics: [],
  });

  const notSelectedButtonColor = NOT_SELECTED_INTEREST;
  const selectedColor = SELECTED_INTEREST;

  const [selectedInterestButtonColor, setSelectedInterestButtonColor] =
    useState(notSelectedButtonColor);

  const clickInterest = (color) => {
    setSelectedInterestButtonColor(color);
  };

  const { topics, name, email } = registrantInfo;

  const handleRegistrantTopics = (topic) => {
    if (!topics.includes(topic)) {
      setRegistrantInfo((prev) => ({
        ...prev,
        topics: [...topics, topic],
      }));
    }
  };

  const handleRegistrantInfo = (name, value) => {
    setRegistrantInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const allSteps = Object.values(CARD_TITLE_BUTTON_STEP);
  const [registrationStep, setRegistrationStep] = useState(
    CARD_TITLE_BUTTON_STEP[1]
  );

  const handleNextStep = (e) => {
    const nextStep = registrationStep.step + 1;
    setRegistrationStep((prev) => CARD_TITLE_BUTTON_STEP[nextStep]);
    if (e) e.preventDefault();
  };
  const { buttonText, title, step } = registrationStep;

  const currentStep = () => {
    if (step === 1) {
      return (
        <Register
          handleRegistrantInfo={handleRegistrantInfo}
          registrant={name}
          buttonText={buttonText}
          email={email}
          handleNextStep={handleNextStep}
        />
      );
    }
    if (step === 2) {
      return (
        <Interest
          handleRegistrantTopics={handleRegistrantTopics}
          selectedInterest={selectedInterestButtonColor}
          buttonText={buttonText}
          handleNextStep={handleNextStep}
        />
      );
    }
    if (step === 3) {
      return (
        <Summary
          registrantInfo={registrantInfo}
          buttonText={buttonText}
          handleNextStep={handleNextStep}
        />
      );
    }
  };

  return (
    <main className="container w-1/3 mx-auto h-screen flex flex-col justify-center items-center">
      <Card>
        <div class="md:flex">
          <h1 className="text-xl px-9 pt-10 pb-6">{title}</h1>
        </div>
        {currentStep()}
      </Card>
      <Steps stepNum={registrationStep.step} totalSteps={allSteps.length} />
    </main>
  );
}
