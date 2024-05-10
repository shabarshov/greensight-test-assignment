import { useState } from "react"

import type { FC } from "react"
import type { SearchFormProps } from "./SearchFormProps"

import { ReactComponent as Close } from "assets/icons/close.svg"
import LinkWithIcon from "components/LinkWithIcon/LinkWithIcon"
import Button from "components/Button/Button"
import Select from "components/Select/Select"
import Header from "components/Header/Header"

import {
  EmploymentFormEnum,
  PositionEnum,
  type EmploymentForm,
  type Position,
} from "types"

import { enumToStringArray } from "utils"

import { isDesktop } from "react-device-detect"

import styles from "./SearchForm.module.scss"

const employmentTypes = enumToStringArray(EmploymentFormEnum)
const positionTypes = enumToStringArray(PositionEnum)

const SearchForm: FC<SearchFormProps> = ({ setForm, setPosition }) => {
  const [currentForm, setCurrentForm] = useState<EmploymentForm | null>(null)
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null)

  const searchClickHandler = () => {
    setForm(currentForm)
    setPosition(currentPosition)
  }

  return (
    <div className={styles["search-form"]}>
      <Header value="List of vacancies" />

      <div className={styles["search-form__content"]}>
        <div className={styles["search-form__filters"]}>
          <div className={styles["search-form__selections"]}>
            <Select
              labelValue="Form"
              selected={currentForm}
              placeholder="Not selected"
              options={employmentTypes}
              onChange={(value) => {
                setCurrentForm(value as EmploymentForm)
              }}
            />

            <Select
              labelValue="Position"
              selected={currentPosition}
              placeholder="Not selected"
              options={positionTypes}
              onChange={(value) => {
                setCurrentPosition(value as Position)
              }}
            />
          </div>
          {!isDesktop && (currentForm || currentPosition) && (
            <LinkWithIcon
              icon={<Close />}
              href="http://localhost:3000"
            >
              <span>Clear filters</span>
            </LinkWithIcon>
          )}
          {isDesktop && (
            <Button
              className={styles["search-form__button"]}
              onClick={searchClickHandler}
            >
              Search
            </Button>
          )}
        </div>
        {isDesktop && (currentForm || currentPosition) && (
          <LinkWithIcon
            icon={<Close />}
            href="http://localhost:3000"
          >
            <span>Clear filters</span>
          </LinkWithIcon>
        )}
      </div>
      {!isDesktop && (
        <Button
          className={styles["search-form__button"]}
          onClick={searchClickHandler}
        >
          Search
        </Button>
      )}
    </div>
  )
}

export default SearchForm
