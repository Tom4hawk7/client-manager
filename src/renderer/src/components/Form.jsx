import '../assets/css/form.css'

export function Form({ create, update, id, children }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    if (id) {
      data['id'] = id
      update(data)
    } else {
      create(data)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="hero">
      {children}
      <button type="submit">Submit</button>
    </form>
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

export function Input({ label, name, type = 'text', defaultValue }) {
  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} />
    </>
  )
}
