import { Button } from "./Button";

export default function Card({ children }) {
  return (
    <div className="lg:w-1/2 sm:w-4/6 bg-gray/50 border border-gray-light rounded-lg shadow-lg">
      {children}
    </div>
  );
}
