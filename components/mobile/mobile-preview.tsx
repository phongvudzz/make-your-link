import { MobileScreen } from "./mobile-screen";

export const MobilePreview = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-col">
      <div className="container flex-1 flex flex-col items-center justify-center">
        <div className="phone border-4 border-white/90 shadow-2xl ">
          <div className="bg-black absolute top-4 rounded-full py-1.5 z-10 left-1/2 -translate-x-1/2 w-24">
            <div className="bg-gray-200 w-4 h-4 rounded-full ml-2" />
          </div>
          <div className="silent-switch" />
          <div className="volume up" />
          <div className="volume down" />
          <div className="home-button center" />
          <div className="swipe-screen bottom-3 left-1/2 -translate-x-1/2" />
        </div>
        <MobileScreen />
      </div>
    </div>
  );
};
