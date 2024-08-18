import { ExtraLinks } from "./extra-link/extra-links";
import { SocialLinks } from "./social-links";
import { PersonalInfo } from "./personal-info";
import { BackgroundSettings } from "./background/background-settings";
import { ButtonPublish } from "./actions/button-publish";
import { ButtonDemo } from "./actions/button-demo";
import { MobilePreview } from "./mobile/mobile-preview";

export const HomeEditor = () => {
  return (
    <div className="w-full h-full flex bg-gray-100 ">
      <div className="flex-1 overflow-y-auto gap-4 flex flex-col  py-8 px-16 mb-20 md:mb-0">
        <PersonalInfo />
        <SocialLinks />
        <ExtraLinks />
        <BackgroundSettings />
        <div className="grid grid-cols-2 gap-2 ">
          <ButtonPublish />
          <ButtonDemo />
        </div>
      </div>
      <div className="h-auto w-[35%] hidden lg:!block">
        <MobilePreview />
      </div>
    </div>
  );
};
