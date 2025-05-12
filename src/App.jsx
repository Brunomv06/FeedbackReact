import { CardFinal } from "./Componentes/CardFinal"
import { CardInicial } from "./Componentes/CardInicial"
import { useState } from "react"

export function App() {
  const [submited, setSubimited] = useState(false)
  const [rateNote, setRateNote] = useState(0)


  return(
    submited === false ? ( 
      <CardInicial setSubimited={setSubimited} rateNote={rateNote} setRateNote={setRateNote} />
    ) : (
      <CardFinal rateNote={rateNote}/>
    )
  )
}