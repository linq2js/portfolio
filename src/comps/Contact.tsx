import classNames from "classnames";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

type FormModel = {
  name: string;
  text: string;
  email: string;
  message: string;
};

const defaultValues: FormModel = {
  name: "",
  text: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues,
  });
  const [sending, setSending] = useState(false);
  const onSubmit = useCallback(
    (values: FormModel) => {
      setSending(true);

      fetch("https://formsubmit.co/ajax/linqtojs@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then(() => reset())
        .catch((ex) => alert(ex.message))
        .finally(() => setSending(false));
    },
    [setSending]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={sending}>
          <input
            className={classNames({
              input: true,
              invalid: formState.errors.name,
            })}
            {...register("name", { required: true })}
            placeholder="Full name"
          />
          <input
            className={classNames({
              input: true,
              invalid: formState.errors.email,
            })}
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            })}
          />
          <input
            className={classNames({
              input: true,
              invalid: formState.errors.text,
            })}
            {...register("text", { required: true })}
            placeholder="Subject"
          />
          <textarea
            className={classNames({
              input: true,
              invalid: formState.errors.message,
            })}
            {...register("message", { required: true })}
            placeholder="Message"
          />
          <button className="button" type="submit">
            {sending ? "Sending..." : "Send message!"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export { Contact };
