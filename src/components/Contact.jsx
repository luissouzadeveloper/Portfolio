import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='container'>
                <div className="row my-5">
                    <h2 className='fs-1 mb-4'>Contato</h2>

                    <div className="d-flex justify-content-center align-content-center">
                        <div className="social mx-4 text-center">
                            <a href="#">
                                <i class="fa-solid fa-envelope fa-2xl text-primary"></i>
                            </a>
                            <h3 className='my-2 fs-5 text-primary fw-bold'>E-mail</h3>
                        </div>
                        <div className="social mx-4 text-center">
                            <a href="#">
                                <i class="fa-brands fa-linkedin fa-2xl text-primary"></i>
                            </a>
                            <h3 className='my-2 fs-5 text-primary fw-bold'>Linkedin</h3>
                        </div>
                        <div className="social mx-4 text-center">
                            <a href="#">
                                <i class="fa-brands fa-github fa-2xl text-primary"></i>
                            </a>
                            <h3 className='my-2 fs-5 text-primary fw-bold'>Github</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact