import styles from './Button.module.css'

export default function Button({
  variant,
  content,
  size,
  type = 'button',
  name,
  value,
  onClick,
  disabled,
  children
}) {
  let style = size ? { width: size, height: size } : {}

  let disableClass = disabled ? styles.disabled : ''
  let classContent = styles[`content-${content}`]
  let classVariant = styles[`variant-${variant}`]
  let className = `${styles.button} ${classContent} ${classVariant} ${disableClass}`
  // let classVariant = styles[`variant-${variant}`]
  // let classIcon = ''

  // if (size) {
  //   style.width = size
  //   style.height = size
  //   classIcon = styles.icon
  // }

  return (
    <button
      type={type}
      style={style}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
      value={value}
      name={name}
    >
      {children}
    </button>
  )
  // variants could be like primary of secondary
}

// export default function Button({ children, size, radius, style = {}, onClick }) {
//   // props in other components -> color, size, variant

//   // if size is specified, get rid of text button stylings
//   if (size) {
//     style.width = size
//     style.height = size
//     style.margin = 0
//     style.padding = 0
//     style.minWidth = 0
//   }

//   style.borderRadius = radius

//   return (
//     <button type="button" style={style} className={styles.button} onClick={onClick}>
//       {children}
//     </button>
//   )
// }

// you can have a size prop in the LinkButton component
