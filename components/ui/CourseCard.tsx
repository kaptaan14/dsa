import Image from "next/image";

export default function CourseCard() {
  return (
    <div className="flex flex-col border rounded-xl pt-3 px-3 ">
        <div className="p-3">
            <Image src="./next.svg" alt="" className="bg-cover"/>
        </div>
        <hr />
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold ">NextJs Course</h1>
        <button className="italic font-[1px]">See</button>
      </div>
      <hr />
      <div className="py-3">
        <p>
          This is a nextjs course
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laudantium quod distinctio minima numquam perspiciatis, enim velit maiores nemo? Nihil.
        </p>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <p>
            $12
        </p>
        <p className="italic">
            By Love Babbar
        </p>
      </div>

      
    </div>
  );
}
