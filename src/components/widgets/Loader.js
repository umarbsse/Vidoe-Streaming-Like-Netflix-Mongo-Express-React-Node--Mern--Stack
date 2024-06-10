import React from "react";
export default function Loader() {
  return (
    <>
      {/* loader Start */}
      <div className="loader simple-loader">
        <div className="loader-body">
          <img
            src="/assets/images/loader.gif"
            alt="loader"
            className="img-fluid "
            width="300"
          />
        </div>
      </div>
      {/* loader END */}
    </>
  );
}
