import { Link } from "react-router-dom";

import Home from "./Home";
import Components from "./Components"

const PageList = [
  <Link to="/" element={<Home />}>Home</Link>,
  <Link to="/components" element={<Components />}>Components</Link>
]
export default PageList;