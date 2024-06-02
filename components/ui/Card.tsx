import Link from "next/link";

export default function Card() {
  return (
    <div className="flex flex-col border rounded-xl pt-3 px-3">
      <div>
        <h1 className="text-2xl font-bold ">Love Babbar DSA Sheet</h1>
      </div>
      <hr />
      <div className="py-3">
        <p>
          A 450-question sheet covering various topics of Data Structures and
          Algorithms by Love Babbar, a Youtuber and ex-Amazon engineer.
        </p>
      </div>
      <hr />
        <Link href={"/dsa/lovebabbardsa"} className="w-full text-center py-1">
          View
        </Link>
    </div>
  );
}
