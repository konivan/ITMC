import React from 'react';
import style from './List.module.scss'
import { MENU } from "./constant";

export  const List = () => {
    return (
        <nav className={style.menu}>
        <ul>
          {MENU.map((item, index) => (
            <li key={`${item} ${index}`}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
};

