import "./App.css";

import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieSummery from "./components/MovieSummery";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { movieContext } from "./Context/Context";
import Searchbar from "./components/Searchbar";
import Header from "./Layout/Header";

function App() {
    const [value, setValue] = useState([]);
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState([]);

    return (
        <div className="App min-vh-100">
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
                <ToastContainer />
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
