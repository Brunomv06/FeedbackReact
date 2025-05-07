import { CardInicial } from "./Componentes/CardInicial"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App() {
  const [submited, setSubimited] = useState(false)
  const [rateNote, setRateNote] = useState(0)


  return(
    submited === false ? ( 
      <CardInicial setSubimited={setSubimited} rateNote={rateNote}/>
    ) : (
      <div className="bg-radial-gradient text-white rounded-2xl p-6 max-w-103 font-overpass">
        <img className ="mx-auto mb-6" src={illustrationThankYou} alt="Ilustration Thank You" />
        
        <p className="bg-dark-blue text-orange w-fit mx-auto py-1.25 px-3 rounded-3xl mb-6">You selected {rateNote} out of 5 </p>

        <h1 className="text-2xl font-bold mb-2.5 text-center">Thank you</h1>

        <p className="text-sm text-light-gray leading-1 text-center">We appreciate you taking the time to give a rating. If you ever 
        need more support, don’t hesitate to get in touch!</p>
      </div>
    )

  )
}