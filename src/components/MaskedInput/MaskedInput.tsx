import { useId } from "react"

import type { FC } from "react"
import type { MaskedInputProps } from "./MaskedInputProps"

import InputMask from "react-input-mask"

import cn from "classnames"

import styles from "./MaskedInput.module.scss"

const MaskedInput: FC<MaskedInputProps> = ({
  value,
  onChange,
  mask,
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
      <InputMask
        className={cn(styles["input-form__input"], className)}
        value={value}
        onChange={onChange}
        mask="+7 (999) 999 99 99"
        placeholder={mask}
        maskChar="_"
        id={id}
        type={type}
        required={required}
      />
    </div>
  )
}

export default MaskedInput
