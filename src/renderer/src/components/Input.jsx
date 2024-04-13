import '../assets/css/form.css'

export default function Input({ label, name, type = 'text', defaultValue }) {
  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} />
    </>
  )
}
