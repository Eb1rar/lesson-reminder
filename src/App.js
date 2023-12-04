import LessonCard from "./components/LessonCard/LessonCard";
import "./index.css";
import { data } from "./helper/data";

function App() {
  return (
    <div>
      <LessonCard data={data} />
    </div>
  );
}

export default App;
