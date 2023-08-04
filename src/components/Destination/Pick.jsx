import { useState } from "react";
import Header from "../Header/Header";
import styles from "./Pick.module.css";
import Heading from "../Heading/Heading";

const planets = [
  {
    id: 0,
    image: "moon.png",
    name: "moon",
    info: `See our planet as you’ve never seen it before. A perfect relaxing trip
    away to help regain perspective and come back refreshed. While you’re
    there, take in some history by visiting the Luna 2 and Apollo 11
    landing sites.`,
    distance: "384,400 KM",
    time: "3 days",
  },
  {
    id: 1,
    image: "mars.png",
    name: "mars",
    info: `Don’t forget to pack your hiking boots. You’ll need them to tackle
     Olympus Mons, the tallest planetary mountain in our solar system.
      It’s two and a half times the size of Everest!`,
    distance: "225 mil. km",
    time: "9 months",
  },
  {
    id: 2,
    image: "europa.png",
    name: "europa",
    info: `The smallest of the four Galilean moons orbiting Jupiter, Europa
     is a winter lover’s dream. With an icy surface, it’s perfect for a 
     bit of ice skating, curling, hockey, or simple relaxation in your
      snug wintery cabin.
    `,
    distance: "628 mil. km",
    time: "3 years",
  },
  {
    id: 2,
    image: "titan.png",
    name: "titan",
    info: `The only moon known to have a dense atmosphere other than Earth,
     Titan is a home away from home (just a few hundred degrees colder!). 
     As a bonus, you get striking views of the Rings of Saturn.
    `,
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];

export default function Pick() {
  return (
    <section className={styles.pick}>
      <Header />
      <div className={styles.content}>
        <Heading number={1} title={"pick your destination"} />
        <Planet />
      </div>
    </section>
  );
}

function Planet() {
  const [planet, setPlanet] = useState(0);

  const selectedPlanet = planets[planet];
  return (
    <div className={styles.planet}>
      <div className={styles.planet_image_con}>
        <img
          src={selectedPlanet.image}
          alt={selectedPlanet.name}
          className={styles.planet_image}
        />
      </div>
      <div className={styles.planet_details}>
        <ul className={styles.planet_list}>
          <Tab num={0} setActive={setPlanet} isActive={planet === 0}>
            moon
          </Tab>
          <Tab num={1} setActive={setPlanet} isActive={planet === 1}>
            mars
          </Tab>
          <Tab num={2} setActive={setPlanet} isActive={planet === 2}>
            europa
          </Tab>
          <Tab num={3} setActive={setPlanet} isActive={planet === 3}>
            titan
          </Tab>
        </ul>
        <h2 className={styles.big_planet_name}>{selectedPlanet.name}</h2>
        <p>{selectedPlanet.info}</p>
        <div className={styles.line}>&nbsp;</div>
        <div className={styles.travel_details}>
          <div className={styles.travel_distance}>
            <p className={styles.travel_heading}>avg. distance</p>
            <h2>{selectedPlanet.distance}</h2>
          </div>
          <div className={styles.travel_time}>
            <p className={styles.travel_heading}>est. travel time</p>
            <h2>{selectedPlanet.time}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab({ children, num, setActive, isActive }) {
  return (
    <li className={isActive && styles.active_tab}>
      <button className={styles.tab_btn} onClick={(e) => setActive(num)}>
        {children}
      </button>
    </li>
  );
}
