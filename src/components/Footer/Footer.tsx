import type { FC } from "react"

import Link from "components/Link/Link"

import styles from "./Footer.module.scss"

const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        <div className={styles["footer__contacts"]}>
          <span className={styles["footer__text--bold"]}>+7 499 391-66-69</span>
          <span className={styles["footer__text--bold"]}>
            mail@greensight.ru
          </span>
        </div>
        <div className={styles["footer__address"]}>
          <span className={styles["footer__text"]}>
            322A, 2nd Floor, Zelenograd, Moscow, Russia
          </span>
          <Link
            className={styles["footer__link"]}
            href="http://localhost:3000"
          >
            Directions
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
