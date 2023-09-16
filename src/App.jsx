import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Bookmark from "./Components/Bookmark/Bookmark";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const handleSelectCourses = (course) => {
    let newCourse;
    if (!selectCourses.includes(course)) {
      newCourse = [...selectCourses, course];
    } else {
      toast("Already Selected");
      newCourse = [...selectCourses];
    }
    setSelectCourses(newCourse);
  };

  return (
    <>
      <Header></Header>
      <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 pb-6">
        <Courses handleSelectCourses={handleSelectCourses}></Courses>
        <Bookmark selectCourses={selectCourses}></Bookmark>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
