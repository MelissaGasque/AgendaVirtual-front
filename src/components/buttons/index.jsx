export function Button({ button, type, onClick, children }){
    return(
        <button button={button} type={type} onClick={onClick}>
            {children}
        </button>
    )
}