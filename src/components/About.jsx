// Imagens
import programmer from '../assets/img/programmer.jpg'

const About = () => {
    return (
        <>
            <section className="container py-2 my-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={programmer} alt="Programmer" className='img-fluid rounded-circle shadow-lg' />
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start mt-3 mt-md-0">
                        <h2>Sobre mim</h2>
                        <p>
                            Me chamo Luis Felipe, tenho 25 anos de idade, sou acadêmico do curso Análise e Desenvolvimento de Sistemas na faculdade Anhanguera. Gosto muito de programação, Linux, tecnologia em geral e jogos.
                        </p>

                        <a href="#" className='btn btn-primary fw-bold'>Download CV</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About