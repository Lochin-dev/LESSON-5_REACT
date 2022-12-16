import React, { useEffect, useState } from "react";
import "./style.scss";
const index = () => {
  const [comments, setComments] = useState("");
  const [load, setLoad] = useState(false);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
        setTimeout(() => {
          setLoad(true);
        }, 2000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!load) {
    return (
      <div className="container">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="about">
          <h1>About</h1>
          <div className="card w-75 mx-auto overflow-scroll">
            <ul className="list-group">
              {comments.length > 0 &&
                comments.map((el, i) => {
                  return (
                    <li key={el.id} className="list-group-item">
                      {el.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
<h1>About</h1>;
