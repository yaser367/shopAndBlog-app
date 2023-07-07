import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import RequireAuth from "./helpers/auth/RequireAuth";
import NoAuth from "./helpers/auth/NoAuth";

import "./App.css";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          /** protect routes */
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
          </Route>

          /** No auth routes */
          <Route element={<NoAuth />}>
            <Route path="/login" element={<Login />} />
          </Route>

          /** page not found */
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
