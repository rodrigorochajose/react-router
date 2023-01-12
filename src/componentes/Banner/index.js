import styles from "./banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo</h1>

        <p className={styles.paragrafo}>Ablablabla</p>

        <div className={styles.imagens}>
          <img
            className={styles.circuloColorido}
            src={circuloColorido}
            aria-hidden={true}
          />
        </div>
      </div>
    </div>
  );
}
