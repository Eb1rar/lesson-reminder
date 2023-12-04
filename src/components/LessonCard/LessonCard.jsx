import React from "react";

const LessonCard = ({ data }) => {
  return (
    <div>
      <h1>Lesson Reminder</h1>
      {data.map(({ id, name, hour, image }) => (
        <div key={id}>
          <img src={image} alt="" srcset="" />
          <div>
            <p>Lesson Name: {name}</p>
            <p>Lesson Hour: {hour}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
