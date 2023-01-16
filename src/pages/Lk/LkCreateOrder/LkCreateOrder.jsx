import React, { useState, useEffect } from "react";
import { attendance, days } from "./constants";

import style from "./LkCreateOrder.module.scss";
import { SwitchComponent } from "./SwitchComponent";

export const LkCreateOrder = () => {
  const [globalToken, setGlobalToken] = useState(null);
  const [budgetValue, setBudgetValue] = useState();
  const [service, setServiceValue] = useState();
  const [file, setFile] = useState();
  const [planFiles, setPlanFiles] = useState();
  const [imgLogo, setImgLogo] = useState();
  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [allTime, setAllTime] = useState(false);

  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [domain, setDomain] = useState();
  const [telegram, setTelegram] = useState();
  let services = [];
  const [tagsId, setTagsId] = useState([]);

  const changeHandler = () => {
    if (service === "Веб сайт") {
      services = attendance[0];
    } else if (service === "Разработка приложения") {
      services = attendance[1];
    } else if (service === "Крипто разработка") {
      services = attendance[2];
    } else if (service === "Разработка дизайна") {
      services = attendance[3];
    } else if (service === "Аудит системы и кода") {
      services = attendance[4];
    } else if (service === "Маркетинг") {
      services = attendance[5];
    } else return (services = attendance[0]);
  };
  changeHandler();

  const userData = {
    username: "admin",
    password: "admin"
  }

  const url1 = `http://127.0.0.1:8000/api/token/`;
  const reqOptions1 = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url1, reqOptions1, userData);
        const token = await res.json();
        setGlobalToken(token);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchData();
  }, []);

  const results = {
    conference: {
        monday: allTime,
        tuesday: allTime,
        wednesday: allTime,
        thursday: allTime,
        friday: allTime,
        saturday: allTime,
        sunday: allTime,
        monday_start: "00:00",
        monday_end: "00:00",
        tuesday_start: "00:00",
        tuesday_end: "00:00",
        wednesday_start: "00:00",
        wednesday_end: "00:00",
        thursday_start: "00:00",
        thursday_end: "00:00",
        friday_start: "00:00",
        friday_end: "00:00",
        saturday_start: "00:00",
        saturday_end: "00:00",
        sunday_start: "00:00",
        sunday_end: "00:00"
    },
    contact: {
      phone: phone,
      email: email,
      domain: domain,
      telegram: telegram
    },
    category: [
      service
    ],
    name: productName,
    image: imgLogo,
    price: budgetValue,
    description: description,
    tags: tagsId
  };

  const url = `http://127.0.0.1:8000/orders/order/`;
    const reqOptions = {
      method: "POST",
      headers: {
        "authorization": `Bearer ${globalToken?.access}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(results),
    };

    const sendOrder = () => {
      fetch(url, reqOptions, results)
        .then((res) => res.json())
        .catch((err) => console.log("Error: " + err));
    };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.row}>
          <span className={style.firstSpan}>Создание нового проекта</span>
          <button>Отменить</button>
          <button>Заказать</button>
          <div>
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
          </div>
        </div>
        <div className={style.row}>
          <span>Логотип вашего проекта</span>
          <div>
            <div className={style.column}>
              {file === undefined ? (
                <div>
                  <img src="img/Lk/photoIcon.svg" alt="Uploadphoto" />
                  <p>Нет фотографии</p>
                </div>
              ) : (
                <img
                  src={`${file}`}
                  alt="yourPhoto"
                  style={{ height: "100px" }}
                />
              )}
            </div>
            <div className={style.column}>
              <span>Загрузить фото</span>
              <input
                onChange={(e) => {
                  setImgLogo(e.target.files[0]);
                  let path = window.URL.createObjectURL(e.target.files[0]);
                  window.URL.revokeObjectURL(path);
                  setFile(path);
                }}
                placeholder="Загрузить фото"
                type="file"
              />
              <p>Размером от 256px на 256px в формате .jpg или .png </p>
              {file === undefined ? null : (
                <span style={{ color: "green" }}>Файл загружен</span>
              )}
            </div>
          </div>
        </div>
        <div className={style.row}>
          <span>Название</span>
          <input
            value={productName}
            placeholder="Название вашего проекта"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className={style.row}>
          <span>Желаемый бюджет</span>
          <label>Ваш желаемый бюджет</label>
          <input
            placeholder="0"
            type="number"
            value={budgetValue}
            onChange={(e) => {
              setBudgetValue(e.target.value);
            }}
          />
          <input
            list="marks"
            type="range"
            min="0"
            max="100000"
            value={budgetValue}
            onChange={(e) => {
              setBudgetValue(e.target.value);
            }}
          />
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
              <input
                type="file"
                onChange={(e) => {
                  setPlanFiles(e.target.files[0]);
                }}
              />
              <img src="img/Lk/photoIcon.svg" alt="Uploadphoto" />
              <p>
                <span>Загрузите фотографии</span>, или просто перетяните их в
                это поле
              </p>
            </form>
          </div>
          {planFiles === undefined ? null : (
            <div style={{ color: "green" }}>Вы загрузили: {planFiles.name}</div>
          )}
          <p>
            Размером от 256px на 256px в формате .jpg или .png
            <br /> Максимум 5 фотографий
          </p>
        </div>
        <div className={style.row}>
          <span>Что именно вам нужно</span>
          <div className={style.tags}>Нет выбранных тэгов</div>
          <label>Категория</label>
          <select
            onChange={(e) => {
              setServiceValue(e.target.value);
            }}
          >
            <option>Веб сайт</option>
            <option>Разработка приложения</option>
            <option>Крипто разработка</option>
            <option>Разработка дизайна</option>
            <option>Аудит системы и кода</option>
            <option>Маркетинг</option>
          </select>
          <div className={style.items}>
            <div onClick={() => {
              tagsId.push(services[0]?.id)
              console.log(tagsId)
            }}>{services[0]?.title}</div>
            <div onClick={() => {
              tagsId.push(services[1]?.id)
            }}>{services[1]?.title}</div>
            <div onClick={() => {
              tagsId.push(services[2]?.id)
            }}>{services[2]?.title}</div>
          </div>
          <div className={style.items}>
            <div onClick={() => {
              tagsId.push(services[3]?.id)
            }}>{services[3]?.title}</div>
            <div onClick={() => {
              tagsId.push(services[4]?.id)
            }}>{services[4]?.title}</div>
            <div onClick={() => {
              tagsId.push(services[5]?.id)
            }}>{services[5]?.title}</div>
          </div>
          <div
            className={style.items}
            style={{ display: services.length <= 6 ? "none" : "flex" }}
          >
            <div onClick={() => {
              tagsId.push(services[6]?.id)
            }}>{services[6]?.title}</div>
            <div onClick={() => {
              tagsId.push(services[7]?.id)
            }}>{services[7]?.title}</div>
            <div onClick={() => {
              tagsId.push(services[8]?.id)
            }}>{services[8]?.title}</div>
          </div>
        </div>
        <div className={style.row}>
          <span>Контакты</span>
          <input placeholder="Номер телефона" type="tel" value={phone} onChange={(e) => {
            setPhone(e.target.value)
          }}/>
          <input placeholder="Email" type="email" value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
          <input placeholder="Домен, если есть" value={domain} onChange={(e) => {
            setDomain(e.target.value)
          }}/>
          <input placeholder="Telegram" value={telegram} onChange={(e) => {
            setTelegram(e.target.value)
          }}/>
        </div>
        <div className={style.row}>т    
          <span>Восколько вы свободны для конференций</span>
          {days.map((item, index) => (
            <SwitchComponent setAllTime={setAllTime} allTime={allTime} item={item} key={`${item}, ${index}`}/>
          ))}
        </div>
        <div className={style.row}>
          <span>Описание</span>
          <textarea placeholder="Полное описание" value={description} onChange={(e) => {
            setDescription(e.target.value)
          }}/>
          <p>Максимальное количество символов: 5000</p>
        </div>
        <div className={style.row}>
          <button>Отменить</button>
          <button onClick={sendOrder}>Отправить</button>
        </div>
      </div>
    </section>
  );
};
