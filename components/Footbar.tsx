"use client";

export default function Footbar() {
  return (
    <div className="inset-x-0 bottom-0  mt-10 bg-blue-200">
      <div className="p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="">
            Made with ❤️ by{" "}
            <a target="_blank" href="https://www.github.com/kaptaan14">
              <span className="italic underline">Ashish Singh</span>
            </a>
          </h1>
          <p>©️ All Rights reserved. 2024</p>
        </div>
      </div>
    </div>
  );
}