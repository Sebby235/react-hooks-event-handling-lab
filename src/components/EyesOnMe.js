// Code EyesOnMe Component Here

function EyesOnMe () {
    function handleBlur () {
        console.log('Hey! Eyes on me!')
    }
    function handleFocus () {
        console.log('Good!')
    }
    return (
        <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe