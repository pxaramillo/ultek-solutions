import * as React from 'react';
import * as styles from './content.module.css';

const Content = (props) => 
{
    return (
        <main className={styles.pageWidth}>
            {props.children}
        </main>
    )
}

export default Content;