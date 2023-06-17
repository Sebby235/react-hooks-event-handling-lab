// Code Keypad Component Here



function Keypad (){
    function keypadListen (e) {
        e.preventDefault()
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={keypadListen} />
        </div>
    )
}

export default Keypad;