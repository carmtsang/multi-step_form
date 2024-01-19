"use client";

import { useState } from "react";
import Card from "./components/Card";
import Steps from "./components/Steps";
import { CARD_TITLE_BUTTON_STEP } from "./constants";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [registrationStep, setRegistrationStep] = useState({
    step: 1,
    title: "Register",
    buttonText: "Continue",
  });

  const allSteps = Object.values(CARD_TITLE_BUTTON_STEP);
  console.log(allSteps);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card
        setTopic={setTopic}
        registrationStep={registrationStep}
        setRegistrationStep={setRegistrationStep}
        allSteps={allSteps}
      />
      <Steps stepNum={registrationStep.step} totalSteps={allSteps.length} />
    </main>
  );
}
