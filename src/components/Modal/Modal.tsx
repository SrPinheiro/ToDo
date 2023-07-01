import { useEffect, useRef, useState, useContext } from "react";
import styles from "./Modal.module.css";
import { postType } from "../Home/Home";
import { PostContext, contextType } from "../../App";

type Props = {
  postData?: { title: string; difficulty: number } | null;
  setPostEdit: React.Dispatch<
    React.SetStateAction<{ title: string; difficulty: number } | null>
  >;
};

const Modal = ({ postData, setPostEdit }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [postEditado, setPostEditado] = useState<postType>({title: "", difficulty: 0})
  const [posts, setPosts] = useContext<contextType>(PostContext)

  const activeModal = () => {
    modalRef.current?.classList.remove(styles.disactive);
    document.querySelector("body")?.style.setProperty("overflow", "hidden");
  };

  const desactiveModal = () => {
    modalRef.current?.classList.add(styles.disactive);
    document.querySelector("body")?.style.setProperty("overflow", "auto");
    setPostEdit(null);
  };
  useEffect(() => {
    if (postData) {
      activeModal();
      setPostEditado({title: postData.title, difficulty: postData.difficulty})
      return;
    }

  }, [postData]);

  const changlePostValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostEditado({...postEditado, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(posts?.filter(item => item !== postData).some(post => post.title === postEditado.title)) {
      alert("Já existe uma tarefa com esse nome")
      return;
    }
    
    setPosts((oldPosts) => {
      const newPosts = oldPosts.filter((post) => post.title !== postData?.title);
      return [...newPosts, postEditado];
    });

    desactiveModal();
  }
  return (
    <div id="modal" className={styles.disactive} ref={modalRef}>
      <div className={styles.fade} onClick={desactiveModal}></div>
      <div className={styles.modal}>
        <h3>Editar</h3>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <label>
            <p>Titulo:</p>
            <input
              type="text"
              name="title"
              placeholder="Titulo da tarefa"
              value={postEditado ? postEditado.title : ""}
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
              value={postEditado ? postEditado.difficulty : 0}
              onChange={changlePostValues}
            />
          </label>

          <button>Editar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
