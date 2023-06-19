import { useState } from "react"
import { AppCloneEntrada } from "./AppCloneEntrada"

interface IAppEntrada {
    title: string
    func: (e: any) => {}
}

export const AppEntrada = (props: IAppEntrada) => {
    const [value, setValue] = useState('')
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}> 
                <AppCloneEntrada title={props.title}/>
                <input type="text" style={{padding: '1em', borderRadius: '4px', border: 'none', backgroundColor: 'black', color: 'white'}} placeholder='Entrada' onChange={(e) => props.func(e)}/>
            </div>
        </>
    )
}