import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Chat, Join, PageNotFound } from "./components";

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>

);

export default App;