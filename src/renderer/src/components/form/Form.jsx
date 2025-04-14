{
  /* <label htmlFor="name">Name</label>
<input id="name" name="name" type="text" defaultValue={'Tom'} /> */
}

export function Input({
  name,
  type = 'text',
  label = '',
  defaultValue = '',
  placeholder = '',
  disabled = false,
  required = false
}) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}
