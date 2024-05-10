import type { FC } from "react"

import type { HeaderProps } from "./HeaderProps"

import styles from "./Header.module.scss"

const Header: FC<HeaderProps> = ({ value }) => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__h1"]}>{value}</h1>
    </header>
  )
}

export default Header
