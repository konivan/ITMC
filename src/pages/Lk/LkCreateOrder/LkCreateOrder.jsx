import React, { useState } from "react";
import { attendance } from "./constants";

import style from "./LkCreateOrder.module.scss";

export const LkCreateOrder = () => {
  const [budgetValue, setBudgetValue] = useState();
  const [service, setServiceValue] = useState();
  let services = [];
  const changeHandler = () => {
    if (service === 'Веб сайт') {
      services = attendance[0];
    } else if (service === 'Разработка приложения') {
      services = attendance[1];
    } else if (service === 'Крипто разработка') {
      services = attendance[2];
    } else if (service === 'Разработка дизайна') {
      services = attendance[3];
    } else if (service === 'Аудит системы и кода') {
      services = attendance[4];
    } else if (service === 'Маркетинг') {
      services = attendance[5];
    } else return services = attendance[0];
  }
  changeHandler();
  
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.row}>
          <span className={style.firstSpan}>Создание нового проекта</span>
          <button>Отменить</button>
          <button>Заказать</button>
          <div>
            <span className={style.line}/>
            <span className={style.line}/>
            <span className={style.line}/>
            <span className={style.line}/>
            <span className={style.line}/>
            <span className={style.line}/>
            <span className={style.line}/>
            <span className={style.line}/>
          </div>
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
          <label>Ваш желаемый бюджет</label>
          <input placeholder="0" type="number" value={budgetValue} onChange={(e) => {
                  setBudgetValue(e.target.value);
                }}/>
          <input list="marks" type="range" min="0" max="100000" step="25000" onChange={(e) => {
                  setBudgetValue(e.target.value);
                }}/>
          <datalist id="marks" className={style.datalist}>
            <option label="0" />
            <option label="25к" />
            <option label="50к" />
            <option label="75к" />
            <option label="100к" />
          </datalist>
        </div>
        <div className={style.row}>
          <span>Ваша схема работы</span>
          <div className={style.item}>
            <form>
              <img src="img/Lk/photoIcon.svg" alt="Uploadphoto"/>
              <p><span>Загрузите фотографии</span>, или просто перетяните их в это поле</p>
            </form>
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
          <select onChange={(e) => {
                  setServiceValue(e.target.value);
                }}>
            <option>Веб сайт</option>
            <option>Разработка приложения</option>
            <option>Крипто разработка</option>
            <option>Разработка дизайна</option>
            <option>Аудит системы и кода</option>
            <option>Маркетинг</option>
          </select>
          <div className={style.items}>
            <div>{services[0]}</div>
            <div>{services[1]}</div>
            <div>{services[2]}</div>
          </div>
          <div className={style.items}>
            <div>{services[3]}</div>
            <div>{services[4]}</div>
            <div>{services[5]}</div>
          </div>
          <div className={style.items} style={{display: services.length <= 6 ? 'none' : 'flex'}}>
            <div>{services[6]}</div>
            <div>{services[7]}</div>
            <div>{services[8]}</div>
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