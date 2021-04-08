import React from "react";
import Loader from "../Loader";

const ShowInfo = (props) => {
    const show = props;
    console.log(props);
  return (
    <div>
      {show === null && <Loader />}
      {show !== null && (
        <div>
          <p>{show.name}</p>
          <p>Premiered: {show.premiered}</p>
          <p>Rating: {show.rating.average}</p>
          <p>
            <img alt="Show" src={show.image.medium} />
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowInfo;
