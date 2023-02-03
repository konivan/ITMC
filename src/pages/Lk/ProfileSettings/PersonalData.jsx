import React, { useState } from "react";

import style from "./ProfileSettings.module.scss";

const PersonalData = (props) => {
  const [logoImg, setLogoImg] = useState();
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangePhoto = (e) => {
    let inputFile = e.target.files[0];
    setLogoImg(e.target.files[0]);
    let path = URL.createObjectURL(inputFile);
    let image = new Image();
    image.src = path;
    image.onload = function () {
      setFile(path);
    };
  };

  const sendChangings = async () => {
    const formData = new FormData();
    formData.append("photo", logoImg);
    formData.append("email", email);
    formData.append("username", name);

    const url = `${props.URL}account/users/me/`;
    // const results = {};
    const reqOptions = {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("globalToken")}`,
      },
      body: formData,
    };

    try {
      const res = await fetch(url, reqOptions);
      // console.log(res);

      if(res.ok) {
        localStorage.setItem('name', name)
      }
      
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  // console.log(name, email, logoImg);

  return (
    <div className={style.personalDataWrapper}>
      <h1>Личные данные</h1>
      <div className={style.inputWrapper}>
        {file === undefined ? (
          <div>
            <img src="img/newLk/camera.png" alt="cameraIcon" />
            <p>Смена фотографии</p>
          </div>
        ) : (
          <img
            src={`${file}`}
            alt="yourPhoto"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              marginTop: 0,
            }}
          />
        )}
        <input
          onChange={(e) => handleChangePhoto(e)}
          accept="image/*"
          placeholder="Загрузить фото"
          type="file"
          name="file"
        />
      </div>
      <div>
        <p>Имя пользователя</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <p>Электронная почта</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>

      <div onClick={sendChangings} className={style.buttons}>
        <div className={style.item}>
          <button>
            <img src="img/newLk/edit.svg" alt="editIcon" />
            <span>Применить и сохранить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;

// const sendOrder = () => {
//   const formData = new FormData();
//   formData.append("image", logoImg);
//   formData.append("conference.monday_start", "10:00");
//   formData.append("conference.monday_end", "18:00");
//   formData.append("conference.tuesday_start", "10:00");
//   formData.append("conference.tuesday_end", "18:00");
//   formData.append("conference.wednesday_start", "10:00");
//   formData.append("conference.wednesday_end", "18:00");
//   formData.append("conference.thursday_start", "10:00");
//   formData.append("conference.thursday_end", "18:00");
//   formData.append("conference.friday_start", "10:00");
//   formData.append("conference.friday_end", "18:00");
//   formData.append("conference.saturday", false);
//   formData.append("conference.sunday", false);
//   formData.append("contact.phone", phone);
//   formData.append("contact.email", email);
//   formData.append("contact.domain", domain);
//   formData.append("contact.telegram", telegram);
//   formData.append("category", service || 'Веб сайт');
//   formData.append("name", productName);
//   formData.append("price", budgetValue);
//   formData.append("description", description);
//   for (let i = 0; i < tagsId.length; i++) {
//     formData.append(`tags[${i}]name`, tagsId[i]?.name);
//   };
//   for (let i = 0; i < gallery.length; i++) {
//     formData.append(`gallery[${i}]image`, gallery[i]?.[0]);
//   };

//   const url = `${props.URL}orders/order/`;
//   const results = {};
//   const reqOptions = {
//     method: "POST",
//     headers: {
//       authorization: `Bearer ${localStorage.getItem("globalToken")}`,
//     },
//     body: formData,
//   };

//   if (
//     productName === undefined ||
//     description === undefined ||
//     budgetValue === 0 ||
//     email === undefined ||
//     telegram === undefined ||
//     phone === undefined
//   ) {
//     return setAlert("Заполните все поля!");
//   }

//   fetch(url, reqOptions, results)
//     .then((res) => {
//       res.json();
//       if (res.status >= 400 && res.status < 500) {
//         return setAlert("Неправильно заполнены поля!");
//       } else if (res.status === 500) {
//         return setAlert("Ошибка на сервере!");
//       }
//     })
//     .then(() => {
//       setAlert('Заказ успешно отправлен!');
//     })
//     .then(() => {
//       setTimeout(() => {
//         window.location.pathname = '/Orders';
//       }, 1000)
//     })
//     .catch((err) => console.log("Error: " + err));
// };
