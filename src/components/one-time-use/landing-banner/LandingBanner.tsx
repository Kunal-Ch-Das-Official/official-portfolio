import React from "react";
import LandingBannerBg from "../banner-bg/LandingBannerBg";
import BannerSpinner from "../banner-spinner/BannerSpinner";

const LandingBanner: React.FC = () => {
  return (
    <main className="min-h-screen bannerBackground z-0">
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
