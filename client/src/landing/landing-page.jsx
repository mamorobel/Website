import styles from './landing-page.module.css'
import HeaderComponent from "../Components/header-component.jsx";
import ExperienceComponent from "../Components/experience-component.jsx";

function Landing() {
    return (
        <>
            <div className={styles.landing}>
                <HeaderComponent/>
                <section id={styles.aboutMe}>
                    <p>Robel Mamo</p>
                    <p>B.S. Computer Science</p>
                </section>
            </div>
            <ExperienceComponent />
            <section>
                <p>project</p>
            </section>
        </>
    )
}

export default Landing