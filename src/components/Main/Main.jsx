import style from "./Main.module.scss";
import { Row } from "../Row/Row";
import { Services } from "../Services/Services";
import { Works } from "../Works/Works";
import { Partnery } from "../Partnery/Partnery";

export const Main = (props) => {
  return (
    <main className={style.main}>
      <div className={style.wrapper} id="header">
        <Row />
        <Services/>
        <Works setProductTitle={props.setProductTitle} setProductIcon={props.setProductIcon} setShowProduct={props.setShowProduct} setProductImg={props.setProductImg}/>
        <Partnery/>
      </div>
    </main>
  );
};