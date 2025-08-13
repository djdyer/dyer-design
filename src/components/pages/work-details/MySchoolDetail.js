import React from "react";

export default function Work() {
  return (
    <div id="work-entry-page">
      <section>
        <div>
          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755109678/Desktop_Mock_ms3vjn.png"
            alt="My School"
          />

          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755109691/my_school_mobile_screens2-2_efoq98.jpg"
            alt="My School"
          />

          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755109686/Mobile_Mock_v36byv.png"
            alt="My School"
          />
          <div className="video">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/WFD5FxGGliA?si=G0EjWUPEgN97qxo6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
