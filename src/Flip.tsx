/* eslint-disable no-void */
import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import binCountUp from "./counter";

const FlipCountdown = () => {
  const clock = {
    first: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    second: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    third: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    fourth: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    fifth: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    sixth: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    seventh: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
    eighth: {
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<any>(null),
    },
  };

  type ObjectKey = keyof typeof clock;

  let interval: NodeJS.Timer | null = null;
  let prev = [1, 1, 1, 1, 1, 1, 1, 1];

  const processClock = (currentValue: number[]) => {
    const value = currentValue;

    // first
    clock.first.value[1](value[0]);
    clock.first.prevValue[1](prev[0]);
    if (value[0] !== prev[0] && clock.first.ref.current) {
      const section = clock.first.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // second
    clock.second.value[1](value[1]);
    clock.second.prevValue[1](prev[1]);
    if (value[1] !== prev[1] && clock.second.ref.current) {
      const section = clock.second.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // third
    clock.third.value[1](value[2]);
    clock.third.prevValue[1](prev[2]);
    if (value[2] !== prev[2] && clock.third.ref.current) {
      const section = clock.third.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // fourth
    clock.fourth.value[1](value[3]);
    clock.fourth.prevValue[1](prev[3]);
    if (value[3] !== prev[3] && clock.fourth.ref.current) {
      const section = clock.fourth.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // fifth
    clock.fifth.value[1](value[4]);
    clock.fifth.prevValue[1](prev[4]);
    if (value[4] !== prev[4] && clock.fifth.ref.current) {
      const section = clock.fifth.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // sixth
    clock.sixth.value[1](value[5]);
    clock.sixth.prevValue[1](prev[5]);
    if (value[5] !== prev[5] && clock.sixth.ref.current) {
      const section = clock.sixth.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // seventh
    clock.seventh.value[1](value[6]);
    clock.seventh.prevValue[1](prev[6]);
    if (value[6] !== prev[6] && clock.seventh.ref.current) {
      const section = clock.seventh.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    // eighth
    clock.eighth.value[1](value[7]);
    clock.eighth.prevValue[1](prev[7]);
    if (value[7] !== prev[7] && clock.eighth.ref.current) {
      const section = clock.eighth.ref.current.querySelector(
        ".flip-countdown-card-sec.one"
      );
      section.classList.remove("flip");
      void section.offsetWidth;
      section.classList.add("flip");
    }

    prev = value;
  };

  useEffect(() => {
    let array = [0, 0, 0, 0, 0, 0, 0, 0];
    processClock(array);
    interval = setInterval(() => {
      array = binCountUp(array);
      processClock(array);
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const getPiece = (key: ObjectKey) => {
    const data = clock[key];
    const [value] = data.value;
    const [prevValue] = data.prevValue;

    return (
      <span className="flip-countdown-piece" ref={data.ref}>
        <span className="flip-countdown-card">
          <span className="flip-countdown-card-sec one">
            <span className="card__top">{value}</span>
            <span className="card__bottom" data-value={prevValue} />
            <span className="card__back" data-value={prevValue}>
              <span className="card__bottom" data-value={value} />
            </span>
          </span>
        </span>
      </span>
    );
  };

  return (
    <div className={`flip-countdown`}>
      {getPiece("eighth")}
      {getPiece("seventh")}
      {getPiece("sixth")}
      {getPiece("fifth")}
      {getPiece("fourth")}
      {getPiece("third")}
      {getPiece("second")}
      {getPiece("first")}
    </div>
  );
};

export default FlipCountdown;
