import React from 'react';
import { Link } from 'react-router-dom';
import pricingList from './pricingList.json';
import styles from './Pricing.module.sass';

const Pricing = () => {
    return (
        <div className={styles.divFlex}>
            <ul className={styles.wrapper}>
                {pricingList.map((c, i) => <li key={i}>
                    <article>
                        <div className={styles.head} style={{ border: `10px solid ${c.color}` }}>
                            <h4 style={{ color: c.color }}>
                                {c.type}
                            </h4>
                            <p className={styles.describe}>{c.describeType}</p>
                            <p className={styles.price} style={{ color: c.color }}>{c.price}</p>
                        </div>
                        {c.profit.map(profit => <p className={styles.body} data-tooltip={profit.tooltip}>
                            <img src="/staticImages/check-second.svg" alt="check" />
                            {profit.body}
                        </p>)}
                        <Link to='/startContest' style={{backgroundColor: c.color }}>Start</Link>
                    </article>
                </li>)}
            </ul>
        </div>
    );
};

export default Pricing;