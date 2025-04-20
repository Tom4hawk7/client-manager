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
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

export function Input({ type = 'text', defaultValue = '', ...props }) {
  const data = use(FormContext)
  let value = defaultValue

  if (data && Object.hasOwn(data, props.name)) {
    value = data[props.name]
  }

  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        defaultValue={value}
        style={{ color: 'var(--placeholder)', fontWeight: 400 }}
        id={props.name}
        type={type}
        {...props}
      />
    </>
  )
}
