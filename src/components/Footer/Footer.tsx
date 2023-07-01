import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h4>React + TS ToDo - @ 2023</h4>
      <h4 className={styles.white}>Desenvolvido por <a href="https://github.com/srpinheiro" target="_blank" rel="noreferrer" >Leonardo Pinheiro</a> </h4>
      <p className={styles.white}>2023</p>
    </div>
  );
};

export default Footer;
