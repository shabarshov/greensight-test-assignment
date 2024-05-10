import { useEffect, useState } from "react"

import type { FC } from "react"
import type { RequestFormProps } from "./RequestFormProps"

import MaskedInput from "components/MaskedInput/MaskedInput"
import Textarea from "components/Textarea/Textarea"
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import Link from "components/Link/Link"

import { emailValidator } from "utils"

import styles from "./RequestForm.module.scss"

const RequestForm: FC<RequestFormProps> = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [comment, setComment] = useState<string>("")

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (
      name &&
      email &&
      emailValidator(email) &&
      phone &&
      !phone.includes("_")
    ) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [name, email, phone])

  const sendButtonClickHandler = () => {
    alert(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}${
        comment ? "\nComment: " + comment : ""
      }`
    )
  }

  return (
    <div className={styles["request-form-wrapper"]}>
      <form className={styles["request-form"]}>
        <div className={styles["request-form__header"]}>
          <h2 className={styles["request-form__h2"]}>Leave a request</h2>
          <p className={styles["request-form__header-text"]}>
            We will advise you and help you start a new project
          </p>
        </div>
        <div className={styles["request-form__content"]}>
          <Input
            className={styles["request-form__input"]}
            labelValue="Your name"
            placeholder="Please introduce yourself"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            required={true}
          />
          <Input
            className={styles["request-form__input"]}
            labelValue="Email"
            placeholder="ivanov@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required={true}
          />
          <MaskedInput
            className={styles["request-form__input"]}
            labelValue="Phone number"
            mask="+7 (999) 000 00 00"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            required={true}
          />
          <Textarea
            className={styles["request-form__input"]}
            labelValue="Comment"
            placeholder="Message text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
            }}
          />
        </div>
        <div className={styles["request-form__footer"]}>
          <Button
            onClick={sendButtonClickHandler}
            isDisabled={isButtonDisabled}
            className={styles["request-form__button"]}
          >
            Send
          </Button>
          <p className={styles["request-form__footer-text"]}>
            By clicking "Send" you confirm your consent to the
            <br />
            <Link
              className={styles["request-form__link"]}
              href="http://localhost:3000"
            >
              processing of personal data
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RequestForm
