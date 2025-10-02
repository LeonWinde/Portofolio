import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Portofolio" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
