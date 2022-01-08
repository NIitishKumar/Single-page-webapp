import React from "react";

const DetailPage = (props) => {
  console.log(props.location.state);

  const movieData = props.location.state;

  return (
    <>
      <div class="d-flex justify-content-start">
        <nav class="navbar navbar-light bg-light">Movie Detail</nav>
      </div>
      <div class="card">
        <div class="card-horizontal">
          <img
            //   className="movieImage"
            src={props.location.state.imgUrl}
            alt="Image"
            className="rounded float-left movieImage"
            style={{ width: "300px", height: "500px" }}
          />
          <div class="card-body">
            <h4 class="card-title">
              {" "}
              <strong>Movie Name</strong> : {movieData.title}
            </h4>
            <p class="card-text">
              <strong>Description </strong> : {movieData.description}
            </p>
            <p class="card-text">
              <strong>Release Date</strong> : {movieData.releaseDate}
            </p>
            <p class="card-text">
              <strong>Rating</strong> : {movieData.rating}
            </p>
          </div>
        </div>
      </div>
      <div class="card" style={{ width: "18rem;" }}></div>
    </>
  );
};

export default DetailPage;
