import type { FC } from "react"
import type { ButtonProps } from "./ButtonProps"

import cn from "classnames"

import styles from "./Button.module.scss"

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(styles["send-button"], className)}
    >
      <span className={styles["send-button__text"]}>{children}</span>
    </button>
  )
}

export default Button
