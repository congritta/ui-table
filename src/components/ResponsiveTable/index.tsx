import React, {ReactNode, useEffect, useState} from 'react'

import styles from './index.module.css'

export default function ResponsiveTable(props: {
  headers: string[],
  rows: ReactNode[][],

  mediaWidth: number,

  onRowClick?(rowIndex: number): void,

  wrapperClassName?: string,
  additionalMobileCellClassName?: string
}) {

  // State
  const [desktop, setDesktop] = useState(window.innerWidth >= props.mediaWidth)

  // Switch tables on actual window width function
  function switchTables() {
    setDesktop(window.innerWidth >= props.mediaWidth)
  }

  // Watch media width
  useEffect(() => {
    switchTables()
  }, [props.mediaWidth])

  // Watch window width
  useEffect(() => {
    window.addEventListener('resize', switchTables)

    return () => {
      window.removeEventListener('resize', switchTables)
    }
  }, [])

  // Render
  return (
    <div className={[
      styles.ResponsiveTable,
      props.wrapperClassName
    ].filter(Boolean).join(' ')}>
      {desktop ? (
        <table>
          <thead>
            <tr>
              {props.headers.map((header, i) => (<th key={i}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row, i) => (
              <tr
                key={i}
                className={props.onRowClick ? '_isHoverable' : ''}
                onClick={() => props.onRowClick?.(i)}
              >
                {row.map((cell, i) => (<td key={i}>{cell}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.mobileCells}>
          {props.rows.map((row, i) => (
            <div
              key={i}
              className={[
                styles.mobileCell,
                ...(props.additionalMobileCellClassName ? [props.additionalMobileCellClassName] : []),
                ...(props.onRowClick ? ['_isHoverable'] : [])
              ].join(' ')}
              onClick={() => props.onRowClick?.(i)}
            >
              <div className="data-rows">
                {row.map((cell, i) => (
                  <div key={i} className="row">
                    <div>{props.headers[i]}:</div>
                    <div>{cell}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
