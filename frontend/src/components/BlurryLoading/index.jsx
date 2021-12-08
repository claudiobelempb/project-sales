import { useState, useEffect } from "react";
import { blurry, blurry__bg, blurry__text } from "./styles.module.scss";

const BlurryLoading = () => {
  return (
    <>
      <section className={`container ${blurry} ${blurry__bg}`}>
        <div className={`${blurry__text}`}>{load}%</div>
      </section>
    </>
  );
};

export { BlurryLoading };
