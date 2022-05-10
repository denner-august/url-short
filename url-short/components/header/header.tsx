import style from "./style.module.scss";
import whatsapp from "../../public/image/social-icons/whatsapp.png";
import linkedin from "../../public/image/social-icons/linkedin.png";
import github from "../../public/image/social-icons/github.png";
import Image from "next/image";

export function Header() {
  return (
    <header className={style.Container}>
      <h1>shortly</h1>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/denner-bernardes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedin}
              alt="Picture of the author"
              width={60}
              height={60}
            />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5511978057417"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={whatsapp}
              alt="Picture of the author"
              width={60}
              height={60}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/denner-august"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={github}
              alt="Picture of the author"
              width={60}
              height={60}
            />
          </a>
        </li>
      </ul>
    </header>
  );
}
