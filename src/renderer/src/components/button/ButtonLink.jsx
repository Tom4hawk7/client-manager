import { Link } from 'react-router'
import styles from './Button.module.css'

export default function ButtonLink({ to, content, variant, size, children }) {
  let classContent = styles[`content-${content}`]
  let classVariant = styles[`variant-${variant}`]
  let style = size ? { width: size, height: size } : {}

  return (
    <Link style={style} className={`${styles.link} ${classContent} ${classVariant}`} to={to}>
      {children}
    </Link>
  )
}

// export default function ButtonLink({ to, type, variant, size, children }) {
//     let classKind = styles[`kind-${type}`]
//     let classVariant = styles[`variant-${variant}`]
//     let style = size ? { width: size, height: size } : {}

//     return (
//       <Link style={style} className={`${styles.link} ${classKind} ${classVariant}`} to={to}>
//         {children}
//       </Link>
//     )
//   }
