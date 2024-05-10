import { useId } from "react"

import type { FC } from "react"
import type { InputProps } from "./InputProps"

import cn from "classnames"

import styles from "./Input.module.scss"

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  labelValue = "",
  type = "text",
  required = false,
  className = "",
}) => {
  const id = useId()

  return (
    <div className={styles["input-form"]}>
      <label
        className={styles["input-form__label"]}
        htmlFor={id}
      >
        {labelValue}
      </label>
      <input
        className={cn(styles["input-form__input"], className)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        type={type}
        required={required}
      />
    </div>
  )
}

export default Input
