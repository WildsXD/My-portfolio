import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/Profile.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import IgLight from "../../assets/Insta.svg";
import Igdark from "../../assets/instagram-dark.svg";
import Githublight from "../../assets/github-light.svg";
import Githubdark from "../../assets/github-dark.svg";
import Youtubelight from "../../assets/youtube.svg";
import Youtubedark from "../../assets/youtubee-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import png from "../../assets/cihuyy.jpeg";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeicon = theme === "light" ? sun : moon;
  const IgIcon = theme === "light" ? IgLight : Igdark;
  const GithubIcon = theme === "light" ? Githublight : Githubdark;
  const YoutubeIcon = theme === "light" ? Youtubelight : Youtubedark;
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={HeroImg} alt="profile" />
        <img
          className={styles.colorMode}
          src={themeicon}
          alt="color mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Wilds XD</h1>
        <h2>Mahasiswa</h2>
        <p className="desc">
        Halo! Nama saya Ilham ramdani, dan saya adalah siswa kelas 11 di SMKN 1 Rongga.<br/> Saat ini, saya mendalami bidang informatika. Selain belajar, saya juga sangat gemar bermain game dan membuat program.<br/> Saya antusias untuk terus mengembangkan keterampilan di dunia teknologi dan menciptakan sesuatu yang menarik!
        </p>
        <span>
          <a href="https://www.instagram.com/ham.enak/">
            <img src={IgIcon} alt="my ig" width={50} height={100} />
          </a>
          <a href="https://github.com/WildsXD">
            <img  src={GithubIcon} alt="github icon" width={50} height={100} />
          </a>
          <a href="https://www.youtube.com/@wildss69">
            <img src={YoutubeIcon} alt="youtube icon" width={50} height={100} />
          </a>
        </span>
        <a href={png}>
          <button className="hover" download>
            klik
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
