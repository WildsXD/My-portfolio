import styles from "./ContactStyles.module.css";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTittle">CONTACT</h1>
      <form action="">
        <div className="Formgrup">
          <label htmlFor="name" hidden>
            name
          </label>
          <input type="text" name="name"
          id="name" placeholder="name" required />
        </div>
        <div className="Formgrup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="text" name="email"
          id="email" placeholder="email" required />
        </div>
        <div className="Formgrup">
          <label htmlFor="message" hidden>
            Email
          </label>
          <textarea type="text" name="message"
          id="message" placeholder="message" required ></textarea>
        </div>
        <input type="submit" className="Hover btn"  value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
