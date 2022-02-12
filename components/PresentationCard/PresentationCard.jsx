import Image from 'next/image'

export default function () {
    return (
        <div className="presentation-card">
            <div className="presentation-card-head">
                <div className="presentation-card-head-image-content content-mb-md">
                    <Image src={'/images/kike_zempo_profile.jpg'} width={100} height={100} layout="responsive" className="presentation-card-head-image" alt="Foto de perfil de Jose Enrique" title="Foto de perfil de Jose Enrique" priority={true}/>
                </div>
                <div className="presentation-card-head-name content-mb-sm">Ing. José Enrique</div>
                <div className="presentation-card-head-profile">
                    Tecnologías de la información <br/>Desarrollador web
                </div>
            </div>
            <div className="hidden-scroll-bar presentation-card-body">
                <div className="presentation-card-body-section">
                    <p className="content-mb-sm">País: <span className="content-float-rigth">México</span></p>
                    <p className="content-mb-sm">Ciudad: <span className="content-float-rigth">Puebla</span></p>
                    <p>Edad: <span className="content-float-rigth">23 años</span></p>
                </div>
                <hr className="simple-separator-sm content-my-xb"/>
                <div className="presentation-card-body-section">
                    <div className="content-mb-xb">
                        <div className="content-mb-sm">html: <span className="content-float-rigth">95 %</span></div>
                        <div className="percent-skill-html percent-skill-target"></div>
                    </div>
                    <div className="content-mb-xb">
                        <div className="content-mb-sm">css: <span className="content-float-rigth">85 %</span></div>
                        <div className="percent-skill-css percent-skill-target"></div>
                    </div>
                    <div className="content-mb-xb">
                        <div className="content-mb-sm">javascript: <span className="content-float-rigth">80 %</span></div>
                        <div className="percent-skill-js percent-skill-target"></div>
                    </div>
                    <div className="content-mb-xb">
                        <div className="content-mb-sm">php: <span className="content-float-rigth">75 %</span></div>
                        <div className="percent-skill-php percent-skill-target"></div>
                    </div>
                    <div>
                        <div className="content-mb-sm">sql: <span className="content-float-rigth">85 %</span></div>
                        <div className="percent-skill-sql percent-skill-target"></div>
                    </div>
                </div>
                <hr className="simple-separator-sm content-my-xb"/>
                <div className="presentation-card-body-section">
                    <div className="content-mb-sm"><i className="icon-thumbs-up"></i> Herramientas: GutHub</div>
                    <div className="content-mb-sm"><i className="icon-thumbs-up"></i> Frontend: Bootstrap, Sass</div>
                    <div className="content-mb-sm"><i className="icon-thumbs-up"></i> Backend: Laravel, Next JS</div>
                </div>
                <hr className="simple-separator-sm content-mt-xb"/>
                <div className="content-mt-sm">
                    <a href="#" target="_blank" className="simple-button" alt="Descargar curricul vitae" title="Descargar curricul vitae">Descargar CV</a>
                </div>
            </div>
            <div className="presentation-card-footer">
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a direccion de correo" title="Enlace a direccion de correo">
                    <i className="social-icon icon-mail-alt"></i>
                </a>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a facebook" title="Enlace a facebook">
                    <i className="social-icon icon-facebook"></i>
                </a>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a whatsapp" title="Enlace a whatsapp">
                    <i className="social-icon icon-whatsapp"></i>
                </a>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a linkedin" title="Enlace a linkedin">
                    <i className="social-icon icon-linkedin-squared"></i>
                </a>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a github" title="Enlace a github">
                    <i className="social-icon icon-github-squared"></i>
                </a>
            </div>
        </div>
    )
}