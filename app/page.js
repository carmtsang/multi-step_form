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

  const handleNextStep = () => {
    const nextStep = registrationStep.step + 1;
    setRegistrationStep(CARD_TITLE_BUTTON_STEP[registrationStep.step + 1]);
  };

  const { step } = registrationStep;

  const currentStep = () => {
    if (step === 1) {
      return (
        <Register
          handleRegistrantInfo={handleRegistrantInfo}
          registrant={name}
          email={email}
        />
      );
    }
    if (step === 2) {
      return (
        <Interest
          handleRegistrantTopics={handleRegistrantTopics}
          selectedTopics={topics}
        />
      );
    }
    if (step === 3) {
      return <Summary registrantInfo={registrantInfo} />;
    }
  };

  return (
    <main className="container w-1/3 mx-auto h-screen flex flex-col justify-center">
      <Card registrationStep={registrationStep} handleNextStep={handleNextStep}>
        {currentStep()}
      </Card>
      <Steps stepNum={registrationStep.step} totalSteps={allSteps.length} />
    </main>
  );
}
