import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

export default function Bookmark({ selectCourses }) {
  return (
    <div className="h-fit w-80 md:w-1/4 mx-auto bg-[#FFF] rounded-lg px-4">
      <h1 className="py-4 font-bold text-[#2F80ED]">
        Credit Hour Remaining _ hr
      </h1>
      <hr />
      <div className="py-4">
        <h1 className="font-bold text-[18px]">
          Course Name : {selectCourses.length}
        </h1>
        <ol className="ps-4 pt-2">
          {selectCourses.map((course) => (
            <CourseList key={course.id} course={course}></CourseList>
          ))}
        </ol>
      </div>
      <hr />
      <h1 className="py-4 text-sm font-semibold">Total Credit Hour : _</h1>
      <hr />
      <h1 className="py-4 text-sm font-semibold">Total Price : __ USD</h1>
    </div>
  );
}

Bookmark.propTypes = {
  selectCourses: PropTypes.array,
};
