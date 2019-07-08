import React from 'react'

export default function YouTube(props) {
  return (
    <div>
      {props.choose === null ? <p>{props.en.chooseLang}</p> : <p>{props.ru.chooseLang}</p>}
    </div>
  )
}
