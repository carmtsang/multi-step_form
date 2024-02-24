"use client";

import { useState } from "react";

import Steps from "./components/Steps";
import { CARD_TITLE_BUTTON_STEP } from "./constants";
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
    setRegistrationStep(CARD_TITLE_BUTTON_STEP[nextStep]);
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
          title={title}
          email={email}
          handleNextStep={handleNextStep}
        />
      );
    }
    if (step === 2) {
      return (
        <Interest
          handleRegistrantTopics={handleRegistrantTopics}
          selectedTopics={topics}
          title={title}
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
          title={title}
          handleNextStep={handleNextStep}
        />
      );
    }
  };

  return (
    <main className="container w-1/3 mx-auto h-screen flex flex-col justify-center">
      <Card>{currentStep()}</Card>
      <Steps stepNum={registrationStep.step} totalSteps={allSteps.length} />
    </main>
  );
}
