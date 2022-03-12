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
            <div className="hidden-scroll-bar lateral-menu-body">
                <Link href="/web-development">
                    <a className="wrap-social-icon content-my-xm" alt="Enlace a paquetes de desarrollo web" title="Enlace a paquetes de desarrollo web">
                        <i className="social-icon icon-basket"></i>
                    </a>
                </Link>
                <Link href="/developed-projects">
                    <a className="wrap-social-icon content-my-xm" alt="Enlace a portafolio de proyectos" title="Enlace a portafolio de proyectos">
                        <i className="social-icon icon-folder"></i>
                    </a>
                </Link>
                <Link href="/author" alt="Enlace a tarjeta de presentación" title="Enlace a tarjeta de presentación">
                    <a className="wrap-social-icon content-my-xm">
                        <i className="social-icon icon-user"></i>
                    </a>
                </Link>
                <span className="wrap-social-icon content-my-xm" alt="Boton para compartir sitio" title="Boton para compartir sitio">
                    <i className="social-icon icon-share"></i>
                </span>
                <span className="wrap-social-icon dark-mode-activator content-pointer" alt="Boton para activar y desactivar modo obscuro" title="Boton para activar y desactivar modo obscuro">
                    <i className="social-icon icon-moon-inv"></i>
                </span>
            </div>
        </div>
    )
}