import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const links = [
  {
    id: 0,
    link_item: "Home",
    link: "/",
  },
  {
    id: 1,
    link_item: "Destination",
    link: "/destination",
  },
  {
    id: 3,
    link_item: "crew",
    link: "/crew",
  },
  {
    id: 4,
    link_item: "technology",
    link: "/technology",
  },
];

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src="logo.png" alt="logo" className={styles.logo} />
        <Nav />
      </div>
      <Line />
    </>
  );
}

function Nav() {
  return (
    <ul className={styles.nav_bar}>
      {links.map((el, index) => (
        <NavItem index={index} item={el} key={el.id} />
      ))}
    </ul>
  );
}

function NavItem({ item, index }) {
  return (
    <li>
      <NavLink to={item.link} className={styles.link}>
        <span className={styles.index_value}>{`0${index}`}</span>
        {item.link_item}
      </NavLink>
    </li>
  );
}

function Line() {
  return <div className={styles.line}>&nbsp;</div>;
}
