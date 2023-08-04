import styles from "./Member.module.css";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";
import { useState } from "react";

const members = [
  {
    id: 0,
    position: "commander",
    name: "douglas hurley",
    desc: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
    He launched into space for the third time as commander of Crew Dragon Demo-2.
    `,
    image: "douglas.png",
  },
  {
    id: 1,
    position: "mission specialist",
    name: "mark shuttleworth",
    desc: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
    `,
    image: "mark.png",
  },
  {
    id: 2,
    position: "pilot",
    name: "victor clover",
    desc: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander
     in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
    `,
    image: "victor.png",
  },
  {
    id: 3,
    position: "flight engineer",
    name: "anousheh ansari",
    desc: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded 
    space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
    `,
    image: "ansari.png",
  },
];

export default function Member() {
  return (
    <section className={styles.member_section}>
      <Header />
      <div className={styles.content}>
        <Heading number={2} title={"meet your crew"} />
        <About />
      </div>
    </section>
  );
}

function About() {
  const [member, setMember] = useState(0);

  const selectedMember = members[member];
  return (
    <div className={styles.member_con}>
      <div className={styles.member_info}>
        <h4>{selectedMember.position}</h4>
        <h2>{selectedMember.name}</h2>
        <p>{selectedMember.desc}</p>
        <div className={styles.dots}>
          <Dot num={0} setActive={setMember} member={member} />
          <Dot num={1} setActive={setMember} member={member} />
          <Dot num={2} setActive={setMember} member={member} />
          <Dot num={3} setActive={setMember} member={member} />
        </div>
      </div>
      <div className={styles.member_image_con}>
        <img
          src={selectedMember.image}
          alt={selectedMember.name}
          className={styles.member_img}
        />
      </div>
    </div>
  );
}

function Dot({ num, setActive, member }) {
  return (
    <div
      className={
        member === num ? `${styles.dot} ${styles.active_dot}` : `${styles.dot}`
      }
      onClick={() => setActive(num)}
    >
      &nbsp;
    </div>
  );
}
