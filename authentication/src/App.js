import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const {
    user,
    loginWithPopup,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  console.log("user", user);

  const checkAccessToken = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log("Access Token:", accessToken);
    } catch (error) {
      console.error("Error getting access token:", error);
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <Profile />
          <button onClick={() => logout()}>Log Out</button>
          <button onClick={checkAccessToken}>Check Access Token</button>
        </div>
      ) : (
        <button onClick={() => loginWithPopup()}>Login With Redirect</button>
      )}
    </div>
  );
}

export default App;
