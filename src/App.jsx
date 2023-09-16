import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Bookmark from "./Components/Bookmark/Bookmark";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [creditHours, setCreditHours] = useState(0);
  let [remainingHours, setRemainingHours] = useState(20);
  const [totalPrice, setPrice] = useState(0);

  useEffect(() => {
    console.log(creditHours);
    console.log(remainingHours);
  }, [selectCourses, creditHours, remainingHours, totalPrice]);

  const handleSelectCourses = (course) => {
    let newCourse = [...selectCourses];

    if (!selectCourses.includes(course)) {
      newCourse = [...selectCourses, course];

      newCourse.forEach((course) => {
        let hour = parseInt(course.credit);
        let price = parseInt(course.price);

        setCreditHours(creditHours + hour);
        setRemainingHours(remainingHours - hour);
        setPrice(totalPrice + price);
      });
    } else {
      toast("Already Selected");
    }
    setSelectCourses(newCourse);
  };

  return (
    <>
      <Header></Header>
      <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 pb-6">
        <Courses handleSelectCourses={handleSelectCourses}></Courses>
        <Bookmark
          selectCourses={selectCourses}
          hour={creditHours}
          remainingHour={remainingHours}
          price={totalPrice}
        ></Bookmark>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
