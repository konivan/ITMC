export default function WorkComponent({image, title}) {
    return (
      <>
        <img src={image} alt="product img" />
        <h4>{title}</h4>
        <img src="./img/work/IT.svg" alt="icons" />
      </>
    );
}