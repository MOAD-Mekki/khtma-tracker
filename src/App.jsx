import Welcome from "./pages/Welcome"
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}/>

      <Route path="/pages" element={<Main />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
