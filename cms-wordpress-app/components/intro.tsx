import { CMS_NAME, CMS_URL } from '../lib/constants'
import * as styles from './intro.module.css';
import * as servers from '/servers.jpg';

export default function Intro() {
  return (
    <section className={styles.intro} style={{backgroundImage:"url(/servers.jpg)",backgroundPosition: "center", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
      <img src="https://svgshare.com/i/nfM.svg" height="720px" width="720px"/>
      <br/>
      <h2>By IT Guys for IT Guys</h2>
    </section>
  )
}
