import {useState} from 'react'

const ItemCount = (props) => {
    const [count, setCount] = useState(0)
    
console.log({props.maximo})


    const resta = () => {
        setCount(count - 1)
    }
    const suma = () => {
        setCount(count + 1)
    }
    
    return (
        <div >
            <button onClick={resta}>Resta</button>
            <button>{count}</button>
            <button onClick={suma}>Suma</button>
            
        </div>
    )
}

export default ItemCount