import React from "react";

const ThisIsWhatYouMakePossible = (props) => {
  return (
    <div>
      {props.layoutVersion === "New donor" ? (
        <div className="what-possible-wrapper">
          <p> This is what you make possible:</p>
          <section className="preview-imgs-wrapper">
            <div className="preview-img">
              Ecuador Image <p> quote </p>
            </div>
            <div className="preview-img">
              Nepal Image <p> quote </p>
            </div>
            <div className="preview-img">
              DRC Image <p> quote </p>
            </div>
            <div className="preview-img">
              Bosnia Image <p> quote </p>
            </div>
          </section>
        </div>
      ) : (
        <div className="what-possible-wrapper">
          <p> This is what you make possible:</p>
          <section className="preview-imgs-wrapper-recurring">
            <div style={{ display: "flex", gap: "5px" }}>
              <div className="preview-img">
                DRC image <p> quote </p>
              </div>
              <div className="preview-img">
                Nepal circle image <p> quote </p>
              </div>
            </div>

            <div className="preview-img" style={{ width: "100%" }}>
              Balloons release image<p> quote </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ThisIsWhatYouMakePossible;
