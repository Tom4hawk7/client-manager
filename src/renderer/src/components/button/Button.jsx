import styles from './Button.module.css'

export default function Button({ content, variant, size, type = 'button', children, ...props }) {
  let style = size ? { width: size, height: size } : {}

  let classContent = styles[`content-${content}`]
  let classVariant = styles[`variant-${variant}`]
  let className = `${styles.button} ${classContent} ${classVariant}`

  // let disableClass = disabled ? styles.disabled : ''
  // let className = `${styles.button} ${classContent} ${classVariant} ${disableClass}`

  return (
    <button type={type} style={style} className={`${className}`} {...props}>
      {children}
    </button>
  )
}

// export default function Button({
//   variant,
//   content,
//   size,
//   type = 'button',
//   name,
//   value,
//   onClick,
//   disabled,
//   children
// }) {
//   let style = size ? { width: size, height: size } : {}

//   let disableClass = disabled ? styles.disabled : ''
//   let classContent = styles[`content-${content}`]
//   let classVariant = styles[`variant-${variant}`]
//   let className = `${styles.button} ${classContent} ${classVariant} ${disableClass}`

//   return (
//     <button
//       type={type}
//       style={style}
//       className={`${className}`}
//       onClick={onClick}
//       disabled={disabled}
//       value={value}
//       name={name}
//     >
//       {children}
//     </button>
//   )
// }
