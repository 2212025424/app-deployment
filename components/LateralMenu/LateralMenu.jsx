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
                <div>
                    <Link href="/">
                        <a className="wrap-social-icon content-my-xm" alt="Enlace a paquetes de desarrollo web" title="Enlace a paquetes de desarrollo web">
                            <i className="social-icon icon-home"></i>
                            <div className="wrap-social-icon-description">
                                Portada inicial
                            </div>
                        </a>
                    </Link>
                    <Link href="/web-development">
                        <a className="wrap-social-icon content-my-xm" alt="Enlace a paquetes de desarrollo web" title="Enlace a paquetes de desarrollo web">
                            <i className="social-icon icon-code"></i>
                            <div className="wrap-social-icon-description">
                                Desarrollo web
                            </div>
                        </a>
                    </Link>
                    <Link href="/maintenance">
                        <a className="wrap-social-icon content-my-xm" alt="Enlace a paquetes de desarrollo web" title="Enlace a paquetes de desarrollo web">
                            <i className="social-icon icon-desktop"></i>
                            <div className="wrap-social-icon-description">
                                Mantenimiento
                            </div>
                        </a>
                    </Link>
                    <a href="tel:+522213401464" className="wrap-social-icon" alt={`Llamada directa a ${process.env.companyName}`} title={`Llamada directa a ${process.env.companyName}`}>
                        <i className="social-icon icon-phone-squared"></i>
                        <div className="wrap-social-icon-description">
                            Llamada directa
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+522213401464&text=Requiero%20m%C3%A1s%20informaci%C3%B3n%20de" target="_blank" className="wrap-social-icon" alt="Enlace a whatsapp" title="Enlace a whatsapp">
                        <i className="social-icon icon-whatsapp"></i>
                        <div className="wrap-social-icon-description">
                            Envía mensaje
                        </div>
                    </a>
                    <span className="wrap-social-icon dark-mode-activator content-pointer" alt="Boton para activar y desactivar modo obscuro" title="Boton para activar y desactivar modo obscuro">
                        <i className="social-icon icon-moon-inv"></i>
                        <div className="wrap-social-icon-description">
                            obscuro/claro
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}