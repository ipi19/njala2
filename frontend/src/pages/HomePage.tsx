import landing from "../assets/landing.png";
import app from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-12">
      <div className=" bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          TUCK INTO A TAKEAWAY TODAY
        </h1>
        <span className=" text-xl"> Food is just a click away </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img title="landing img" src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order even faster
          </span>
          <span>download the njala.com app</span>
          <img title="app" src={app} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
