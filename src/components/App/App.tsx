import { useEffect, useState } from "react"

import type { FC } from "react"
import type { Vacancies, EmploymentForm, Position } from "types"

import RequestForm from "components/RequestForm/RequestForm"
import SearchForm from "components/SearchForm/SearchForm"
import Button from "components/Button/Button"
import Footer from "components/Footer/Footer"
import Card from "components/Card/Card"

import { setUrlQueires, stringToQuery } from "utils"

import useGetRequest from "hooks/useGetRequest"

import styles from "./App.module.scss"

const apiUrl = "https://api.hh.ru/vacancies?"

const App: FC = () => {
  const [form, setForm] = useState<EmploymentForm | null>(null)
  const [position, setPosition] = useState<Position | null>(null)

  const [index, setIndex] = useState<number>(5)
  const [isLastPage, setIsLastPage] = useState<boolean>(false)
  const { ok, status, body, setUrl } = useGetRequest<Vacancies>(apiUrl)

  useEffect(() => {
    setUrl(
      setUrlQueires(
        apiUrl,
        { name: "employment", value: stringToQuery(form) },
        { name: "text", value: stringToQuery(position) }
      )
    )
  }, [form, position, setUrl])

  const cardsToShow = body?.items.slice(0, index)

  const showMoreClickHandler = () => {
    if (body && body.items) {
      setIsLastPage(index + 5 >= body?.items.length)
      setIndex((p) => p + 5)
    }
  }

  return (
    <>
      <main className={styles["app"]}>
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
                  description={e.snippet.requirement?.replace(
                    /<\/?highlighttext>/g,
                    ""
                  )}
                  successSnapshot={e.snippet.responsibility?.replace(
                    /<\/?highlighttext>/g,
                    ""
                  )}
                />
              )
            })}

        {!status && (
          <span className={styles["app__request-info"]}>Loading ...</span>
        )}
        {status && status !== 200 && (
          <span className={styles["app__request-info"]}>Request Error</span>
        )}
        {!isLastPage && body && (
          <Button onClick={showMoreClickHandler}>Show more</Button>
        )}
        <RequestForm />
      </main>
      <Footer />
    </>
  )
}

export default App
