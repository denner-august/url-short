import Image from "next/image";
import style from "./style.module.scss";
import logoMarca from "./../../public/image/social-icons/coding.svg";
export function Section() {
  return (
    <div className={style.Container}>
      <h2>
        Esse sistema foi criada especialmente para que você consiga encurtar
        seus links de maneira rapida e eficiente
      </h2>

      <Image
        src={logoMarca}
        alt="Picture of the author"
        width={600}
        height={700}
      />
    </div>
  );
}
