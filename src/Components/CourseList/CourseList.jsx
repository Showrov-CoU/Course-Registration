import PropTypes from "prop-types";
const CourseList = ({ course }) => {
  return (
    <>
      <li className="list-decimal text-sm">{course.courseName}</li>
    </>
  );
};

CourseList.propTypes = {
  course: PropTypes.object.isRequired,
};
export default CourseList;
