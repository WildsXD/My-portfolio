import styles from './ProjectsStyles.module.css';
import project1 from "../../assets/wilds.png";
import Card from "../../common/projectCard"
import Project2 from  "../../assets/Projectt.png";

function Project() {
  return (
    <section id="project" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectContainer}>
        <Card src={project1} h3="Profil" link="https://myprofile-one-phi.vercel.app/" 
        p="web pertama saya yang menggunakan framework boostrap 5"/>
                <Card src={Project2} h3="3D CSS" link="https://github.com/WildsXD/CSS-3D" 
        p="web keren dengan menggunakan css"/>
      </div>
    </section>
  );
}

export default Project;
