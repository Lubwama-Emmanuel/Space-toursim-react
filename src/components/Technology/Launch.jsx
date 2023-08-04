import { useState } from "react";
import Header from "../Header/Header";
import Heading from "../Heading/Heading";
import styles from "./Launch.module.css";

const techs = [
  {
    id: 0,
    name: "launch vehicle",
    desc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
        `,
    image: "tech1.png",
  },
  {
    id: 1,
    name: "spaceport",
    desc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
    `,
    image: "tech2.png",
  },
  {
    id: 2,
    name: "space capsule",
    desc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.

    `,
    image: "tech3.png",
  },
];

export default function Launch() {
  return (
    <section className={styles.launch_section}>
      <Header />
      <div className={styles.content}>
        <Heading
          className={styles.heading_custom}
          number={3}
          title={"space launch 101"}
        />
        <Tech />
      </div>
    </section>
  );
}

function Tech() {
  const [clicked, setClicked] = useState(0);

  const selectedTech = techs[clicked];
  return (
    <div className={styles.launch_con}>
      <div className={styles.dots}>
        <Dot num={0} clicked={clicked} setClicked={setClicked}>
          1
        </Dot>
        <Dot num={1} clicked={clicked} setClicked={setClicked}>
          2
        </Dot>
        <Dot num={2} clicked={clicked} setClicked={setClicked}>
          3
        </Dot>
      </div>
      <div className={styles.launch_details}>
        <h4 className={styles.terminalogy}>the terminalogy</h4>
        <h2 className={styles.tech_name}>{selectedTech.name}</h2>
        <p className={styles.desc}>{selectedTech.desc}</p>
      </div>
      <div className={styles.launch_image}>
        <img
          src={selectedTech.image}
          alt={selectedTech.name}
          className={styles.img}
        />
      </div>
    </div>
  );
}

function Dot({ num, children, clicked, setClicked }) {
  return (
    <div
      className={
        clicked === num ? `${styles.dot} ${styles.active}` : `${styles.dot}`
      }
      onClick={() => setClicked(num)}
    >
      <p>{children}</p>
    </div>
  );
}
