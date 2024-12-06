import { useState } from "react";

function App() {
  const vertical = 16;
  const horizontal = 8;

  const [hex, setHex] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bit, setBit] = useState<number>(0);

  const [pixel, setPixel] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const hexMap = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <div>
        {Array.from({ length: vertical }).map((_, i) => (
          <div key={i} className="flex">
            {Array.from({ length: horizontal }).map((_, j) => (
              <div
                key={j}
                className={`w-8 h-8 border border-gray-300 cursor-pointer ${
                  pixel[i][j] === 1 ? "bg-black" : ""
                }`}
                onClick={() => {
                  setPixel((prevPixel) => {
                    const newPixel = prevPixel.map((row) => [...row]); // Create a deep copy
                    newPixel[i][j] = newPixel[i][j] === 0 ? 1 : 0; // Toggle value
                    return newPixel;
                  });
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div>
          Hex :{" "}
          <input
            type="text"
            onChange={(e) => setHex(e.target.value)}
            className="border rounded-md border-slate-300"
          />
        </div>
        <div>
          Name :{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md border-slate-300"
          />
        </div>
        <div>
          Bit :{" "}
          <input
            type="number"
            onChange={(e) => setBit(Number(e.target.value))}
            className="border rounded-md border-slate-300"
          />
        </div>
        <div className="bg-slate-700 text-white py-4 px-6">
          <code>
            // code x{hex} {name && `(${name})`} <br />
            {pixel.map((row, i) => (
              <span key={i}>
                {bit}'h{hex}
                {hexMap[i]}: data = 8'b{row}; <br />
              </span>
            ))}
          </code>
        </div>
        <div className="flex gap-2 items-center">
          <div>Preview : </div>
          <div>
            {Array.from({ length: vertical }).map((_, i) => (
              <div key={i} className="flex">
                {Array.from({ length: horizontal }).map((_, j) => (
                  <div
                    key={j}
                    className={`w-0.5 h-0.5 cursor-pointer ${
                      pixel[i][j] === 1 ? "bg-black" : ""
                    }`}
                    onClick={() => {
                      setPixel((prevPixel) => {
                        const newPixel = prevPixel.map((row) => [...row]); // Create a deep copy
                        newPixel[i][j] = newPixel[i][j] === 0 ? 1 : 0; // Toggle value
                        return newPixel;
                      });
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
