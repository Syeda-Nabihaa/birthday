import React from "react";
import "./Flower.css";

const FlowersAnimation = () => {
  return (
    <div className="container">
      <div className="night"></div>
      <div className="flowers">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`flower__leaf flower__leaf--${n}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__light flower__light--${i + 1}`}
              ></div>
            ))}
          </div>

          <div className="flower__line">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className={`flower__line__leaf flower__line__leaf--${n}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`flower__leaf flower__leaf--${n}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__light flower__light--${i + 1}`}
              ></div>
            ))}
          </div>
          <div className="flower__line">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`flower__line__leaf flower__line__leaf--${n}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`flower__leaf flower__leaf--${n}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__light flower__light--${i + 1}`}
              ></div>
            ))}
          </div>
          <div className="flower__line">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`flower__line__leaf flower__line__leaf--${n}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Grass and growing elements */}
        <div className="grow-ans" style={{ "--d": "1.2s" }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {[1, 2].map((g) => (
          <div key={g} className="growing-grass">
            <div className={`flower__grass flower__grass--${g}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}
                ></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
        ))}

        {/* Multiple growing sections */}
        {[
          { className: "flower__g-right flower__g-right--1", d: "2.4s" },
          { className: "flower__g-right flower__g-right--2", d: "2.8s" },
        ].map((el, i) => (
          <div key={i} className="grow-ans" style={{ "--d": el.d }}>
            <div className={el.className}>
              <div className="leaf"></div>
            </div>
          </div>
        ))}

        {/* Front leaves */}
        <div className="grow-ans" style={{ "--d": "2.8s" }}>
          <div className="flower__g-front">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i + 1}`}
              >
                <div className="flower__g-front__leaf"></div>
              </div>
            ))}
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        {/* Front right leaf group */}
        <div className="grow-ans" style={{ "--d": "3.2s" }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Long grasses (8 sets) */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`long-g long-g--${i}`}>
            {[0, 1, 2, 3].map((n, j) => (
              <div
                key={j}
                className="grow-ans"
                style={{ "--d": `${3 + Math.random() * 1.8}s` }}
              >
                <div className={`leaf leaf--${n}`}></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowersAnimation;
