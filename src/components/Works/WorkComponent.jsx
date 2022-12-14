import style from "./WorkComponent.module.scss";

export default function WorkComponent({image, title}) {

    return (
      <div className={style.column}>
        <img src={image} alt="product img" />
        <h4>{title}</h4>
        <img src="./img/work/IT.svg" alt="icons" />
      </div>
    );
}