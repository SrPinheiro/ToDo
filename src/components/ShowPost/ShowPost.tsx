import React from "react";
// styles
import style from "./ShowPost.module.css";
import Modal from "../Modal/Modal";
import { postType } from "../../Context/PostContext"

// hooks
import { GetPostContext } from "../../Hooks/UsePostContext";

const ShowPost = () => {
  const [postEdit, setPostEdit] = React.useState<postType | null>(null);
  const [posts, setPosts] = GetPostContext()
  const deletePost = (title: string) => {
    setPosts(
      (oldPosts) => oldPosts && oldPosts.filter((item) => item.title !== title)
    );
  };

  return (
    <>
      <Modal
        postData={postEdit}
        setPostEdit={setPostEdit}
      />
      <div className={style.container}>
        {posts
          ?.sort((a, b) => b.difficulty - a.difficulty)
          .map((post, index) => (
            <div key={index} className={style.postContainer}>
              <div className={style.postData}>
                <h4>{post.title}</h4>
                <p>Dificuldade: {post.difficulty}</p>
              </div>

              <div className={style.postOptions}>
                <img
                  src={process.env.PUBLIC_URL + "/images/LapisIcon.png"}
                  alt="editar"
                  onClick={() => {
                    setPostEdit(post);
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/TrashIcon.png"}
                  alt="editar"
                  onClick={() => {
                    deletePost(post.title);
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShowPost;
