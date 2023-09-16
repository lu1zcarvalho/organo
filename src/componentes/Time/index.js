import './Time.css'

const Time = (props) => {
    const cssSecundario = { backgroundColor: props.corSecundaria }

    return(
        <section className='time' style={cssSecundario}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Time