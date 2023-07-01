import React from "react";

import style from "./Home.module.css";
import ShowPost from "../ShowPost/ShowPost";
import { PostContext, contextType } from "../../App";

export type postType = {
  title: string;
  difficulty: number;
};

const Home = () => {
  const [post, setPost] = React.useState<postType>({
    title: "",
    difficulty: 0,
  });

  const [posts, setPosts] = React.useContext<contextType>(PostContext);

  const changlePostValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.title === "") {
      alert("Titulo não pode ser vazio!");
      return;
    }

    if (posts.some((postAR) => postAR.title === post.title)) {
      alert("Tarefa ja cadastrada!");
      return;
    }

    setPosts([...posts, post]);
  };
  return (
    <div className={style.container}>
      <h2 className={style.titulo}>O que você ira fazer?</h2>

      <form className={style.formulario} onSubmit={handleSubmit}>
        <label>
          <p>Titulo:</p>
          <input
            type="text"
            name="title"
            placeholder="Titulo da tarefa"
            value={post.title}
            onChange={changlePostValues}
          />
        </label>

        <label>
          <p>Dificuldade:</p>
          <input
            type="number"
            name="difficulty"
            min={0}
            max={100}
            value={post.difficulty}
            onChange={changlePostValues}
          />
        </label>

        <button>Cadastrar</button>
      </form>

      <h3 className={style.titulo}>Suas tarefas:</h3>
      {posts.length === 0 && (
        <div className={style.noPost}>
          <p>Nenhuma tarefa cadastrada</p>
        </div>
      )}

      {posts.length > 0 && <ShowPost />}
    </div>
  );
};

export default Home;
