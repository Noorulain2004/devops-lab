import React, { useState } from "react";
import Navbar from "./component/Navbar";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import LandingPage from "./component/LandingPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar />
      {user ? (
        <LandingPage user={user} />
      ) : (
        <>
          <SignIn onLogin={setUser} />
          <SignUp />
        </>
      )}
    </div>
  );
}

export default App;
