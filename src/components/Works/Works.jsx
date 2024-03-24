import { ButtonPink } from "../UI/ButtonPink/ButtonPink";
import style from "./Works.module.scss";

export const Works = (props) => {
  const openProduct = (img, title, icon) => {
    props.setProductImg(img);
    props.setProductTitle(title);
    props.setProductIcon(icon);
    props.setShowProduct(true);
  };
  return (
    <section className={style.works} id="works">
      <div className={style.container}>
        <h2>Pools</h2>
        <div className={style.row}>
          <div className={style.column}>
            <h3>First axie NFT staking</h3>
            <img
              src="./img/work/Home.png"
              alt="Home"
              onClick={() =>
                openProduct("./img/work/Home.png", "UI Design", [
                  "./img/work/IT.svg",
                ])
              }
            />
            <div className={style.btnContainer}>
              <ButtonPink>STAKE</ButtonPink>
              <ButtonPink>UNSTAKE</ButtonPink>
            </div>
          </div>
          <div className={style.column}>
            <h3>RON/AXS</h3>
            <img
              src="./img/work/masdGames.png"
              alt="masdGames"
              onClick={() =>
                openProduct(
                  "./img/work/masdGames.png",
                  "Создание и продвижение криптопроекта MASD GAMES",
                  ["./img/work/IT.svg", "./img/work/M.svg", "./img/work/C.svg"]
                )
              }
            />
            <div className={style.btnContainer}>
              <ButtonPink>STAKE</ButtonPink>
              <ButtonPink>UNSTAKE</ButtonPink>
            </div>
          </div>
          <div className={style.column}>
            <h3>RON/WETH</h3>
            <img
              src="./img/work/solana.png"
              alt="solana"
              onClick={() =>
                openProduct(
                  "./img/work/solana.png",
                  "Создание криптовалюты на основа SOLANA",
                  ["./img/work/C.svg"]
                )
              }
            />
            <div className={style.btnContainer}>
              <ButtonPink>STAKE</ButtonPink>
              <ButtonPink>UNSTAKE</ButtonPink>
            </div>
          </div>
          <div className={style.column}>
            <h3>RON/SLP</h3>
            <img
              src="./img/work/thrOne.png"
              alt="thrOne"
              onClick={() =>
                openProduct(
                  "./img/work/thrOne.png",
                  "WEB-разработка проекта: THR ONE",
                  ["./img/work/IT.svg", "./img/work/C.svg"]
                )
              }
            />
            <div className={style.btnContainer}>
              <ButtonPink>STAKE</ButtonPink>
              <ButtonPink>UNSTAKE</ButtonPink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
