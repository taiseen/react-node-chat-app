import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Chat, Join, PageNotFound } from "./components";

const App = () => (

  <Router>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Router>

);

export default App;