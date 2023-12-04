import LessonCard from "./components/LessonCard/LessonCard";
import "./index.css";
import { data } from "./helper/data";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <LessonCard data={data} />
    </div>
  );
}

export default App;
