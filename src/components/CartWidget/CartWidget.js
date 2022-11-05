const CartWidget = (props) => {
    const myContainer = {
        position:'relative',
        textAlign:'center'
    }
    const myCentered = {
        position:'absolute',
        top:'90%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        fontWeight:'bold'
    }
    return (
        <>
            <div style={myContainer}>
            <img src='./images/cart.jpg' alt='' style={{width:'70px'}} />
            <span style={myCentered}>
                {props.numero}
            </span>
            </div>
        </>
    )
    
}

export default CartWidget