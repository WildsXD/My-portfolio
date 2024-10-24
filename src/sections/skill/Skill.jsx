import styles from "./skillStyles.module.css";
import Markicon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skill() {
  return (
    <section id="skills" className={styles.Container}>
      <h1>SKILLS</h1>
      <div className={styles.SkillList}>
        <SkillList src={Markicon} Skills="HTML" />
        <SkillList src={Markicon} Skills="CSS" />
        <SkillList src={Markicon} Skills="JavaScript" />
        <SkillList src={Markicon} Skills="TypeScript" />
        <SkillList src={Markicon} Skills="Node" />
        <SkillList src={Markicon} Skills="C++" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={Markicon} Skills="React" />
        <SkillList src={Markicon} Skills="Agular" />
        <SkillList src={Markicon} Skills="Vue" />
        <SkillList src={Markicon} Skills="Tailwinds CSS" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={Markicon} Skills="GO" />
        <SkillList src={Markicon} Skills="Git" />
        <SkillList src={Markicon} Skills="redux" />
        <SkillList src={Markicon} Skills="webpack" />
        <SkillList src={Markicon} Skills="Bootstrap" />
      </div>
    </section>
  );
}

export default Skill;
