import styles from './header-component.module.css'

function HeaderComponent() {
    return (
        <>
            <header>
                <span id={styles.header}>
                    <div>Robel Mamo</div>
                    <div>Home</div>
                    <div>Experience</div>
                    <div>Projects</div>
                    <div>Work</div>
                </span>
            </header>
        </>
    )
}

export default HeaderComponent