import React from "react";
// styles
import style from "./ShowPost.module.css";

type Props = {
  posts: { title: string; difficulty: number }[] | null;
  setPosts: React.Dispatch<
    React.SetStateAction<{ title: string; difficulty: number }[]>
  >;
};

const ShowPost = ({ posts, setPosts }: Props) => {
  const deletePost = (title: string) => {
    setPosts(
      (oldPosts) => oldPosts && oldPosts.filter((item) => item.title !== title)
    );
  };

  return (
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
  );
};

export default ShowPost;
