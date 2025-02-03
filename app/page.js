"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4 p-3 text-right bg-gray-200 rounded text-xl font-mono">
          {input || "0"}
        </div>
        <div className="mb-4 p-3 text-right bg-gray-300 rounded text-xl font-mono font-bold">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, "/"].map((item) => (
            <button
              key={item}
              className="p-4 bg-blue-500 text-white rounded"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          {[4, 5, 6, "*"].map((item) => (
            <button
              key={item}
              className="p-4 bg-blue-500 text-white rounded"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          {[1, 2, 3, "-"].map((item) => (
            <button
              key={item}
              className="p-4 bg-blue-500 text-white rounded"
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
          {[0, ".", "=", "+"].map((item) => (
            <button
              key={item}
              className={`p-4 rounded ${
                item === "=" ? "bg-green-500" : "bg-blue-500"
              } text-white`}
              onClick={item === "=" ? calculateResult : () => handleClick(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="p-4 bg-red-500 text-white rounded col-span-2"
            onClick={clearInput}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
