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
                                <a href="https://luissouzadeveloper.github.io/Resident-Evil4-Remake/" target='_blank' className="btn btn-outline-light">Acesse</a>
                            </div>
                        </div>

                        <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto2} className="card-img-top" alt="Projeto 2"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Asia Airlines</h5>
                                <p className="card-text text-white">Uma landing page oriental e fictícia feita com HTML, CSS e JavaScript.</p>
                                <a href="https://luissouzadeveloper.github.io/Asia-Airlines/" target='_blank' className="btn btn-outline-light">Acesse</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto3} className="card-img-top" alt="Projeto 3"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Calculadora IMC</h5>
                                <p className="card-text text-white">Uma calculadora IMC com HTML, CSS e JavaScript seguindo todas as medidas de classificação.</p>
                                <a href="https://luissouzadeveloper.github.io/calculadora-imc/" target='_blank' className="btn btn-outline-light">Acesse</a>
                            </div>
                        </div>
                        <div className="card my-3 p-2 bg-primary">
                            <img src={Projeto4} className="card-img-top" alt="Projeto 4"></img>
                            <div className="card-body">
                                <h5 className="card-title text-white">Cine Horror</h5>
                                <p className="card-text text-white">Uma franquia fictícia criada por mim, feita em HTML, CSS, JavaScript e Bootstrap.</p>
                                <a href="https://luissouzadeveloper.github.io/Cine-Horror-1/" target='_blank' className="btn btn-outline-light">Acesse</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center my-2">
                        <a href='https://github.com/luissouzadeveloper?tab=repositories' target='_blank' type="button" className="btn btn-primary fw-bold">Veja mais</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects;