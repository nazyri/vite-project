const Navbar = ({ iniciada }) => {
    return (
        <>
            <nav>
                <ul>
                    <li>inicio</li>
                    <li>{iniciada ? "iniciar sesion" : "cerrar sesion"}</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar