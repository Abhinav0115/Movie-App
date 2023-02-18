import "./App.css";

import { useState } from "react";

//react-router-dom
import { Route, Routes } from "react-router-dom";

//context
import { movieContext } from "./Context/Context";

//components
import Header from "./Layout/Header";
import Searchbar from "./components/Searchbar";
import MovieList from "./components/MovieList";
import MovieSummery from "./components/MovieSummery";

//react-toastify
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [value, setValue] = useState([]);
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState([]);

    return (
        <div className="App min-vh-100">
            <ToastContainer transition={Zoom} newestOnTop theme="colored" />
            <movieContext.Provider
                value={{
                    value,
                    setValue,
                    query,
                    setQuery,
                    movie,
                    setMovie,
                }}
            >
                <Header />
                <Searchbar />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/home" element={<MovieList />} />
                    <Route path="/description" element={<MovieSummery />} />
                </Routes>
            </movieContext.Provider>
        </div>
    );
}

export default App;
