import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import PropTypes from "prop-types";

const Course = (props) => {
  const { course } = props;
  return (
    <div className="card bg-[#FFF] rounded-lg">
      <figure className="p-3">
        <img src={course.image} alt="Shoes" />
      </figure>
      <div className="card-body p-3 pt-0">
        <h2 className="text-base font-bold">{course.courseName}</h2>
        <p className="text-sm font-light">{course.details}</p>
        <div className="flex justify-between text-sm font-semibold py-1">
          <div className="flex items-center gap-1">
            <BiDollar></BiDollar>
            <span>Price : {course.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsBook></BsBook>
            <span>Credit : {course.credit}</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-sm bg-[#2F80ED] w-full text-[#FFF] capitalize font-semibold hover:bg-[#026bf5]">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Course;
