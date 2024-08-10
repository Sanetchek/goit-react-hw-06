import clsx from 'clsx';
import css from './Contact.module.css'
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";

export default function Contact({ phone: { id, name, number }, onDelete }) {
  const titleItem = clsx(css.item, css.title);
  const phoneItem = clsx(css.item, css.phone);
  return (
    <>
      <div className={css.content}>
        <h2 className={titleItem}>
          <BiSolidUser />
          {name}
        </h2>
        <a href={`tel:${number}`} className={phoneItem}>
          <BiSolidPhone />
          {number}
        </a>
      </div>
      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};















