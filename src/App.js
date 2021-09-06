import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./components/SearchPage";

function App() {
  const arr = [
    {
      title: "the invisible guest",
      description: "introduced in 2004",
      posterURL:
        "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
      rating: "4.5",
    },
    {
      title: "red market",
      description: "introduced in 2001",
      posterURL:
        "https://resizing.flixster.com/bsvgMNB31TzJ6P7fylKwMoCTjCg=/206x305/v2/https://resizing.flixster.com/vIHHmlBq-Z6DjJpGmMkh-3J63Mw=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E4Y2U0NTdjLWNlNzAtNGE0Zi05MTE1LTRjYWI2ZjRiNjY4Mi53ZWJw",
      rating: "4",
    },
    {
      title: "snoop 4",
      description: "introduced in 1998",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EzSFzmPVo5LrcgKyriSQ2hfQLyMdUjq8hQ&usqp=CAU",
      rating: "3",
    },
    ,
    {
      title: "snoop 5",
      description: "introduced in 1998",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EzSFzmPVo5LrcgKyriSQ2hfQLyMdUjq8hQ&usqp=CAU",
      rating: "3",
    },
    ,
    {
      title: "snoop 6",
      description: "introduced in 1998",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EzSFzmPVo5LrcgKyriSQ2hfQLyMdUjq8hQ&usqp=CAU",
      rating: "3",
    },
    ,
    {
      title: "snoop 7",
      description: "introduced in 1998",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EzSFzmPVo5LrcgKyriSQ2hfQLyMdUjq8hQ&usqp=CAU",
      rating: "3",
    },
    {
      title: "hall of fame",
      description: "introduced in 2021",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfXOc5m5appbFE16tELNL17oBRvrhgoa6SA&usqp=CAU",
      rating: "4.5",
    },
  ];
  const [Movie, setMovie] = useState(arr);

  const handelClick = (input) => {
    console.log(input);
    setMovie(Movie.filter((item) => item.title.includes(input)));
    if (input === "") {
      setMovie(arr);
    }
  };
  return (
    <div className="App">
      <SearchPage fnHandelClick={handelClick} />
      <MovieList movies={Movie} />
      {/* <Filter movie={Movie} /> */}
      <h2>test</h2>
    </div>
  );
}

export default App;
