export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center pt-24  w-full h-screen">
        <div className="text-3xl font-bold flex items-center justify-center p-2">
          Top DSA Sheets To Crack Any Coding Interview
        </div>
        <div>
          <p>Start your DSA journey today with us.</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img className="w-60 h-60 mt-10"  src="/wip.svg" alt="" />
          <p>This site is currently in progress. <span className="text-4xl">🚧</span></p>
        </div>
        
      </div>
    </> 
  );
}
