import style from "./Services.module.scss";
import { ButtonPink } from "../UI/ButtonPink/ButtonPink";

export const Services = (props) => {
    return (
      <section className={style.services} id="services">
        <div className={style.container}>
          <h2>Services</h2>
          <div className={style.row}>
            <div className={style.column}>
              <div className={style.item}>
                <p>IT</p>
                <p>Мы предоставляем самые качественные IT услуги на рынке</p>
                <ButtonPink>
                  Заказать
                </ButtonPink>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.item}>
                <p>Marketing</p>
                <p>Наши специалисты, готовы привлечь заказы или аудиторию в вашу компанию</p>
                <ButtonPink>
                  Заказать
                </ButtonPink>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.item}>
                <p>Crypto</p>
                <p>Мы поддерживаем Web 3.0, и верим, что web 3.0 будущее</p>
                <ButtonPink>
                  Заказать
                </ButtonPink>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
