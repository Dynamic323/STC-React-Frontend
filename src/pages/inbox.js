import React from "react";
import Assignment from "../components/ui/Assignment";
import { data } from "./questionList";
import Grid from "../components/ui/grid";
import { Link } from "react-router-dom";
function inbox() {
  return (
    <>
      <Assignment />
      <div className="container ">
        <p className="h5 mt-3 ">notifications</p>
        <div className="row ">
          <div className="col-md-6 card border-none ">
            <i className="py-3">
              Your'e Welcome to sarutech 😃✨......{" "}
              <Link to="/articles"> articles</Link>
            </i>
            <i>
              see some recent
              <Link to="/questions"> questions</Link>
            </i>
            <div className="col-md-6 mt-3 border-none ">
              <p>Got a question ??</p>
              <button className="btn btn-warning mb-3">ask now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default inbox;
