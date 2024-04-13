import '../assets/css/form.css'

export default function Fieldset({ legend, children }) {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </>
  )
}
