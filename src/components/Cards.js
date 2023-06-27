import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);
  const getCourses = () => {
    if (category === "All") {
      const allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        //   console.log(courseCategory);
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      // console.log(allCourses);
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-4">
      {!courses ? (
        <div>
          <h1>No Data Found</h1>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
