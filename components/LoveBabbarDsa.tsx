  "use client";


  import { useEffect, useState } from "react";
  import { initialData } from "@/data/dsaBabbar";
  import Image from "next/image";


  interface Data {
    link: string;
    question: string;
    isCompleted: boolean;
  }

  export default function LoveBabbar() {
    const [done, setDone] = useState<Data[]>(() => {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem("completedItems");
        return storedData ? JSON.parse(storedData) : initialData;
      } else {
        return initialData;
      }
    });

    const [complete, setComplete] = useState<number>(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedData: string | null = localStorage.getItem("completedItems");
        if (storedData) {
          setDone(JSON.parse(storedData));
        }
      }
      // console.log(done);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      let count = 0;
      done.map((item: any, index: number) => {
        if (item?.isCompleted === true) count++;
      });
      setComplete(count);
    }, [done]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      const per = ((complete / 450) * 100).toFixed(2);
      setPercent(parseFloat(per));
    }, [complete]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("completedItems", JSON.stringify(done));
      }
    }, [done]);

    const [percent, setPercent] = useState<number>(0);

    return (
      <div className="mt-24 flex flex-col items-center justify-center mx-2 sm:mx-30 md:mx-60">
        <h1 className="font-bold text-4xl p-5 bg-yellow-300 rounded-lg">Love Babbar 450 DSA</h1>
        <p className="mb-4">Completed : {complete}/450</p>
        <div className="h-6 bg-gray-200 w-full	 mb-4">
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
              <th className=" text-left text-xs font-medium text-gray-500 uppercase">
                S.No
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase">
                Question
              </th>
              <th className="text-center text-xs font-medium text-gray-500 uppercase ">
                Link
              </th>
              <th className="text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                Completed
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {done.map((item:any, index: number) => (
              <tr key={index}>
                <td className=" text-center ">{index + 1}.</td>
                <td className="border font-bold">{item?.question}</td>
                <td className="sm:px-4">
                  <a
                    href={item?.link}
                    target="_blank"
                    className="flex cursor-pointer hover:bg-slate-300 rounded-full p-1 items-center justify-center"
                  >
                    <Image width={25} height={25} src="/gfg.svg" alt="Leetcode" />
                  </a>
                </td>
                <td
                  className="flex flex-row h-full items-center justify-center  text-center bg-yellow-200 cursor-pointer border py-10"
                  onClick={() => toggleCompletion(index)}
                >
                  {item?.isCompleted ? (
                    <Image  width={25} height={25}  src="/tick.svg" alt="" />
                  ) : (
                    <Image width={25} height={25} src="/nottick.svg" alt="" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
