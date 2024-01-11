"use client";

import { useState } from "react";
import Card from "./components/Card";
import Steps from "./components/Steps";
import { CARD_TITLE_BUTTON_STEP } from "./constants";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [step, setStep] = useState();

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card
        title={"Which topics you are interested in?"}
        buttonText={"Continue"}
        setTopic={setTopic}
      />
      <Steps stepNum={"2"} totalSteps={"3"} />
    </main>
  );
}
