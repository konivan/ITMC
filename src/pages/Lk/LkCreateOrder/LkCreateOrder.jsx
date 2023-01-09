import React from "react";
import style from "./LkCreateOrder.module.scss";

export const LkCreateOrder = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.row}>
          <span>Создание нового проекта</span>
          <button>Отменить</button>
          <button>Заказать</button>
        </div>
        <div className={style.row}>
          <span>Логотип вашего проекта</span>
          <div>
            <div className={style.column}>
              <div>
                <img src="img/Lk/photoIcon.svg" alt="Uploadphoto" />
                <p>Нет фотографии</p>
              </div>
            </div>
            <div className={style.column}>
              <button>Загрузить фото</button>
              <p>Размером от 256px на 256px в формате .jpg или .png </p>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <span>Название</span>
          <input placeholder="Название вашего проекта" />
        </div>
        <div className={style.row}>
          <span>Желаемый бюджет</span>
          <input placeholder="Ваш желаемый бюджет" />
          <input list="marks" type="range" min="0" max="100" step="25" />
          <datalist id="marks" className={style.datalist}>
            <option value="0" label="0" />
            <option value="25" label="25к" />
            <option value="50" label="50к" />
            <option value="75" label="75к" />
            <option value="100" label="100к" />
          </datalist>
        </div>
        <div className={style.row}>
          <span>Ваша схема работы</span>
          <div className={style.item}>
            <div>
              <img src="img/Lk/photoIcon.svg" alt="Uploadphoto"/>
              <p><span>Загрузите фотографии</span>, или просто перетяните их в это поле</p>
            </div>
          </div>
          <p>
            Размером от 256px на 256px в формате .jpg или .png<br/> Максимум 5
            фотографий
          </p>
        </div>
        <div className={style.row}>
          <span>Что именно вам нужно</span>
          <input placeholder="Нет выбранных категорий"/>
          <label>Категория</label>
          <select>
            <option value="">Веб сайт</option>
            <option value="1">Разработка приложения</option>
            <option value="0">Крипто разработка</option>
            <option value="2">Разработка дизайна</option>
            <option value="3">Аудит системы и кода</option>
            <option value="4">Маркетинг</option>
          </select>
          <div className={style.items}>
            <div>Верстка</div>
            <div>Бекенд</div>
            <div>1С</div>
          </div>
          <div className={style.items}>
            <div>Битрикс</div>
            <div>Админ панель</div>
            <div>Написание политики</div>
          </div>
          <div className={style.items}>
            <div>Подключение кассы</div>
            <div>Интеграция с WEB 3.0</div>
            <div>Создание UI логики</div>
          </div>
        </div>
        <div className={style.row}>
          <span>Контакты</span>
          <input placeholder="Номер телефона" type="tel"/>
          <input placeholder="Email" type="email"/>
          <input placeholder="Домен, если есть"/>
          <input placeholder="Telegram"/>
        </div>
        <div className={style.row}>
          <span>Восколько вы свободны для конференций</span>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Понедельник</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Вторник</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Среда</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Четверг</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Пятница</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Суббота</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
          <div className={style.item}>
            <label className={style.switch}>
              <input type="checkbox"/>
              <span className={style.slider}></span>
            </label>
            <label>Воскресенье</label>
            <input className={style.timeInput} placeholder="00:00" />
            —
            <input className={style.timeInput} placeholder="00:00"/>
            <input type="checkbox" className={style.lastCheckBox}/>
            <label>Круглосуточно</label>
          </div>
        </div>
        <div className={style.row}>
          <span>Описание</span>
          <textarea placeholder="Полное описание"/>
          <p>Максимальное количество символов: 240</p>
        </div>
        <div className={style.row}>
          <button>Отменить</button>
          <button>Отправить</button>
        </div>
      </div>
    </section>
  );
};