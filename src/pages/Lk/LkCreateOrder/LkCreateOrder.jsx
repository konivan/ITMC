import React, { useState, useRef } from "react";
import { attendance, days } from "./constants";
import { NavLink } from "react-router-dom";
import { Alert } from "../../../components/UI/Alert/Alert";
import MySlider from "../../../components/UI/MySlider/MySlider";
import Contacts from "./Contacts";
import { SwitchComponent } from "./SwitchComponent";

import style from "./LkCreateOrder.module.scss";
import Page404 from "../../Page404/Page404";

export const LkCreateOrder = (props) => {
  const [budgetValue, setBudgetValue] = useState(0);
  const [service, setServiceValue] = useState("");
  const [file, setFile] = useState();
  const [planFiles, setPlanFiles] = useState(0);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [allTime, setAllTime] = useState(false);
  const [alert, setAlert] = useState("");
  const [gallery] = useState([]);
  let   [categoryId] = useState(1);

  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [domain, setDomain] = useState();
  const [telegram, setTelegram] = useState();
  const [logoImg, setLogoImg] = useState();
  let services = [];
  const [tagsId] = useState([]);

  const tagRef1 = useRef();
  const tagRef2 = useRef();
  const tagRef3 = useRef();
  const tagRef4 = useRef();
  const tagRef5 = useRef();
  const tagRef6 = useRef();
  const tagRef7 = useRef();
  const tagRef8 = useRef();
  const tagRef9 = useRef();

  if (alert !== "") {
    setTimeout(() => {
      setAlert("");
    }, 4000);
  }

  const changeHandler = () => {
    if (service === "Веб сайт") {
      services = attendance[0];
      categoryId = 1;
    } else if (service === "Разработка приложения") {
      services = attendance[1];
      categoryId = 2;
    } else if (service === "Крипто разработка") {
      services = attendance[2];
      categoryId = 3;
    } else if (service === "Разработка дизайна") {
      services = attendance[3];
      categoryId = 4;
    } else if (service === "Аудит системы и кода") {
      services = attendance[4];
      categoryId = 5;
    } else if (service === "Маркетинг") {
      services = attendance[5];
      categoryId = 6;
    } else return (services = attendance[0]);
  };
  changeHandler();

  if (localStorage.getItem('globalToken') === null) {
    return <Page404/>;
  }

  const sendOrder = () => {
    const formData = new FormData();
    formData.append("image", logoImg);
    formData.append("conference.monday_start", "10:00");
    formData.append("conference.monday_end", "18:00");
    formData.append("conference.tuesday_start", "10:00");
    formData.append("conference.tuesday_end", "18:00");
    formData.append("conference.wednesday_start", "10:00");
    formData.append("conference.wednesday_end", "18:00");
    formData.append("conference.thursday_start", "10:00");
    formData.append("conference.thursday_end", "18:00");
    formData.append("conference.friday_start", "10:00");
    formData.append("conference.friday_end", "18:00");
    formData.append("conference.saturday", false);
    formData.append("conference.sunday", false);
    formData.append("contact.phone", phone);
    formData.append("contact.email", email);
    formData.append("contact.domain", domain);
    formData.append("contact.telegram", telegram);
    formData.append("category", service || 'Веб сайт');
    formData.append("name", productName);
    formData.append("price", budgetValue);
    formData.append("description", description);
    for (let i = 0; i < tagsId.length; i++) {
      formData.append(`tags[${i}]name`, tagsId[i]?.name);
    };
    for (let i = 0; i < gallery.length; i++) {
      formData.append(`gallery[${i}]image`, gallery[i]?.[0]);
    };


    const url = `${props.URL}orders/order/`;
    const results = {};
    const reqOptions = {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("globalToken")}`,
      },
      body: formData,
    };

    if (
      productName === undefined ||
      description === undefined ||
      budgetValue === 0 ||
      email === undefined ||
      telegram === undefined ||
      phone === undefined
    ) {
      return setAlert("Заполните все поля!");
    }

    fetch(url, reqOptions, results)
      .then((res) => {
        res.json();
        if (res.status >= 400 && res.status < 500) {
          return setAlert("Неправильно заполнены поля!");
        } else if (res.status === 500) {
          return setAlert("Ошибка на сервере!");
        }
      })
      .then(() => {
        setAlert('Заказ успешно отправлен!');
      })
      .then(() => {
        setTimeout(() => {
          window.location.pathname = '/Orders';
        }, 1000)
      })
      .catch((err) => console.log("Error: " + err));
  };

  return (
    <section className={style.wrapper}>
      <Alert alert={alert} setAlert={setAlert} styling={true} />
      <div className={style.container}>
        <div className={style.row}>
          <span className={style.firstSpan}>Создание нового проекта</span>
          <NavLink to="/Orders">
            <button>Отменить</button>
          </NavLink>
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
                  style={{ height: "100px", width: "100px" }}
                />
              )}
            </div>
            <div className={style.column}>
              <span>Загрузить фото</span>
              <input
                onChange={(e) => {
                  let inputFile = e.target.files[0];
                  setLogoImg(e.target.files[0]);
                  let path = URL.createObjectURL(inputFile);
                  let image = new Image();
                  image.src = path;
                  image.onload = function () {
                    if (image.width !== 256 || image.height !== 256) {
                      return setAlert("Изображение должно быть 256px на 256px");
                    } else {
                      setFile(path);
                    }
                  };
                }}
                accept="image/*"
                placeholder="Загрузить фото"
                type="file"
                name="file"
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
          <MySlider
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
                accept="image/*"
                onChange={(e) => {
                  let path = URL.createObjectURL(e.target.files[0]);
                  let image = new Image();
                  image.src = path;
                  image.onload = function () {
                    if (image.width !== 256 || image.height !== 256) {
                      return setAlert("Изображение должно быть 256px на 256px");
                    } else {
                      setPlanFiles(planFiles + 1);
                      return gallery.push(e.target.files);
                    }
                  };
                }}
              />
              <img src="img/Lk/photoIcon.svg" alt="Uploadphoto" />
              <p>
                <span>Загрузите фотографии</span>, или просто перетяните их в
                это поле
              </p>
            </form>
          </div>
          {gallery.length === 0 ? null : (
            <div style={{ color: "green" }}>
              Вы загрузили: {gallery[0]?.[0]?.name} {gallery[1]?.[0]?.name}
              {gallery[2]?.[0]?.name} {gallery[3]?.[0]?.name} {gallery[4]?.[0]?.name}
            </div>
          )}
          <p>
           Добавьте хотя бы 1 фото формате .jpg или .png
            <br /> Максимум 5 фотографий
          </p>
        </div>
        <div className={style.row}>
          <span>Что именно вам нужно</span>
          <label>Категория</label>
          <select
            onChange={(e) => {
              setServiceValue(e.target.value);
              tagsId.length = 0;
              tagRef1.current.style.background = "";
              tagRef2.current.style.background = "";
              tagRef3.current.style.background = "";
              tagRef4.current.style.background = "";
              tagRef5.current.style.background = "";
              tagRef6.current.style.background = "";
              tagRef7.current.style.background = "";
              tagRef8.current.style.background = "";
              tagRef9.current.style.background = "";
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
            <div
              ref={tagRef1}
              onClick={() => {
                tagsId.push({
                  name: services[0]?.title,
                  category: categoryId,
                });
                if (tagRef1.current.style.background === "rgb(190, 68, 242)") {
                  tagRef1.current.style.background = "";
                } else {
                  tagRef1.current.style.background = "#be44f2";
                }
              }}
            >
              {services[0]?.title}
            </div>
            <div
              ref={tagRef2}
              onClick={() => {
                tagsId.push({
                  name: services[1]?.title,
                  category: categoryId,
                });
                if (tagRef2.current.style.background === "rgb(190, 68, 242)") {
                  tagRef2.current.style.background = "";
                } else {
                  tagRef2.current.style.background = "#be44f2";
                }
              }}
            >
              {services[1]?.title}
            </div>
            <div
              ref={tagRef3}
              onClick={() => {
                tagsId.push({
                  name: services[2]?.title,
                  category: categoryId,
                });
                if (tagRef3.current.style.background === "rgb(190, 68, 242)") {
                  tagRef3.current.style.background = "";
                } else {
                  tagRef3.current.style.background = "#be44f2";
                }
              }}
            >
              {services[2]?.title}
            </div>
          </div>
          <div className={style.items}>
            <div
              ref={tagRef4}
              onClick={() => {
                tagsId.push({
                  name: services[3]?.title,
                  category: categoryId,
                });
                if (tagRef4.current.style.background === "rgb(190, 68, 242)") {
                  tagRef4.current.style.background = "";
                } else {
                  tagRef4.current.style.background = "#be44f2";
                }
              }}
            >
              {services[3]?.title}
            </div>
            <div
              ref={tagRef5}
              onClick={() => {
                tagsId.push({
                  name: services[4]?.title,
                  category: categoryId,
                });
                if (tagRef5.current.style.background === "rgb(190, 68, 242)") {
                  tagRef5.current.style.background = "";
                } else {
                  tagRef5.current.style.background = "#be44f2";
                }
              }}
            >
              {services[4]?.title}
            </div>
            <div
              ref={tagRef6}
              onClick={() => {
                tagsId.push({
                  name: services[5]?.title,
                  category: categoryId,
                });
                if (tagRef6.current.style.background === "rgb(190, 68, 242)") {
                  tagRef6.current.style.background = "";
                } else {
                  tagRef6.current.style.background = "#be44f2";
                }
              }}
            >
              {services[5]?.title}
            </div>
          </div>
          <div
            className={style.items}
            style={{ display: services.length <= 6 ? "none" : "flex" }}
          >
            <div
              ref={tagRef7}
              onClick={() => {
                tagsId.push({
                  name: services[6]?.title,
                  category: categoryId,
                });
                if (tagRef7.current.style.background === "rgb(190, 68, 242)") {
                  tagRef7.current.style.background = "";
                } else {
                  tagRef7.current.style.background = "#be44f2";
                }
              }}
            >
              {services[6]?.title}
            </div>
            <div
              ref={tagRef8}
              onClick={() => {
                tagsId.push({
                  name: services[7]?.title,
                  category: categoryId,
                });
                if (tagRef8.current.style.background === "rgb(190, 68, 242)") {
                  tagRef8.current.style.background = "";
                } else {
                  tagRef8.current.style.background = "#be44f2";
                }
              }}
            >
              {services[7]?.title}
            </div>
            <div
              ref={tagRef9}
              onClick={() => {
                tagsId.push({
                  name: services[8]?.title,
                  category: categoryId,
                });
                if (tagRef9.current.style.background === "rgb(190, 68, 242)") {
                  tagRef9.current.style.background = "";
                } else {
                  tagRef9.current.style.background = "#be44f2";
                }
              }}
            >
              {services[8]?.title}
            </div>
          </div>
        </div>
        <Contacts
          setAlert={setAlert}
          phone={phone}
          email={email}
          domain={domain}
          telegram={telegram}
          setPhone={setPhone}
          setEmail={setEmail}
          setDomain={setDomain}
          setTelegram={setTelegram}
        />
        <div className={style.row}>
          <span>Восколько вы свободны для конференций</span>
          {days.map((item, index) => (
            <SwitchComponent
              setAllTime={setAllTime}
              allTime={allTime}
              item={item}
              key={`${item}, ${index}`}
            />
          ))}
        </div>
        <div className={style.row}>
          <span>Описание</span>
          <textarea
            placeholder="Полное описание"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <p>Максимальное количество символов: 5000</p>
        </div>
        <div className={style.row}>
          <NavLink to="/Orders">
            <button>Отменить</button>
          </NavLink>
          <button onClick={sendOrder}>Отправить</button>
        </div>
      </div>
    </section>
  );
};
