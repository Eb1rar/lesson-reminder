import React from "react";

const LessonCard = ({ data }) => {
  return (
    <div className="container">
      <h2>Lesson Reminder</h2>
      <div className="main">
        {data.map(({ id, name, hour, image }) => (
          <div key={id} className="cards">
            <img src={image} alt="" srcset="" />
            <div>
              <p>
                <span>Lesson Name: </span>
                {name}
              </p>
              <p>
                <span>Lesson Hour: </span>
                {hour}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonCard;
