export default function WorkComponent({image, title, icons}) {
    return (
      <>
        <img src={image} alt="productImg" />
        <h4>{title}</h4>
        <img src={icons} alt="icons" />
      </>
    );
}