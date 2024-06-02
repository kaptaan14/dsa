"use client";
import { useEffect, useState } from "react";
import { initialData } from "@/data/dsaBabbar";

interface Data {
  question: string;
  link: string;
  isCompleted: boolean;
}

export default function LoveBabbar() {
  const filteredInitialData = initialData.filter(
    (data) => data !== undefined
  ) as Data[];
  const [done, setDone] = useState<Data[]>(() => {
    const storedData = localStorage.getItem("completedItems");
    return storedData ? JSON.parse(storedData) : filteredInitialData;
  });

  const [complete, setComplete] = useState<number>(0);

  useEffect(() => {
    const storedData: string | null = localStorage.getItem("completedItems");
    if (storedData) {
      setDone(JSON.parse(storedData));
    }
    console.log(done);
  }, [complete]);

  const toggleCompletion = (index: number) => {
    setDone((prev) =>
      prev.map((prevDone, i) =>
        i === index
          ? { ...prevDone, isCompleted: !prevDone.isCompleted }
          : prevDone
      )
    );
  };

  useEffect(() => {
    let count = 0;
    done.map((item: any, index: number) => {
      if (item.isCompleted === true) count++;
    });
    setComplete(count);
  }, [done]);

  useEffect(() => {
    const per = ((complete / 450) * 100).toFixed(2);
    setPercent(parseFloat(per));
  }, [complete]);

  useEffect(() => {
    localStorage.setItem("completedItems", JSON.stringify(done));
  }, [done]);

  const [percent, setPercent] = useState<number>(0);

  return (
    <div className="overflow-x-auto mt-24  sm:px-60 flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl pb-5">Love Babbar 450 DSA</h1>
      <p className="mb-4">Completed : {complete}/450</p>
      <div className="h-6 bg-gray-200 w-full mb-4">
        <div
          className={`h-full bg-blue-500 text-center`}
          style={{ width: `${percent}%` }}
        >
          <span>{percent}%</span>
        </div>
      </div>
      <table className=" divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              S.No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Question
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase ">
              Link
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Completed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {done.map((item: any, index: number) => (
            <tr key={index}>
              <td className=" text-center ">{index + 1}.</td>
              <td className="border font-bold  px-4">{item.question}</td>
              <td className="  ">
                <a
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer hover:bg-slate-100  flex items-center justify-center py-2"
                >
                  <img className="w-6 h-6" src="/gfg.svg" alt="Leetcode" />
                </a>
              </td>
              <td
                className="flex h-full justify-center whitespace-nowrap text-center my-1 py-2 bg-yellow-200 cursor-pointer"
                onClick={() => toggleCompletion(index)}
              >
                {item.isCompleted ? (
                  <svg
                    className="w-6 h-6  text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
