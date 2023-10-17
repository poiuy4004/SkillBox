
import { useState } from "react";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar"
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  const [open, setOpen] = useState({
    sidebar: false,
    vanillaList: false,
    libraryList: false,
  })
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Main open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
}

export default App;
