import { useEffect, useRef } from "react"

import type { FC } from "react"
import type { OptionProps } from "./OptionProps"

import styles from "./Option.module.scss"

const Option: FC<OptionProps> = ({ value, onClick }) => {
  const optionRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const option = optionRef.current
    if (!option) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(value)
      }
    }

    option.addEventListener("keydown", handleEnterKeyDown)

    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown)
    }
  }, [value, onClick])

  return (
    <li
      className={styles["select-form__option"]}
      onClick={() => onClick(value)}
      tabIndex={0}
      ref={optionRef}
    >
      <span className={styles["select-form__option-text"]}>{value}</span>
    </li>
  )
}

export default Option
