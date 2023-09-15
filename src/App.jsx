import "./App.css";
import Bookmark from "./Components/Bookmark/Bookmark";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4">
        <Courses></Courses>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
