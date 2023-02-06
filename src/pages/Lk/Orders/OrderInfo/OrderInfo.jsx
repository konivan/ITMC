import React, { useEffect, useState } from "react";
import { Alert } from "../../../../components/UI/Alert/Alert";

import Carousel from "../../../../components/UI/Carousel/Carousel";

import { getSchedule } from "../../../../utils/schedule";

import style from "./OrderInfo.module.scss";

const OrderInfo = ({
  orderData,
  setOrderData,
  currentOrder,
  setCurrentOrder,
  URL,
  globalToken,
}) => {
  const userName = localStorage.getItem("name");
  const [schedule, setSchedule] = useState([]);
  const [alert, setAlert] = useState("");
  const [modal, setModal] = useState(false);

  const url = `${URL}orders/order/${currentOrder.id}/`;
  const reqOptions = {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${globalToken}`,
      Accept: "application/json",
    },
  };

  const removeOrder = async () => {
    try {
      const res = await fetch(url, reqOptions);

      if (res.ok) {
        setOrderData(orderData.filter((el) => el.id !== currentOrder.id));
        setCurrentOrder(null);
      } else {
        throw new Error();
      }
    } catch (err) {
      setAlert("Ошибка при выполнении запроса");
      console.log("Error: " + err);
    }
  };
  console.log(currentOrder);
  useEffect(() => {
    setSchedule(getSchedule(currentOrder));
  }, [currentOrder]);

  return (
    <div className={style.wrapper}>
      <Alert alert={alert} setAlert={setAlert} style={true} />
      <div className={style.title}>
        <div className={style.column}>
          <h2>{currentOrder?.name}</h2>
          <div className={style.text}>
            <p>{currentOrder?.category}</p>
          </div>
          <div className={style.item}>
            <p>{currentOrder.description}</p>
          </div>
        </div>
        <div className={style.buttons}>
          <div className={style.item}>
            <button onClick={() => setModal(!modal)}>
              <img src="img/newLk/noteremove.svg" alt="noteremove" />
              <span> Отменить заказ</span>
            </button>
            <button>
              <img src="img/newLk/edit.svg" alt="editIcon" />
              <span>Редактировать</span>
            </button>
            {modal && (
              <div className={style.modal}>
                <div className={style.bgModal}>
                  <h4>Отмена заказа</h4>
                  <p>
                    Удаляя заказ вы подтверждаете удаление всех связанных с ним
                    данных
                  </p>
                  <h4>Вы уверены?</h4>
                  <div className={style.box}>
                    <button onClick={() => removeOrder()}>
                      <img src="img/newLk/noteremove.svg" alt="noteremove" />
                      <span onClick={() => removeOrder()}> Отменить заказ</span>
                    </button>
                    <button onClick={() => setModal(false)}>
                      <img src="img/newLk/edit.svg" alt="editIcon" />
                      <span>Вернуться назад</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={style.item}>
            <img src="img/newLk/fire.svg" alt="fire" />
            <span>В процессе разработки</span>
          </div>
        </div>
      </div>
      <Carousel gallery={currentOrder.gallery} />
      <div className={style.contentContainer}>
        <div className={style.info}>
          <h4>Контактные данные</h4>
          <div className={style.userInfo}>
            <img src="img/newLk/profile.svg" alt="userLogo" />
            <p>{userName}</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/newLk/callcalling.svg" alt="phoneLogo" />
            <p>{currentOrder?.contact?.phone}</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/newLk/sms.svg" alt="emailLogo" />
            <p>{currentOrder?.contact?.email}</p>
          </div>
        </div>
        <div className={style.description}>
          <p>{currentOrder.description}</p>
        </div>
      </div>
      {/* <div className={style.userInfo}>
            <img src="img/Lk/web.svg" alt="webLogo" />
            <p>{currentOrder?.contact?.domain}</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/Lk/time.svg" alt="timeLogo" />
            {schedule.map((el) => {
              return <p key={el}>{el};</p>;
            })}
          </div> */}
      <div className={style.managers}>
        {currentOrder.manager && (
          <>
            <h4>Менеджеры проекта</h4>

            <div className={style.manager}>
              <div className={style.managerPhoto}>
                <img src={currentOrder.manager.photo} alt="managerPhoto" />
              </div>
              <div className={style.managerInfo}>
                <p>
                  {currentOrder.manager.first_name}{" "}
                  {currentOrder.manager.last_name}
                </p>
                <p>Менеджер проекта</p>
                <div>
                  <a
                    href="https://t.me/Proodduct_manager7"
                    target="_blank"
                    rel="noreferrer"
                    className={style.item}
                  >
                    <button>
                      <img src="img/newLk/messages2.png" alt="messages" />
                      <span> Связь с менеджером</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderInfo;
