import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Bookmark from "./Components/Bookmark/Bookmark";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [creditHours, setCreditHours] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [totalPrice, setPrice] = useState(0);

  const handleSelectCourses = (course) => {
    const isExist = selectCourses.find((item) => item.id === course.id);
    let totalCredit = parseInt(course.credit),
      totalRemainingCredit = 20,
      price = parseInt(course.price);

    if (isExist) {
      return toast("Already Selected");
    } else {
      selectCourses.forEach((course) => {
        totalCredit = totalCredit + parseInt(course.credit);
        price = price + parseInt(course.price);
      });
      totalRemainingCredit -= totalCredit;
      if (totalCredit > 20) {
        return toast("Your credit hour is over 20");
      }
      setCreditHours(totalCredit);
      setRemainingHours(totalRemainingCredit);
      setPrice(price);
      setSelectCourses([...selectCourses, course]);
    }
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
