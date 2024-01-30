"use client";

import { useState } from "react";

import Steps from "./components/Steps";
import { CARD_TITLE_BUTTON_STEP } from "./constants";
import Card from "./components/Card";

export default function Home() {
  const [registrantInfo, setRegistrantInfo] = useState({
    name: "",
    email: "",
    topics: [],
  });

  const [registrationStep, setRegistrationStep] = useState({
    step: 1,
    title: "Register",
    buttonText: "Continue",
  });

  const allSteps = Object.values(CARD_TITLE_BUTTON_STEP);

  const handleNextStep = () => {};
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card
        registrantInfo={registrantInfo}
        setRegistrantInfo={setRegistrantInfo}
        registrationStep={registrationStep}
        setRegistrationStep={setRegistrationStep}
        allSteps={allSteps}
      />
      <Steps stepNum={registrationStep.step} totalSteps={allSteps.length} />
    </main>
  );
}
