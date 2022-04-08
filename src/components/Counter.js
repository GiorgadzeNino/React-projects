import './counter.css'


const Counter = ({ counter, onIncrement, onDecrement, id } ) => {

    return (
        <div className='counter-container'>
            <span className='counter-value'>{counter}</span>
            <div id='div'>
                <p>
                    This is a paragraph
                </p>
            </div>
            <button className='button button-increment' onClick={() => onIncrement(id)}>Increment</button>
            <button className='button button-decrement' onClick={() => onDecrement(id)}>Decrement</button>
        </div>
    )
}

export default Counter