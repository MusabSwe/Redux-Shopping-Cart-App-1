import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./components/Auth";
import { authActions } from './store/auth-slice'
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(authActions.login())
  }

  const logout = () => {
    dispatch(authActions.logout())
  }
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
