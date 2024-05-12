import type { FC } from "react"

import RequestForm from "components/RequestForm/RequestForm"
import VacanciesList from "components/CardList/VacanciesList"
import Footer from "components/Footer/Footer"

import styles from "./App.module.scss"

const App: FC = () => {
  return (
    <>
      <main className={styles["app"]}>
        <VacanciesList />
        <RequestForm />
      </main>
      <Footer />
    </>
  )
}

export default App
