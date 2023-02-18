import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movie.css";
import axios from "axios";
import { toast } from "react-toastify";
import { movieContext } from "../Context/Context";

import noImg from "./no-image.png";
import { Link } from "react-router-dom";
const MovieList = () => {
    const { setValue } = useContext(movieContext);
    const { movie } = useContext(movieContext);

    return (
        <Container className="">
            <Row className="mt-4">
                {movie?.map((item, index) => {
                    const show = item.show;
                    return (
                        <Col
                            key={index}
                            lg={3}
                            md={4}
                            sm={6}
                            className="mb-3 px-2 "
                        >
                            <Link
                                to={"/description"}
                                className="text-decoration-none text-dark"
                            >
                                <div
                                    className="border pt-3 sm-screen-display bg-secondary"
                                    onClick={() => setValue(item)}
                                    /* imp: */
                                >
                                    <span className="mb-0">
                                        <img
                                            src={
                                                show.image?.medium
                                                    ? show.image?.medium
                                                    : noImg
                                            }
                                            alt={show.name}
                                        />
                                    </span>
                                    <div className="text-lg-start ms-2 mb-2 mt-2 text-sm-center text-display">
                                        <span className="mb-0 parameter-row border-bottom">
                                            <span className="parameter-label">
                                                Name:{" "}
                                            </span>
                                            <span className="parameter-value">
                                                {show.name ? show.name : "none"}
                                            </span>
                                        </span>
                                        <span className="mb-0 parameter-row border-bottom">
                                            <span className="parameter-label">
                                                Language:{" "}
                                            </span>
                                            <span className="parameter-value">
                                                {show.language
                                                    ? show.language
                                                    : "none"}
                                            </span>
                                        </span>
                                        <span className="mb-0 parameter-row border-bottom">
                                            <span className="parameter-label">
                                                Status:{" "}
                                            </span>
                                            <span className="parameter-value">
                                                {show.status
                                                    ? show.status
                                                    : "none"}
                                            </span>
                                        </span>
                                        <span className="mb-0 parameter-row border-bottom">
                                            <span className="parameter-label">
                                                premiered:{" "}
                                            </span>
                                            <span className="parameter-value">
                                                {show.premiered
                                                    ? show.premiered
                                                    : "none"}
                                            </span>
                                        </span>
                                        <span className=" parameter-row border-bottom">
                                            <span className="parameter-label ">
                                                Rating:{" "}
                                            </span>
                                            <span className="parameter-value">
                                                {show.rating?.average
                                                    ? show.rating?.average
                                                    : "none"}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default MovieList;
