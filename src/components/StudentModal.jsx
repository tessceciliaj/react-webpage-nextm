export default function StudentModdal() {
    return (
        <div className={styles.studentCard}>
            <div className={styles.upper}>
                <img src={studentPic} width={200} height={200} alt='student image' />
            </div>
            <div className={styles.lower}>
                <h3>{name}</h3>
                <p className={styles.profession}>{profession}</p>
                <div className={styles.links}>
                    {portfolio ? (
                        <a href={portfolioUrl}>
                            <p className={styles.link}>Portfolio</p>
                        </a>
                    ) : (
                        <a href={portfolioUrl}>
                            <p className={styles.link} id={styles.disabled}>
                                Portfolio
                            </p>
                        </a>
                    )}

                    <span>|</span>
                    <div className={styles.link}>Read more</div>
                </div>
            </div>
        </div>

    )
}