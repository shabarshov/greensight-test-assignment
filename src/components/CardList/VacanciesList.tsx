import { useEffect, useLayoutEffect, useState } from "react"

import type { FC } from "react"
import type { VacanciesListProps } from "./VacanciesListProps"
import type { Vacancies, EmploymentForm, Position, Vacancy } from "types"

import SearchForm from "components/SearchForm/SearchForm"
import Button from "components/Button/Button"
import Card from "components/Card/Card"

import { setUrlQueires, stringToQuery } from "utils"

import useGetRequest from "hooks/useGetRequest"

import styles from "./VacanciesList.module.scss"

const apiUrl = "https://api.hh.ru/vacancies?"

const VacanciesList: FC<VacanciesListProps> = ({ cardsAmount = 5 }) => {
  const [form, setForm] = useState<EmploymentForm | null>(null)
  const [position, setPosition] = useState<Position | null>(null)
  const [isShowMoreVisible, setIsShowMoreVisible] = useState<boolean>(false)

  const [numberOfCards, setNumberOfCards] = useState<number>(cardsAmount)
  const [isLastPage, setIsLastPage] = useState<boolean>(false)
  const [cardsToShow, setCardsToShow] = useState<Vacancy[]>([])
  const { ok, status, body, isLoading, setUrl } =
    useGetRequest<Vacancies>(apiUrl)

  useEffect(() => {
    setUrl(
      setUrlQueires(
        apiUrl,
        { name: "employment", value: stringToQuery(form) },
        { name: "text", value: stringToQuery(position) }
      )
    )
    setNumberOfCards(cardsAmount)
  }, [form, position, cardsAmount, setUrl])

  useEffect(() => {
    setIsShowMoreVisible(true)
  }, [cardsToShow])

  useLayoutEffect(() => {
    setCardsToShow(body?.items.slice(0, numberOfCards) ?? [])
  }, [numberOfCards, body])

  useLayoutEffect(() => {
    setIsShowMoreVisible(false)
  }, [form, position])

  const showMoreClickHandler = () => {
    if (body && body.items) {
      setIsLastPage(numberOfCards + cardsAmount >= body?.items.length)
      setNumberOfCards((p) => p + cardsAmount)
    }
  }

  return (
    <div className={styles["vacancies-list"]}>
      <SearchForm
        setForm={setForm}
        setPosition={setPosition}
      />
      {ok &&
        status &&
        cardsToShow
          ?.filter((e) => {
            if (!form) return true
            return e.employment.id === form?.toLowerCase()
          })
          .map((e, i) => {
            return (
              <Card
                key={i}
                title={e.name}
                logo={e.employer.logo_urls?.[240] ?? null}
                form={e.employment.name}
                company={e.employer.name}
                web={e.employer.alternate_url}
                address={e.area.name}
                description={e.snippet.requirement?.replaceAll(
                  /<\/?highlighttext>/g,
                  ""
                )}
                successSnapshot={e.snippet.responsibility?.replaceAll(
                  /<\/?highlighttext>/g,
                  ""
                )}
              />
            )
          })}

      {isLoading && (
        <span className={styles["vacancies-list__request-info"]}>
          Loading ...
        </span>
      )}
      {!isLoading && status && status !== 200 && (
        <span className={styles["vacancies-list__request-info"]}>
          Request Error {status}
        </span>
      )}
      {!isLoading && ok && status && cardsToShow.length === 0 && (
        <span className={styles["vacancies-list__request-info"]}>
          There are no such vacancies
        </span>
      )}
      {isShowMoreVisible &&
        !isLoading &&
        !isLastPage &&
        cardsToShow.length !== 0 &&
        body && <Button onClick={showMoreClickHandler}>Show more</Button>}
    </div>
  )
}

export default VacanciesList
