import React, { useState, useRef } from "react";
import'./App.css';
function CardWrapper({ children }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      {children}
    </div>
  );
}
function ProfileInfo({ name, role }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}
export default function App() {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledRef = useRef(null);
  const [uncontrolledValue, setUncontrolledValue] = useState("");
  const handleUncontrolled = () => {
    setUncontrolledValue(uncontrolledRef.current.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <CardWrapper>
       
        <ProfileInfo name="Yuna" role="Frontend Developer" />
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Controlled Input
          </label>
          <input
            type="text"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            placeholder="Type something..."
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <p className="mt-2 text-sm text-gray-600">
            Value: {controlledValue}
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Uncontrolled Input
          </label>
          <input
            type="text"
            ref={uncontrolledRef}
            placeholder="Type something..."
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleUncontrolled}
            className="mt-3 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Get Value
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Value: {uncontrolledValue}
          </p>
        </div>
      </CardWrapper>
    </div>
  );
}
