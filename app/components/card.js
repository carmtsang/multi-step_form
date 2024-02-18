import { Button } from "./Button";

export default function Card({ children }) {
  return (
    <div className="bg-gray/50 border border-gray-light rounded-lg shadow-lg">
      {children}
    </div>
  );
}
