export default function WorkComponent({image, title, icons}) {
    return (
      <>
        <img src={image} alt="product img" />
        <h4>{title}</h4>
        <img src={icons} alt="icons" />
      </>
    );
}