import styles from './Button.module.css'

// const variants = {
//   primary: styles.primary,
//   secondary: styles.orange
// }

export default function Button({ variant, disabled, size, type = 'button', onClick, children }) {
  const style = {}

  let disableClass = disabled ? styles.disabled : ''
  let classVariant = styles[variant]
  let classIcon = ''

  if (size) {
    style.width = size
    style.height = size
    classIcon = styles.icon
  }

  return (
    <button
      type={type}
      style={style}
      className={`${styles.button} ${classIcon} ${classVariant} ${disableClass}`}
      onClick={onClick}
      disabled={disabled}
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
