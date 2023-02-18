import React, { useContext, useState } from "react";
import { movieContext } from "../Context/Context";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movie.css";
import noImg from "./no-image.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MovieSummery = () => {
    const { value } = useContext(movieContext);
    const [showForm, toggleShowForm] = useState(false);
    const show = value.show;

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const notify = () => {
        toast("Movie booked", { type: "success" });
        navigate("/");
    };

    return value.length !== 0 ? (
        <Container className="">
            <Row className="">
                <button
                    className=" btn btn-secondary rounded-end w-25 mt-3 ms-4 py-1"
                    type="submit"
                    onClick={goBack}
                >
                    <FaArrowAltCircleLeft className="icon" /> Back
                </button>
            </Row>
            <Row className="mt-4">
                <Col lg="6" md="6">
                    <span className="mb-0">
                        <img
                            height="90%"
                            width="85%"
                            src={
                                show.image?.original
                                    ? show.image?.original
                                    : noImg
                            }
                            alt={show.name}
                        />
                    </span>
                </Col>
                <Col lg="6" md="6" className="text-center">
                    <span className="fs-1 fw-bold">
                        {show.name ? show.name : "none"}
                    </span>

                    <p
                        className="text-start mt-3"
                        dangerouslySetInnerHTML={{ __html: show.summary }}
                    ></p>
                </Col>
            </Row>
            <Row>
                <p className="mb-0 mt-3 text-dark text-uppercase fw-bold border-bottom fs-4">
                    Details
                </p>
                <Col lg="6" md="6" sm="6">
                    <span className="mt-3 mb-1 parameter-row-2 ">
                        <span className="parameter-label">Language: </span>
                        <span className="parameter-value">
                            {show.language ? show.language : "none"}
                        </span>
                    </span>
                    <span className="mb-1 parameter-row-2">
                        <span className="parameter-label">Status: </span>
                        <span className="parameter-value">
                            {show.status ? show.status : "none"}
                        </span>
                    </span>
                    <span className="mb-1 parameter-row-2">
                        <span className="parameter-label ">Rating: </span>
                        <span className="parameter-value">
                            {show.rating?.average
                                ? show.rating?.average
                                : "none"}
                        </span>
                    </span>
                    <span className="mb-1 parameter-row-2">
                        <span className="parameter-label ">Genres: </span>
                        <span className="parameter-value">
                            {show.genres[0] ? show.genres[0] : "none"}
                            {show.genres[1] ? ", " + show.genres[1] : ""}
                            {show.genres[2] ? ", " + show.genres[2] : ""}
                        </span>
                    </span>

                    <span className="mb-1 parameter-row-2">
                        <span className="parameter-label">Schedule: </span>
                        <span className="parameter-value">
                            {show.schedule != null
                                ? show.schedule.days[0]?.length === 0
                                    ? "none"
                                    : show.schedule.days[0] + ", "
                                : "none"}
                            {show.schedule.days[1]
                                ? show.schedule.days[1]
                                : "none"}
                        </span>
                    </span>
                </Col>
                <Col lg="6" md="6" sm="6">
                    <span className="mt-3 mb-1 parameter-row-2">
                        <span className="parameter-label">Type: </span>
                        <span className="parameter-value">
                            {show.type ? show.type : "none"}
                        </span>
                    </span>
                    <span className=" mb-1 parameter-row-2">
                        <span className="parameter-label">premiered: </span>
                        <span className="parameter-value">
                            {show.premiered ? show.premiered : "none"}
                        </span>
                    </span>

                    {show.ended != null && (
                        <span className="mb-1 parameter-row-2">
                            <span className="parameter-label">Ended: </span>
                            <span className="parameter-value">
                                {show.ended ? show.ended : "hell"}
                            </span>
                        </span>
                    )}
                    {(show.network != null || show.webChannel != null) && (
                        <span className=" mb-1 parameter-row-2">
                            <span className="parameter-label">Network: </span>
                            <span className="parameter-value">
                                {show.network != null
                                    ? show.network?.name
                                    : show.webChannel?.name}
                            </span>
                        </span>
                    )}
                    <span className="mb-1 parameter-row-2">
                        <span className="parameter-label">Runtime: </span>
                        <span className="parameter-value">
                            {show.runtime ? show.runtime + " min" : "none"}
                        </span>
                    </span>
                </Col>
            </Row>
            <div className="pb-4">
                <Row className="bg-danger rounded rounded-3 pt-3 fs-2 pb-3 mt-4 pb-1">
                    <Col lg="6" md="6">
                        <label className=" mt-1 text-uppercase fw-bold my-auto label-bttn">
                            Book your ticket here
                        </label>
                    </Col>
                    <Col lg="6" md="6">
                        <Button
                            type="button"
                            onClick={() => toggleShowForm(!showForm)}
                            className="btn btn-outline-danger fw-bold text-uppercase bg-info rounded-3 w-75 fs-3 bttn"
                        >
                            Book Ticket
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="pb-1">
                {showForm && (
                    <Form className="border border-3 mb-3">
                        <FormGroup row className="mt-3">
                            <Label
                                for="moviename"
                                className="text-dark fw-bold fs-5"
                                sm={3}
                            >
                                Movie Name:
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="value"
                                    id="moviename"
                                    placeholder="movie name"
                                    value={show.name}
                                    readOnly
                                >
                                    movie
                                </Input>
                            </Col>
                        </FormGroup>{" "}
                        <FormGroup row>
                            <Label
                                for="Date"
                                className="text-dark fw-bold fs-5"
                                sm={3}
                            >
                                Date
                            </Label>
                            <Col sm={3}>
                                <Input
                                    type="date"
                                    name="date"
                                    id="Date"
                                    placeholder="date"
                                />
                            </Col>{" "}
                            <Label
                                for="seats"
                                className="text-dark fw-bold fs-5"
                                sm={2}
                            >
                                No. of seats:
                            </Label>
                            <Col sm={3}>
                                <Input
                                    minLength={1}
                                    type="number"
                                    name="Seats"
                                    id="seats"
                                    placeholder="seats"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mt-3">
                            <Label
                                for="time"
                                className="text-dark fw-bold fs-5"
                                sm={3}
                            >
                                Time:
                            </Label>
                            <Col sm={3}>
                                <Input
                                    type="select"
                                    id="time"
                                    placeholder="time"
                                >
                                    <option disabled>Default</option>
                                    <option>09:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>03:00 PM</option>
                                    <option>06:00 PM</option>
                                    <option disabled>09:00 PM</option>
                                </Input>
                            </Col>
                            <Label
                                for="moviename"
                                className="text-dark fw-bold fs-5"
                                sm={2}
                            >
                                Language:
                            </Label>
                            <Col sm={3}>
                                <Input
                                    type="text"
                                    id="language"
                                    placeholder="language"
                                    value={show.language}
                                    readOnly
                                ></Input>
                            </Col>
                        </FormGroup>
                        <Button
                            className="btn btn-lg bg-success mb-3"
                            onClick={notify}
                        >
                            Confirm and Book
                        </Button>
                    </Form>
                )}
            </div>
        </Container>
    ) : (
        navigate("/home", { replace: true })
    );
};

export default MovieSummery;
