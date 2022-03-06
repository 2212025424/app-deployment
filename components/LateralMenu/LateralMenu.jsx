import Link from 'next/link'

export default function LateralMenu () {
    return (
        <div className="lateral-menu">
            <div className="lateral-menu-head">
                <span className="wrap-social-icon dark-mode-activator" alt="Boton para activar y desactivar modo obscuro" title="Boton para activar y desactivar modo obscuro">
                    <i className="social-icon icon-moon-inv"></i>
                </span>
            </div>
            <div className="hidden-scroll-bar lateral-menu-body">
                <Link href="/" alt="Enlace a tarjeta de presentación" title="Enlace a tarjeta de presentación">
                    <a className="wrap-social-icon content-my-xm">
                        <i className="social-icon icon-user"></i>
                    </a>
                </Link>
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
                <Link href="/">
                    <a className="wrap-social-icon content-my-xm" alt="Enlace a blog comunitario" title="Enlace a blog comunitario">
                        <i className="social-icon icon-comment"></i>
                    </a>
                </Link>
                <a href="#" target="_blank" className="wrap-social-icon content-my-xm" alt="Boton para compartir sitio" title="Boton para compartir sitio">
                    <i className="social-icon icon-share"></i>
                </a>
            </div>
        </div>
    )
}