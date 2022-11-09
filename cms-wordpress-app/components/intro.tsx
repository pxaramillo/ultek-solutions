import { CMS_NAME, CMS_URL } from '../lib/constants'
import * as styles from './intro.module.css';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <img src="https://svgshare.com/i/nfM.svg" height="720px" width="720"/>
      <nbsp />
      <h2>By IT Guys for IT Guys</h2>
    </section>
  )
}
