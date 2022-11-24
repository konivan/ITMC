import React from "react";
import style from './auth.module.scss';

import { Icon } from '@iconify/react';
import { useState } from "react";


const Auth = (props) => {

    const [activeCheckbox, setActiveCheckbox] = useState(false);

    if (!props.showAuth) {
        return null
    }

    const openAuthorization = () => {
        props.setShowAuthorization(true);
        return props.setShowAuth(false)
    }

    return (
        <main className={style.modal} onClick={props.onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <Icon className={style.closeBtn} icon="mingcute:close-fill" color="white" width="20" height="20" inline={true} onClick={props.onClose}/>
                <header className={style.modalHeader}>
                    <h2 className={style.modalTitle}>Войти</h2>
                    <h2 onClick={() => openAuthorization()} className={style.modalTitle} style={{color: '#454545'}}>Зарегистрироваться</h2>
                </header>
                <section className={style.modalInputsWrapper}>
                    <div className={style.modalInputs}>
                        <div className={style.modalEmailWrapper}>
                            <span>E-mail</span>
                            <input placeholder="Введите вашу почту"></input>
                        </div>
                        <div className={style.modalPasswordWrapper}>
                            <span>Пароль</span>
                            <input placeholder="Введите пароль"></input>
                        </div>
                    </div>
                    <div className={style.checkboxContainer}>
                            <input onClick={() => setActiveCheckbox(!activeCheckbox)} checked={activeCheckbox} type="checkbox" className={style.checkboxInput}></input>
                            {activeCheckbox ? <img className={style.checkboxSvg} alt="checkbox" onClick={() => setActiveCheckbox(!activeCheckbox)} src="img/forms/Union.svg"/> : null}
                            <span className={style.checkmark}>Запомнить меня</span>
                    </div>
                </section>
                <button className={style.enterBtn}>Войти</button>
                <section className={style.spanSection}>
                    <span className={style.lineSpan}></span>
                    <span className={style.secondarySpan}>Или</span>
                    <span className={style.lineSpan}></span>
                </section>
                <section className={style.socialsWrapper}>
                    <span>Войти через</span>
                    <div className={style.socialsBtnWrapper}>
                        <button className={style.googleBtn}><Icon icon="flat-color-icons:google" width="25" height="22" inline={true} />Google</button>
                        <button className={style.telegramBtn}><Icon icon="icon-park-outline:telegram" color="white" width="21" height="22" inline={true} />Telegram</button>
                        <button className={style.vkBtn}><Icon icon="ion:logo-vk" color="white" width="24" height="23" inline={true} />Вконтакте</button>
                    </div>
                </section>
            </div>
        </main>
    )   
}

export default Auth;