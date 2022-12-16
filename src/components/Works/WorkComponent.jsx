import style from "./WorkComponent.module.scss";

export default function WorkComponent({image, title, icons}) {
    return (
      <div className={style.column}>
        <img src={image} alt="product img"/>
        <h4>{title}</h4>
        {icons.map((item, index) => (
           <img src={item} key={`${item} ${index}`} alt="icons" />
        ))}
      </div>
    );
}