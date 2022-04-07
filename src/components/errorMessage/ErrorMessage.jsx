import img from './error.jpg'

const errorMessage = () => {

    return (
        <>
            <h1 style={{
                positiion: 'absolute',
                fontSize: 54,
                fontStyle: 'italic',
                color: '#8BD046',
                marginBottom: 10,
                textShadow: ' 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000'
            }}>Sorry...  Error occurred</h1>
            <img
                src={img}
                alt="Error" />
        </>
    )
}


export default errorMessage