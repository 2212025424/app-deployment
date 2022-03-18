import Link from 'next/link'
import Image from 'next/image'

export default function LateralMenu () {
    return (
        <div className="lateral-menu">
            <div className="lateral-menu-head">
                <div className="image-responsive-md">
                    <Link href="/"><a className="content-absolute-center">
                        <Image src="/images/logo/image-codes-line.svg" width="50" height="50" alt={`Logo secundario de ${process.env.companyName}`} title={`Logo secundario de ${process.env.companyName}`}/>
                    </a></Link>
                </div>
            </div>
            <div className="lateral-menu-body">
                <Link href="/web-development">
                    <a className="wrap-social-icon content-my-xm" alt="Enlace a paquetes de desarrollo web" title="Enlace a paquetes de desarrollo web">
                        <i className="social-icon icon-basket"></i>
                        <div className="wrap-social-icon-description">
                            Desarrollo web
                        </div>
                    </a>
                </Link>
                <Link href="/developed-projects">
                    <a className="wrap-social-icon content-my-xm" alt="Enlace a portafolio de proyectos" title="Enlace a portafolio de proyectos">
                        <i className="social-icon icon-folder"></i>
                        <div className="wrap-social-icon-description">
                            Nuestros proyectos
                        </div>
                    </a>
                </Link>
                <Link href="/author" alt="Enlace a tarjeta de presentación" title="Enlace a tarjeta de presentación">
                    <a className="wrap-social-icon content-my-xm">
                        <i className="social-icon icon-user"></i>
                        <div className="wrap-social-icon-description">
                            Perfil digital
                        </div>
                    </a>
                </Link>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a linkedin" title="Enlace a linkedin">
                    <i className="social-icon icon-link"></i>
                    <div className="wrap-social-icon-description">
                        Copia enlace
                    </div>
                </a>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a facebook" title="Enlace a facebook">
                    <i className="social-icon icon-facebook"></i>
                    <div className="wrap-social-icon-description">
                        Comparte facebook
                    </div>
                </a>
                <a href="#" target="_blank" className="wrap-social-icon content-mx-xm" alt="Enlace a whatsapp" title="Enlace a whatsapp">
                    <i className="social-icon icon-whatsapp"></i>
                    <div className="wrap-social-icon-description">
                        Comparte whatsapp
                    </div>
                </a>
            </div>
            <div className="lateral-menu-fotter">
                <span className="wrap-social-icon dark-mode-activator content-pointer" alt="Boton para activar y desactivar modo obscuro" title="Boton para activar y desactivar modo obscuro">
                    <i className="social-icon icon-moon-inv"></i>
                </span>
            </div>
        </div>
    )
}