interface IAppNavBAr {
    title: string
}

export const AppNavBar = (props: IAppNavBAr) => {
    return (
        <>
            <nav style={{position: 'fixed', left: '0', top: '0', width: '100%', height: '56px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <h2 style={{color: 'white'}}>{props.title}</h2>
            </nav>
        </>
    )
}