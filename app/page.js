import Card from "./components/Card";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card title={"Register"} buttonText={"Continue"} />
      <Steps stepNum={"1"} totalSteps={"1"} />
    </main>
  );
}
