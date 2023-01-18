import React, { useState, useEffect, useRef } from "react";
import { attendance, days } from "./constants";
import { NavLink } from "react-router-dom";
import { Alert } from "../../../components/UI/Alert/Alert";

import style from "./LkCreateOrder.module.scss";
import { SwitchComponent } from "./SwitchComponent";

export const LkCreateOrder = (props) => {
  const [globalToken, setGlobalToken] = useState(null);
  const [budgetValue, setBudgetValue] = useState(0);
  const [service, setServiceValue] = useState();
  const [file, setFile] = useState();
  const [planFiles, setPlanFiles] = useState();
  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [allTime, setAllTime] = useState(false);
  const [alert, setAlert] = useState("");

  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [domain, setDomain] = useState();
  const [telegram, setTelegram] = useState();
  const [logoImg, setLogoImg] = useState();
  let services = [];
  const [tagsId, setTagsId] = useState([]);

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
      setAlert("")
    }, 4000)
  }

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

  useEffect(() => {
    const fetchData = async () => {
      const userData = {
        username: "admin",
        password: "admin",
      };

      const url1 = `${props.URL}api/token/`;
      const reqOptions1 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
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

  const sendOrder = () => {
    const formData = new FormData();
    formData.append("file", logoImg);

    const url = `${props.URL}orders/order/`;
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
        sunday_end: "00:00",
      },
      contact: {
        phone: phone,
        email: email,
        domain: domain,
        telegram: telegram,
      },
      category: [service],
      name: productName,
      image: formData,
      price: budgetValue,
      description: description,
      tags: tagsId,
    };
    const reqOptions = {
      method: "POST",
      headers: {
        authorization: `Bearer ${globalToken?.access}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(results),
    };

    if (
      results.name === "" ||
      results.description === "" ||
      results.price === 0 ||
      results.contact.email === "" ||
      results.contact.telegram === "" ||
      results.contact.phone === ""
    ) {
      return setAlert("Заполните все поля!");
    }

    fetch(url, reqOptions, results)
      .then((res) => {
        res.json();
      })
      .catch((err) => console.log("Error: " + err));
  };

  return (
    <section className={style.wrapper}>
      <Alert alert={alert} setAlert={setAlert} style={true}/>
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
            step="25000"
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
                  let inputFile = e.target.files[0];
                  let path = URL.createObjectURL(inputFile);
                  let image = new Image();
                  image.src = path;
                  image.onload = function () {
                    if (image.width !== 256 || image.height !== 256) {
                      return setAlert("Изображение должно быть 256px на 256px");
                    } else {
                      setPlanFiles(path);
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
          {planFiles === undefined ? null : (
            <div style={{ color: "green" }}>Файл загружен</div>
          )}
          <p>
            Размером от 256px на 256px в формате .jpg или .png
            <br /> Максимум 5 фотографий
          </p>
        </div>
        <div className={style.row}>
          <span>Что именно вам нужно</span>
          {/* <div className={style.tags}>Нет выбранных тэгов</div> */}
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
                tagsId.push(services[0]?.id);
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
                tagsId.push(services[1]?.id);
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
                tagsId.push(services[2]?.id);
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
                tagsId.push(services[3]?.id);
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
                tagsId.push(services[4]?.id);
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
                tagsId.push(services[5]?.id);
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
                tagsId.push(services[6]?.id);
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
                tagsId.push(services[7]?.id);
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
                tagsId.push(services[8]?.id);
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
        <div className={style.row}>
          <span>Контакты</span>
          <input
            placeholder="Номер телефона"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Домен, если есть"
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
            }}
          />
          <input
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => {
              setTelegram(e.target.value);
            }}
          />
        </div>
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
