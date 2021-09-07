import "./App.css";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SearchPage from "./components/SearchPage";
import Addmovie from "./components/add";

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
  const [Movie, setMovie] = useState();
  useEffect(() => {
    setMovie(arr);
  }, []);
  const handelClick = (input) => {
    console.log(input);
    setMovie(Movie.filter((item) => item.title.includes(input)));
    if (input === "") {
      setMovie(arr);
    }
  };
  const handleAdd = (obj) => {
    console.log(obj);
    arr.push(obj);
    setMovie(arr);
  };
  // const AddMovie = () => {
  //   setMovie(arr.push(name));

  //   // const movi = {
  //   //   title: "horrible weekend",
  //   //   description: "this movie was introduced in 2020",
  //   //   posterURL:
  //   //     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg",
  //   //   rating: "2",
  //   // };
  //   // arr.push(movi);

  //   setMovie(arr);
  //   // console.log(Movie);
  // };

  return (
    <div className="App">
      <SearchPage fnHandelClick={handelClick} />
      <MovieList movies={Movie} />
      {/* <Filter movie={Movie} /> */}
      <Addmovie fnhandleAddMovie={handleAdd} />
    </div>
  );
}

export default App;
