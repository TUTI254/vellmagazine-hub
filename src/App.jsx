import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Profile from "./components/Profile";
import AccountSettings from "./components/AccountSettings";
import ChangePassword from "./components/ChangePassword";
import ViewArticles from "./components/ViewArticles";
import CreateArticle from "./components/CreateArticle";
import AuthService from "./services/auth.service";
const isLoggedIn = () => {
  const user = AuthService.isLoggedIn();
  return user ? true : false;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn() ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/registration"
          element={isLoggedIn() ? <Navigate to="/" /> : <Registration />}
        />
        <Route
          path="/"
          element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/main"
          element={isLoggedIn() ? <Main /> : <Navigate to="/login" />}
        />
        <Route
          path="/view_profile"
          element={isLoggedIn() ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/account_settings"
          element={
            isLoggedIn() ? <AccountSettings /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/change_password"
          element={isLoggedIn() ? <ChangePassword /> : <Navigate to="/login" />}
        />
        <Route
          path="/view_articles"
          element={isLoggedIn() ? <ViewArticles /> : <Navigate to="/login" />}
        />
        <Route
          path="/create_article"
          element={isLoggedIn() ? <CreateArticle /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
