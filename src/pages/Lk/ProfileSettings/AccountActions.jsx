import React from "react";

import style from "./ProfileSettings.module.scss";

const AccountActions = () => {
  return (
    <div className={style.accountActions}>
      <div>
        <h2>Действия с аккаунтом</h2>
        <p>
          Действия с аккаунтом предназначены для смены общих данных ( логина,
          пароля ) а так же для его удаления, просим вас не удалять аккаунты без
          нужды.
        </p>

        <div className={style.accountActionButtons}>
          <div className={style.item}>
            <button>
              <img src="img/newLk/edit.svg" alt="editIcon" />
              <span> Применить и сохранить</span>
            </button>
            <button>
              <img src="img/newLk/noteremove.svg" alt="noteremove" />
              <span>Отменить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
