import { useContext, createContext } from 'react'
import '../../assets/css/form.css'

const FormContext = createContext(null)

export function FormContextProvider({ value, children }) {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export function getFormData(event) {
  const formData = new FormData(event.target)
  return Object.fromEntries(formData)
}

export function Form({ children }) {
  const handleSubmit = useContext(FormContext)
  // create, update, id

  //   const formData = new FormData(event.target)
  //   const data = Object.fromEntries(formData)

  //   if (id) {
  //     data['id'] = id
  //     update(data)
  //   } else {
  //     create(data)
  //   }
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  // }

  return (
    <div className="hero">
      <form onSubmit={handleSubmit} className="card">
        {children}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export function Fieldset({ legend, children }) {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </>
  )
}

export function Input({ label, name, type = 'text', defaultValue = '' }) {
  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} />
    </>
  )
}
