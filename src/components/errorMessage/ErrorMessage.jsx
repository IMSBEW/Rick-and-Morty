import img from './error.jpg'

const errorMessage = () => {

    return (
        <>
            <h1 className='error__title' style={{ color: '#8BD046' }}>Sorry...  Error occurred</h1>
            <img
                style={{
                    width: '100%'
                }}
                src={img}
                alt="Error" />
        </>
    )
}


export default errorMessage