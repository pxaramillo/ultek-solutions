import Container from './container';
import * as styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <h2>Company Information</h2>
        </div>
      </Container>
    </footer>
  )
}
