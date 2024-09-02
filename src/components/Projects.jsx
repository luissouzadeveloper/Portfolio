// Imagens
import Projeto1 from '../assets/img/proj1.png'
import Projeto2 from '../assets/img/proj2.png'
import Projeto3 from '../assets/img/proj3.png'
import Projeto4 from '../assets/img/proj4.png'

const Projects = () => {
    return (
        <>
            <section className="container my-5">
                <div className="row">
                    <h2 className='fs-1'>Projetos</h2>

                    <div className="col-12 col-md-6">
                        <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto1} className="card-img-top" alt="Projeto 1"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Resident Evil 4</h5>
                                <p className="card-text text-white">Este é um site inspirado no da Capcom, foi feito com HTML, CSS,JavaScript e Bootstrap</p>
                                <a href="#" className="btn btn-outline-light">Acesse</a>
                            </div>
                        </div>

                        <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto2} className="card-img-top" alt="Projeto 1"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Card title 2</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-outline-light">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto3} className="card-img-top" alt="Projeto 1"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Card title</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-outline-light">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto4} className="card-img-top" alt="Projeto 1"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Card title</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-outline-light">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects;