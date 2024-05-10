import type { FC } from "react"
import type { LinkWithIconProps } from "./LinkWithIconProps"

import cn from "classnames"

import styles from "./LinkWithIcon.module.scss"

const LinkWithIcon: FC<LinkWithIconProps> = ({
  children,
  icon,
  href,
  className = "",
}) => {
  return (
    <a
      className={styles["link"]}
      href={href}
    >
      {icon}
      <span className={cn(styles["link__span"], className)}>{children}</span>
    </a>
  )
}

export default LinkWithIcon
