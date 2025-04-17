import { createContext, use } from 'react'

const FormContext = createContext(null)

export function Form({ action, children, data = '' }) {
  return (
    <FormContext.Provider value={data}>
      <form action={action}>{children}</form>
    </FormContext.Provider>
  )
}

export function Fieldset({ children, legend = '' }) {
  const data = use(FormContext)

  const filledInputs = children.map((input, i) => {
    return <Input key={i} {...input.props} defaultValue={data[input.props.name]} />
  })

  return (
    <fieldset>
      <legend>{legend}</legend>
      {data ? filledInputs : children}
    </fieldset>
  )
}

export function Input(props) {
  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input style={{ color: 'var(--placeholder)', fontWeight: 400 }} id={props.name} {...props} />
    </>
  )
}
