import { useState } from "react"

export const AppEntrada = (props: any) => {
    const [Texto, setTexto] = useState('')

    const mudarTexto = (e: any) => {
        setTexto(e.target.value)
        props.func(Texto)
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}> 
                <h2>Entrada</h2>
                <input type="text" style={{padding: '1em', borderRadius: '4px', border: 'none', backgroundColor: 'black', color: 'white'}} placeholder='Entrada' onChange={mudarTexto}/>
            </div>
        </>
    )
}