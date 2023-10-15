import {  Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import { Fragment } from "react";
import DetailPage from "./pages/DetailPage";
import AnswerPage from "./pages/AnswerPage";

const App = () => {
  return (
    <Fragment>
      <Main />
      <Routes>
         <Route path="/"  element={<HomePage />} />
         <Route  path='/detail/:id' element={<DetailPage />}/>
          <Route  path="/answer/:id" element={<AnswerPage />}/>
      </Routes>
    </Fragment>
  );
};

export default App;
