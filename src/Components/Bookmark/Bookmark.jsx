import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

export default function Bookmark({
  selectCourses,
  hour,
  remainingHour,
  price,
}) {
  return (
    <div className="h-fit w-80 md:w-1/4 mx-auto bg-[#FFF] rounded-lg px-4">
      <h1 className="py-4 font-bold text-[#2F80ED]">
        Credit Hour Remaining {`${remainingHour > 0 ? remainingHour : 0}`} hr
      </h1>
      <hr />
      <div className="py-4">
        <h1 className="font-bold text-[18px]">Course Name</h1>
        <ol className="ps-4 pt-2">
          {selectCourses.map((course) => (
            <CourseList key={course.id} course={course}></CourseList>
          ))}
        </ol>
      </div>
      <hr />
      <h1 className="py-4 text-sm font-semibold">Total Credit Hour : {hour}</h1>
      <hr />
      <h1 className="py-4 text-sm font-semibold">Total Price : {price} USD</h1>
    </div>
  );
}

Bookmark.propTypes = {
  selectCourses: PropTypes.array,
  hour: PropTypes.number,
  remainingHour: PropTypes.number,
  price: PropTypes.number,
};
