import React from "react";

export default function Work() {
  return (
    <div id="work-entry-page">
      <section>
        <div>
          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755111480/PokeGo-mobile_copy_lelrjo.png"
            alt="PokeGo Weather Companion"
          />
          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755111464/Screen_Shot_2021-10-14_at_10.41.51_AM_t5bd3u.png"
            alt="PokeGo Weather Companion"
          />
          <div className="video">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/ekhXjlZhRxU?si=WmYpuQhsIlctOHog"
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
