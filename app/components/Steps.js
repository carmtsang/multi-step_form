export default function Steps({ stepNum, totalSteps }) {
  return (
    <div className="mt-6 flex space-x-8">
      <p className="text-xs text-gray">
        Step {stepNum} of {totalSteps}
      </p>
      <div className="flex pace-x-6">
        <span className="flex w-2.5 h-2.5 me-2.5 bg-purple rounded-full ring-[6px] ring-purple/25" />
        <span className="flex w-2.5 h-2.5 me-2.5 bg-gray rounded-full" />
        <span className="flex w-2.5 h-2.5 me-2.5 bg-gray rounded-full" />
      </div>
    </div>
  );
}
