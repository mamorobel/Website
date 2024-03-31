import styles from "./experience-component.module.css"

function ExperienceComponent() {

    return (
        <>
            <section id={styles.experiences}>
                <p>My Experience</p>
                <article id={styles.expTable}>
                    <p>Unity Developer/Researcher</p>
                    <p>Web Developer/UI/UX Designer</p>
                    <p>Agile Development</p>
                </article>
            </section>
        </>
    )

}

export default ExperienceComponent