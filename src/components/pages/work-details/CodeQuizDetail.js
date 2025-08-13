import React from "react";

export default function Work() {
  return (
    <div id="work-entry-page">
      <section>
        <div>
          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755110911/code_quiz_xbdze6.jpg"
            alt="Code Quiz"
          />

          <div className="video">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/cl9FFxNyA3o?si=ebgC44TKt3Wy83wG"
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
