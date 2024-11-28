import React from "react";
import LandingBannerBg from "../banner-bg/LandingBannerBg";
import BannerSpinner from "../banner-spinner/BannerSpinner";

const LandingBanner: React.FC = () => {
  return (
    <main className="py-28 lg:min-h-screen xl:py-0 bannerBackground z-0">
      <div className="w-1/2 ">
        <LandingBannerBg />
      </div>
      <BannerSpinner />
      <div className="w-1/2">
        <LandingBannerBg />
      </div>
    </main>
  );
};

export default LandingBanner;
