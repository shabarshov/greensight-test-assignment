import { useState } from "react"

import type { FC } from "react"
import type { CardProps } from "./CardProps"

import { ReactComponent as ChevronDown } from "assets/icons/chevronDown.svg"
import { ReactComponent as ChevronUp } from "assets/icons/chevronUp.svg"
import Button from "components/Button/Button"

import cn from "classnames"

import styles from "./Card.module.scss"

const Card: FC<CardProps> = ({
  logo,
  title,
  form,
  company,
  web,
  address,
  description,
  successSnapshot,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isOpenClickHandler = () => {
    setIsOpen((p) => !p)
  }

  return (
    <div
      className={cn(
        styles["card"],
        isOpen ? styles["card--full"] : styles["card--short"]
      )}
    >
      <div className={styles["card__header"]}>
        <div className={styles["card__title"]}>
          <div className={styles["card__desktop-title"]}>
            <img
              className={styles["card__logo"]}
              src={logo}
              alt="Not found"
            />
            <h4 className={styles["card__h4"]}>{title}</h4>
          </div>
          <Button
            className={styles["card__respond-button"]}
            onClick={() => null}
          >
            Respond
          </Button>
        </div>
        <p className={styles["card__contacts"]}>
          <span className={styles["card__contacts--black-bold"]}>
            <span className={styles["card__contacts--grey"]}>Form</span> {form}
          </span>
          <span className={styles["card__contacts--black-bold"]}>
            <span className={styles["card__contacts--grey"]}>Company</span>{" "}
            {company}
          </span>
          <span className={styles["card__contacts--black-bold"]}>
            <span className={styles["card__contacts--grey"]}>Web</span>{" "}
            <a
              className={styles["card__link"]}
              rel="noreferrer"
              target="_blank"
              href={web}
            >
              {web}
            </a>
          </span>
          <span className={styles["card__contacts--black-bold"]}>
            <span className={styles["card__contacts--grey"]}>Address</span>{" "}
            {address}
          </span>
        </p>
      </div>

      <div className={styles["card__content"]}>
        {description && (
          <p className={styles["card__description"]}>{description}</p>
        )}
        <div className={styles["card__footer-wrapper"]}>
          <div
            className={cn(
              styles["card__success-snapshot"],
              isOpen
                ? styles["card__success-snapshot--short"]
                : styles["card__success-snapshot--full"]
            )}
          >
            <span className={styles["card__success-snapshot--black-bold"]}>
              Success Snapshot:
            </span>

            {
              <p className={styles["card__success-snapshot--black"]}>
                {successSnapshot
                  ? successSnapshot
                  : "There are no requirements"}
              </p>
            }
          </div>

          {!isOpen && (
            <div className={styles["card__success-snapshot--gradient"]}></div>
          )}
        </div>
      </div>
      <button
        className={styles["card__details-button"]}
        onClick={isOpenClickHandler}
      >
        {isOpen ? "Less details" : "More details"}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
    </div>
  )
}

export default Card
