import React from "react";
import tvStyle from "./NotFound.module.css";
const Tv: React.FC = () => {
  return (
    /* From Uiverse.io by Sophiek9h */
    <div className={` mx-12 ${tvStyle.main_wrapper}`}>
      <div className={tvStyle.main}>
        <div className={tvStyle.antenna}>
          <div className={tvStyle.antenna_shadow}></div>
          <div className={tvStyle.a1}></div>
          <div className={tvStyle.a1d}></div>
          <div className={tvStyle.a2}></div>
          <div className={tvStyle.a2d}></div>
          <div className={tvStyle.a_base}></div>
        </div>
        <div className={tvStyle.tv}>
          <div className={tvStyle.display_div}>
            <div className={tvStyle.screen_out}>
              <div className={tvStyle.screen_out1}>
                <div className={tvStyle.screen}>
                  <span className={tvStyle.notfound_text}>404 Not Found:</span>
                </div>
              </div>
            </div>
          </div>
          <div className={tvStyle.lines}>
            <div className={tvStyle.line1}></div>
            <div className={tvStyle.line2}></div>
            <div className={tvStyle.line3}></div>
          </div>
          <div className={tvStyle.buttons_div}>
            <div className={tvStyle.b1}>
              <div></div>
            </div>
            <div className={tvStyle.b2}></div>
            <div className={tvStyle.speakers}>
              <div className={tvStyle.g1}>
                <div className={tvStyle.g11}></div>
                <div className={tvStyle.g12}></div>
                <div className={tvStyle.g13}></div>
              </div>
              <div className={tvStyle.g}></div>
              <div className={tvStyle.g}></div>
            </div>
          </div>
        </div>
        <div className={tvStyle.bottom}>
          <div className={tvStyle.base1}></div>
          <div className={tvStyle.base2}></div>
          <div className={tvStyle.base3}></div>
        </div>
      </div>
    </div>
  );
};

export default Tv;
