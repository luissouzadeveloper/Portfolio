const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top bg-primary py-3">
                <div className="container">
                    <a className="navbar-brand text-white fs-2 fw-bold" href="#">Portfólio</a>
                    <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="bi bi-list text-white fw-bold fs-2"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#">Certificações</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header