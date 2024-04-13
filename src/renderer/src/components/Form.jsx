import '../assets/css/form.css'

export default function Form({ databaseOperation, children }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    databaseOperation(data)
  }

  return (
    <form onSubmit={handleSubmit} className="hero">
      {children}
      <button type="submit">Submit</button>
    </form>
  )
}
