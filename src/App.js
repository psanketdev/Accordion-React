import "./App.css";
import { Route, Routes } from "react-router-dom";

import Accordion from "./components/accordion/Accordion";
import Nav from "./components/navigation/Nav";
import Todo from "./components/todo/Todo";
import Gallery from "./components/filter/Gallery";
import DarkLightTheme from './components/darLightTheme/DarkLightTheme';
import CountryCitySelection from "./components/fetchCountry/CountryCitySelection";
import Counter from "./components/counter/Counter";
import ProgressBar from "./components/progressbar/ProgressBar";



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
          <Route exact path="dark-light-theme" element={<DarkLightTheme />}></Route>
          <Route exact path="country-city" element={<CountryCitySelection />}></Route>
          <Route exact path="counter-hooks" element={<Counter />}></Route>
          <Route exact path="progress-bar" element={<ProgressBar />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
