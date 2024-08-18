import { MobileScreen } from "./mobile-screen";

export const MobilePreview = () => {
  return (
    <div className="w-full h-full mx-auto flex justify-center pt-20">
      <div className="container">
        <div className="phone border-4 border-white/90 shadow-2xl ">
          <div className="bg-black absolute top-4 rounded-full py-1.5 z-10 left-1/2 -translate-x-1/2 w-24">
            <div className="bg-gray-200 w-4 h-4 rounded-full ml-2"></div>
          </div>
          <div className="silent-switch"></div>
          <div className="volume up"></div>
          <div className="volume down"></div>
          <div className="home-button center"></div>
          <MobileScreen />
        </div>
      </div>
    </div>
  );
};
