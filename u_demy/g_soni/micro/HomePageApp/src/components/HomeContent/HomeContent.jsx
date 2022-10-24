import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
const MovieCard = React.lazy(() => import("components/MovieCard"));
import "./HomeContent.scss";

//context
import RoutingContext from "../../utils/RoutingProvider";

const dummyItem = [{ name: "Dummy Movie" }]

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    const dataUrl = await fetch("http://localhost:5555/movies");
    const getData = await dataUrl.json();
    console.log(getData, " getdddd");
    setMovies(getData);
    // Add the logic to load the movies from server and set to the state
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
    // console.log(item, " itemmmm")
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      const { id, name, imageUrl } = item;
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          {/* <h1>hello</h1> */}

          <MovieCard
            key={id}
            title={name}
            imageUrl={imageUrl}
          />
          {/* <div>Load the cards Here</div> */}
          {/* Load the Movie Card Here */}
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <RoutingContext.Provider value={props.routing}>
        <Suspense fallback={null}>
          <QuickBooking
            setBookingData={ props.setBookingData }
          />
          <div className="movies-container">
            {renderMovieList()}
          </div>

        </Suspense>
      </RoutingContext.Provider>
    </div>
  );
};

export default HomeContent;
