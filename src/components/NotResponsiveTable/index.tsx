import React from 'react'

import styles from './index.module.css'

export default function NotResponsiveTable(props: {
  children: JSX.Element
}) {

  // Render
  return (
    <div className={styles.NotResponsiveTable}>
      {props.children}
    </div>
  )
}
