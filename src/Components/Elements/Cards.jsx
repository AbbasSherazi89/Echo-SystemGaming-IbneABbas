import { React, useState, useEffect } from "react";
import axios from "axios";
import FormValidation from "./FormValidation";
const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
                <FormValidation/>
            </div>
            <div className="col-md-6">
              {posts.map((post) => {
                return (
                  <div className="card mt-4">
                    <div className="card-body">
                        {post.title}
                        <img className="img-fluid mt-2" src={post.url} alt="photo" />

                        <img className="img-fluid mt-2" src={post.thumbnailUrl} alt="thumbnail" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
