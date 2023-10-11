import './App.css';
import Home from "./Home";
import Header from './Header';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";
import Navbar from './Navbar';
import { React, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51NuEYqSIoGXnGVcS79qurS0AxKe8xHUjOBlkQiIP6SyPac24w19NDSRqMIxlZqaXDLGp9qlwgXkw3gtWMKqUvxmk00x1ZGYMBC");

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //runs once when app component loads
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      console.log("user is:", user);
      if (user) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: user
        })
      }
      else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login"
            element={(
              <>
                <Login />
              </>
            )}>
          </Route>
          <Route path="/checkout"
            element={(
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            )} />
          <Route path="/payment"
            element={(
              <>
                <Header />
                <Elements stripe={promise}> <Payment /></Elements>
                <Footer />
              </>
            )}>
          </Route>
          <Route path="/" element={(
            <>
              <Header />
              <Navbar />
              <Home />
              <Footer />
            </>
          )} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
