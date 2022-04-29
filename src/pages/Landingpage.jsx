import OAuth from "../components/OAuth";
function LandingPage() {
  return (
    <>
      <div className="flex p-3">
        <div className="text-2xl">
          Service<span className="font-semibold">Hub</span>
        </div>
        <div className="ml-auto flex justify-evenly space-x-4"></div>
      </div>
      <div className="block md:flex h-screen justify-evenly">
        <img src="../images/hero.jpeg " alt="hero" />
        <div className="flex h-full w-full flex-col items-start justify-start bg-gray-900 text-white">
          <div className="m-10 space-y-4">
            <h2 className="letter flex space-x-2 font-extralight uppercase">
              <span>S</span>
              <span>E</span>
              <span>R</span>
              <span>v</span>
              <span>i</span>
              <span>c</span>
              <span>e</span>
              <span>h</span>
              <span>u</span>
              <span>b</span>
            </h2>
            <h2 className="text-3xl">Quality home services, on demand</h2>
          </div>
          <div className="flex w-full justify-center">
            <OAuth />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
