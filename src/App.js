import "./App.css";
import { Route, Routes } from "react-router-dom";

import Accordion from "./components/accordion/Accordion";
import Nav from "./components/navigation/Nav";
import Todo from "./components/todo/Todo";
import Gallery from "./components/filter/Gallery";

function App() {
  return (
    <>
      <aside>
        <Nav />
      </aside>
      <main>
        <Routes>
          <Route exact path="/" element={<Accordion />}></Route>
          <Route exact path="todolist" element={<Todo />}></Route>
          <Route exact path="filter" element={<Gallery />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
