import { useId, useEffect, useRef, useState } from "react"

import type { FC } from "react"
import type { SelectProps } from "./SelectProps"

import Chevron from "components/Chevron/Chevron"
import Option from "components/Option/Option"

import cn from "classnames"

import styles from "./Select.module.scss"

const Select: FC<SelectProps> = ({
  labelValue,
  options,
  placeholder = "Not selected",
  selected,
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  const id = useId()

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("click", outsideClickHandler)

    return () => {
      window.removeEventListener("click", outsideClickHandler)
    }
  }, [])

  useEffect(() => {
    const { current } = placeholderRef
    if (!current) return

    const enterKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev)
      }
    }

    current.addEventListener("keydown", enterKeyDownHandler)

    return () => {
      current.removeEventListener("keydown", enterKeyDownHandler)
    }
  }, [])

  const optionClickHandler = (value: string) => {
    setIsOpen(false)
    onChange(value)
  }

  const placeholderClickHandler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className={cn(styles["select-form"], className)}
      ref={rootRef}
    >
      <label
        className={styles["select-form__label"]}
        htmlFor={id}
      >
        {labelValue}
      </label>
      <div
        className={styles["select-form__head"]}
        onClick={placeholderClickHandler}
        tabIndex={0}
        ref={placeholderRef}
        id={id}
      >
        {selected ? (
          <span className={styles["select-form__head-text--selected"]}>
            {selected}
          </span>
        ) : (
          <span className={styles["select-form__head-text--not-selected"]}>
            {placeholder}
          </span>
        )}
        <Chevron
          className={
            isOpen
              ? styles["select-form__chevron--reverted"]
              : styles["select-form__chevron"]
          }
        />
      </div>
      {isOpen && (
        <ul className={styles["select-form__content"]}>
          {options.map((option) => (
            <Option
              key={option}
              value={option}
              onClick={optionClickHandler}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
