interface IAppCloneEntrada {
    title: string
}

export const AppCloneEntrada = (props: IAppCloneEntrada) => {
    return (
        <>
            <label htmlFor="" >{props.title}</label>
        </>
    )
}