import type { FC } from "react"
import type { LinkProps } from "./LinkProps"

import cn from "classnames"

import styles from "./Link.module.scss"

const Link: FC<LinkProps> = ({ children, href, className = "" }) => {
  return (
    <span className={styles["link"]}>
      <a
        className={cn(styles["link__a"], className)}
        href={href}
      >
        {children}
      </a>
    </span>
  )
}

export default Link
