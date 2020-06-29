import React, { useState } from "react";
import { Route, Switch, useHistory,
  useLocation } from "react-router-dom";
import MyCardWrapper from "./MyCardWrapper";
import CreateCard from "./CreateCard";
import BottomNav from "./BottomNav";
export default App

const App = () => {
  const [cardContent, setCardContent] = useState([
    {
      text:
        "Hello there!!! Put on your brightest smile :D new day, new chances!! Are you ready to rock today?"
    },
    {
      text: "Will you do what it takes to keep that awesome smile on your face?"
    },
    {
      text: "Did you know how proud I am of You?"
    },
    {
      text: "Can you promise yourself to be the best version of yourself today?"
    },
    {
      text:
        "Will you remember that even the strongest storm didn't last forever?"
    }
  ]);

  return (
    <>
      <Switch>
      <AuthButton />
        <Route path="/cards">
          <MyCardWrapper cardContent={cardContent} />
        </Route>
        <Route path="/newCard">
          <CreateCard setCardContent={setCardContent} />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <PrivateRoute path="/home">
          <HomePage/>
        </PrivateRoute>
      </Switch>
      <BottomNav />
    </>
  );
};

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
function HomePage() {
  return <h3>Public</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}};


