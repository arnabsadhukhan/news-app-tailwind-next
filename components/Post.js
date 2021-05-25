import React from "react";
import Image from "next/image";

function Post(props) {
  return (
    <div className=" p-4 w-80 shadow-lg flex flex-col justify-around">
      <img
        loading="lazy"
        src={
          props.urlToImage
            ? props.urlToImage
            : "https://librarianresources.taylorandfrancis.com/wp-content/uploads/2018/02/Abstract-blue-background.jpg"
        }
        className="rounded-xl m-2"
        alt="image not found"
      />

      <p className="post_title">{props.title}</p>

      <p className="publish_at">Published At {props.publishedAt}</p>
      <p className="publish_author">by {props.author}</p>
      <a className="btn w-full" href={props.url} target="_blank">
        Read
      </a>
    </div>
  );
}

export default Post;
