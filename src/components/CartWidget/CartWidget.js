const CartWidget = () => {
    return (
        <div style={{position:'relative',textAlign:'center'}}>
        <img src='./images/cart.jpg' alt='' style={{width:'70px'}} />
        <span style={{position:'absolute',top:'90%',left:'50%',transform:'translate(-50%, -50%)',fontWeight:'bold'}}>
            5
        </span>
        </div>
    )
    
}

export default CartWidget