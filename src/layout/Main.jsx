
import { Routes,Route } from "react-router-dom"

import Home from "../page/Home";
import Components from "../page/Components";

function Main(){
  return(
    <main>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/components" element={<Components />}>Components</Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </main>
  )
}
export default Main;