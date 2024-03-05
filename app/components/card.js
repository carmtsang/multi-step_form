import { Button } from "./Button";

export default function Card({ children }) {
  return (
    <div className="lg:w-3/4 sm:w-96 bg-gray/50 border border-gray-light rounded-lg shadow-lg">
      {children}
    </div>
  );
}
