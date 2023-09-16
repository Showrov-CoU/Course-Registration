import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import Course from "../Course/Course";

const Courses = (props) => {
  const { handleSelectCourses } = props;
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:w-3/4 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelectCourses={handleSelectCourses}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelectCourses: PropTypes.func,
};

export default Courses;
