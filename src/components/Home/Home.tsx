// Hooks
import { useState } from "react";
import { GetPostContext } from "../../Hooks/UsePostContext";

// css
import styles from "./Home.module.css";

// Components
import ShowPost from "../ShowPost/ShowPost";

// types
import { postType } from "../../Context/PostContext";

const Home = () => {
  const [post, setPost] = useState<postType>({
    title: "",
    difficulty: 0,
  });

  const [posts, setPosts] = GetPostContext();

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
    <div className={styles.container}>
      <h2 className={styles.titulo}>O que você ira fazer?</h2>

      <form className={styles.formulario} onSubmit={handleSubmit}>
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

      <h3 className={styles.titulo}>Suas tarefas:</h3>
      {posts.length === 0 && (
        <div className={styles.noPost}>
          <p>Nenhuma tarefa cadastrada</p>
        </div>
      )}

      {posts.length > 0 && <ShowPost />}
    </div>
  );
};

export default Home;
