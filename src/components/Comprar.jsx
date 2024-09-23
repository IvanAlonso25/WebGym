function Comprar() {
    const compraRealizada = (producto) => {
        alert(`Has comprado ${producto}`);
    }

    return (
        <>
            <div>
                <h1>{compraRealizada()}</h1>
            </div>
        </>
    )
}

export { Comprar };