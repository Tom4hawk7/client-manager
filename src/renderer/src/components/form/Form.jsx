import { createContext, use } from 'react'
import { Form as RouterForm } from 'react-router'

const FormContext = createContext(null)

export function Form({ children, data = '' }) {
  return (
    <FormContext.Provider value={data}>
      <RouterForm method="post">{children}</RouterForm>
    </FormContext.Provider>
  )
}

export function Fieldset({ children, legend = '' }) {
  // const data = use(FormContext)

  // const filledInputs = children.map((input, i) => {
  //   return <Input key={i} {...input.props} defaultValue={data[input.props.name]} />
  // })

  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

export function Input(props) {
  const data = use(FormContext)
  let defaultValue = ''

  if (data) {
    defaultValue = data[props.name]
  }

  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        defaultValue={defaultValue}
        style={{ color: 'var(--placeholder)', fontWeight: 400 }}
        id={props.name}
        {...props}
      />
    </>
  )
}
