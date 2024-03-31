import { useState } from "react";
import { MinusCircle, PlusCircle, RotateCw } from "lucide-react";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-gray-900 w-[300px] h-[300px] flex flex-col items-center gap-y-16 rounded-lg border border-violet-900">
      <div className="flex flex-col items-center gap-y-12">
        <h1 className="font-bold text-3xl mt-5">Counter</h1>
        <p className="font-bold text-7xl">{counter}</p>
      </div>

      <div className="flex justify-between flex-row w-[240px]">
        <MinusCircle
          className="hover:text-violet-900 cursor-pointer"
          size={30}
          onClick={() => {
            setCounter(counter - 1);
          }}
        />
        <RotateCw
          className="hover:text-violet-900 cursor-pointer hover:animate-spin"
          size={30}
          onClick={() => {
            setCounter(0);
          }}
        />
        <PlusCircle
          className="hover:text-violet-900 cursor-pointer"
          size={30}
          onClick={() => {
            setCounter(counter + 1);
          }}
        />
      </div>
    </div>
  );
}
