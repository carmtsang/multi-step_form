import { GRAY_CIRCLE, PURPLE_CIRCLE } from "../constants";

export default function Steps({ stepNum, totalSteps }) {
  const purple = PURPLE_CIRCLE;
  const gray = GRAY_CIRCLE;

  const circleColors = (colors) => {
    return colors.map((color, index) => {
      return (
        <span
          key={index}
          className={`flex w-2.5 h-2.5 me-2.5 rounded-full ${color}`}
        />
      );
    });
  };

  const displayCircles = () => {
    const stepOne = [purple, gray, gray];
    const stepTwo = [purple, purple, gray];
    const stepThree = [purple, purple, purple];

    if (stepNum === 1) return circleColors(stepOne);
    if (stepNum === 2) return circleColors(stepTwo);
    if (stepNum === 3) return circleColors(stepThree);
  };

  return (
    <div className="mt-6 flex justify-center space-x-8">
      <p className="text-xs text-gray">
        Step {stepNum} of {totalSteps}
      </p>

      <div className="flex pace-x-6">{displayCircles()}</div>
    </div>
  );
}
