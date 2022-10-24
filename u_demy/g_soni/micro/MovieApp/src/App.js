import React, { Suspense, useState } from "react";
import "./App.scss";
import { Switch, Route, Link, useHistory, useLocation, } from "react-router-dom";
// import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
// import Homepage from "./components/Homepage/Homepage.jsx";
// import BookPage from "./components/BookPage/BookPage.jsx";

const Homepage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailpage/DetailsPage"));
const BookPage = React.lazy(() => import("bookPage/BookPage"));


const App = () => {

  //
  const history = useHistory();
  const location = useLocation();

  //state
  const [ bookingData, setBookingData ] = useState(null);

  // click n func
  const movieClicked = (item) => {
    console.log(item, " item from parent");
    history.push(`details/${item.id}`)
    // history.push("details")
  }

  return (
    <div>
      <button onClick={_ => console.log(bookingData, " bookingData")}>bookingData</button>
      {/* <Link to={"/details"}>DETAILS</Link> */}
      <Switch>
        <Suspense fallback={null}>
          <Route exact path="/details/:id">
            <DetailsPage
              setBookingData={ setBookingData }
              routing={
                {
                  history,
                  location
                }
              }
            />
          </Route>
          <Route exact path="/book">
            <BookPage 
              bookingData={ bookingData }
              data={ bookingData }
            />
          </Route>
          <Route exact path="/">
            <Homepage
              movieClicked={movieClicked}
              setBookingData={ setBookingData }
              routing={
                {
                  history,
                  location
                }
              }
            />
          </Route>
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
