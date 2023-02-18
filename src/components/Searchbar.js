import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { movieContext } from "../Context/Context";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const { query, setQuery } = useContext(movieContext);
    const { setMovie } = useContext(movieContext);
    const navigate = useNavigate();

    const getMovie = async () => {
        let url = `https://api.tvmaze.com/search/shows?q=${query}`;
        try {
            const { data } = await axios.get(url);
            setMovie(data);
        } catch (error) {
            console.log("error");
            toast("Something went wrong", { type: "error" });
        }
    };
    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            getMovie();
            navigate("/home", { replace: true });
        }
    };

    const handleSearch = () => {
        getMovie();
        navigate("/home", { replace: true });
    };

    return (
        <Container>
            <Row className="mt-0 pt-2 mb-2 mx-5  input-icon">
                <Col className="mt-3 input-group">
                    <input
                        placeholder="Enter movie name here"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        onKeyDown={onKeyDownHandler}
                        aria-label="Search"
                        className="form-control border-end-0 text-dark border border-3 border-primary"
                    />
                    <button
                        className=" btn btn-primary rounded-end w-25"
                        type="submit"
                        onClick={handleSearch}
                        value={query}
                    >
                        <FaSearch className="icon" />
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default Searchbar;
