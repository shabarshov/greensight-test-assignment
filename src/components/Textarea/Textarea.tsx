import { useId } from "react"

import type { FC } from "react"
import type { TextareaProps } from "./TextareaProps"

import cn from "classnames"

import styles from "./Textarea.module.scss"

const Textarea: FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = "",
  labelValue = "",
  required = false,
  className = "",
}) => {
  const id = useId()

  return (
    <div className={styles["textarea-form"]}>
      <label
        className={styles["textarea-form__label"]}
        htmlFor={id}
      >
        {labelValue}
      </label>
      <textarea
        className={cn(styles["textarea-form__textarea"], className)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        required={required}
      />
    </div>
  )
}

export default Textarea
