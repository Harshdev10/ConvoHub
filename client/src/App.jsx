import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import LayoutLoader from "./components/layout/Loader";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/Chat/:chatID" element={<Chat />} />
          <Route path="/Group" element={<Group />} />
        </Route>

        <Route path="/Login" element={
          <ProtectRoute user={!user} redirect="/">
          <Login />
          </ProtectRoute>
          } />

          <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
