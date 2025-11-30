import React from 'react';
import firstNamingPlatformCards from './firstNamingPlatform';
import styles from './FirstNamingPlatformList.module.sass';

const FirstNamingPlatformList = () => {
    return (
        <div className={styles.firstNamingPlatformContainer}>
            <ul className={styles.firstNamingPlatformList}>
                {firstNamingPlatformCards.map((c, i) => <li key={i}>
                    <div className={styles.firstNamingPlatformArticle}>
                        <div className={styles.icon}>
                            <img src={c.iconSrc} alt={c.title} />
                        </div>
                        <div className={styles.info}>
                            <h4>
                                {c.title}
                            </h4>
                            <span>{c.body}</span>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    );
};

export default FirstNamingPlatformList;