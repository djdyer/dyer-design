import React from "react";

export default function Work() {
  return (
    <div id="work-entry-page">
      <section>
        <div>
          <img
            className="deck"
            src="https://res.cloudinary.com/dqun9lxh3/image/upload/v1755110600/9BE0CFFF-BF6C-4C8C-9420-388381653748_jqfriz.jpg"
            alt="Tech Bros Blog"
          />

          <div className="video">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/aanCqTP4oxg?si=P6ilY7MC8QVpzBtZ"
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
