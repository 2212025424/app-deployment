import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Modal from '../components/SimpleModal/SimpleModal'

export default function Index () {

    return (
        <>
            <Head>
                <title>Tarjeta de presentación de José Enrique | {process.env.companyName}</title>
                <meta name="description" content={`${process.env.companyName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que genern impacto empresarial.`} />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`Tarjeta de presentación de José Enrique | ${process.env.companyName}`} />
                <meta name="og:description" content={`Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla.`} />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:site_name" content={process.env.companyName} />

                <meta name="twitter:title" content={`Tarjeta de presentación de José Enrique | ${process.env.companyName}`} />
                <meta name="twitter:description" content={`Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla.`} />
                
                <meta name="canonical" content={process.env.canonicalLink} />
                <meta name="alternate" content={process.env.canonicalLink} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    "author": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    },
                    "description": "Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla."
                })}} />
            </Head>

            <div className="content-float-left"><Image src="/images/logo/image-codes-line.svg" width="160" height="160" alt={`Logo principal de ${process.env.companyName}`} title={`Logo principal de ${process.env.companyName}`}/></div>
            
            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">{process.env.companyName}</h1>
                <p className="text-description content-mb-sm">Increíble contenido digital</p>
                <p className="text-content content-text-justify">{process.env.companyName} es una empresa, que brinda servicios de tecnologías de la información; <Link href="/web-development"><a>desarrollo web</a></Link> y <Link href="/maintenance"><a>mantenimiento preventivo y correctivo</a></Link> a equipos de cómputo. Nuestros cientes son personas independientes, emprendedores, empresas chicas y grandes. La finalidad es generar impacto en el mundo de la tecnología.</p>
            </div>

            <div className="grid-layout-content-md content-mt-xb">
                <div className="simple-primary-slate">
                    <p className="text-content content-text-justify content-mb-sm"><span className="text-description">Empresa:</span> <br/> {process.env.companyName}</p>
                    <p className="text-content content-text-justify"><span className="text-description">correo:</span> <br/> josenriquezempo@gmail.com</p>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-justify content-mb-sm"><span className="text-description">Autor:</span> <br/> José Enrique Zempoaltecatl Moyotl</p>
                    <p className="text-content content-text-justify"><span className="text-description">Dirección:</span> <br/> San Andrés Cholula, Puebla. México</p>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-justify content-mb-sm"><span className="text-description">Colaborador:</span> <br/> Gaddiel Rubén Rodríguez Palma</p>
                    <p className="text-content content-text-justify"><span className="text-description">Dirección:</span> <br/> Puebla, Puebla. México</p>
                </div>
            </div>

            <p className="text-subtitle-primary content-my-xb">Valores de la empresa</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-text-center content-mb-md">Responsabilidad</h3>
                    <div className="image-responsive-sm"><Image src="/images/responsibility.png" width="160" height="160" alt={`Representa el valor de responsabilidad de ${process.env.companyName}`} title={`Representa el valor de responsabilidad de ${process.env.companyName}`}/></div>
                    <p className="text-content content-text-center content-mt-sm">Con la sociedad como con nuestros clientes. Las tareas encomendadas son entregadas en tiempo y forma.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-text-center content-mb-md">Honestidad</h3>
                    <div className="image-responsive-sm"><Image src="/images/honesty.png" width="160" height="160" alt={`Representa el valor de honestidad de ${process.env.companyName}`} title={`Representa el valor de honestidad de ${process.env.companyName}`}/></div>
                    <p className="text-content content-text-center content-mt-sm">Las actividades que solicita tienen precio equiparado con el trabajo, tiempo y esfuerzo que dedicamos.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-text-center content-mb-md">Dedicación</h3>
                    <div className="image-responsive-sm"><Image src="/images/dedication.png" width="160" height="160" alt={`Representa el valor de dedicación de ${process.env.companyName}`} title={`Representa el valor de dedicación de ${process.env.companyName}`}/></div>
                    <p className="text-content content-text-center">Trabajamos hasta en los mínimos detalles con el fin de hacer entregables que generan impacto positivo.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-text-center content-mb-md">Libertad</h3>
                    <div className="image-responsive-sm"><Image src="/images/freedom.png" width="160" height="160" alt={`Representa el valor de libertad de ${process.env.companyName}`} title={`Representa el valor de libertad de ${process.env.companyName}`}/></div>
                    <p className="text-content content-text-center content-mt-sm">Contemplamos comentarios o ideas constructivas de cada uno de los integrantes en los proyectos.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-text-center content-mb-md">Competitividad</h3>
                    <div className="image-responsive-sm"><Image src="/images/competition.png" width="160" height="160" alt={`Representa el valor de competitividad de ${process.env.companyName}`} title={`Representa el valor de competitividad de ${process.env.companyName}`}/></div>
                    <p className="text-content content-text-center content-mt-sm">Contemplamos su competencia directa, de esta forma lograr que nuestro entregable se posicione.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-text-center content-mb-md">Transparencia</h3>
                    <div className="image-responsive-sm"><Image src="/images/transparency.png" width="160" height="160" alt={`Representa el valor de transparencia de ${process.env.companyName}`} title={`Representa el valor de transparencia de ${process.env.companyName}`}/></div>
                    <p className="text-content content-text-center content-mt-sm">Trabajamos en un marco de confianza interna y externa, así obtenemos una mejor comunicación y entregable.</p>
                </div>
            </div>
            
            <p className="text-subtitle-primary content-my-xb">Herramientas empleadas</p>

            <div className="grid-layout-content-sm">
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">html</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-html.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta html" title="Imágen de herramienta html"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">css</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-css-3.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta css" title="Imágen de herramienta css"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">javascript</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-js.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta javascript" title="Imágen de herramienta javascript"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">bootstrap</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-bootstrap.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta bootstrap" title="Imágen de herramienta bootstrap"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">next.js</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-nextjs.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta next js" title="Imágen de herramienta next js"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">php</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-php.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta php" title="Imágen de herramienta php"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">sql</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-sql.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta sql" title="Imágen de herramienta sql"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">ajax</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-ajax.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta ajax" title="Imágen de herramienta ajax"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">github</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-github.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta github" title="Imágen de herramienta github"/>
                    </div>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-center content-mb-md">VS Code</p>
                    <div className="image-responsive-bg">
                        <Image src="/images/logo-visual-studio.png" width="512" height="512" layout="responsive" alt="Imágen de herramienta visual studio code" title="Imágen de herramienta visual studio code"/>
                    </div>
                </div>
            </div>

            <p className="text-subtitle-primary content-my-xb">Proyectos desarrollados</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-md content-text-center">Sitio web {process.env.companyName}</h3>
                    <p className="text-description content-text-center content-mb-md">Proyecto interno</p>
                    <p className="text-content content-text-justify content-mb-sm">Sitio web que detalle los servicios que se ofertan en la empresa, cumplir criterios usabilidad, accesibilidad y de posicionamiento en buscadores.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 20 de Febrero, 2022.</p>
                    <p className="text-content content-text-justify content-mb-md"><span className="text-description">Fecha termino:</span> 01 de Abril, 2022.</p>
                    <Image src="/images/proyects/proyect-codesline.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto CodesLine" title="Imagen de portada de proyecto CodesLine" className="content-pointer modal-activator-button" data-target="simple-modal-02"/>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-md content-text-center">Portal digital e-consulta</h3>
                    <p className="text-description content-text-center content-mb-md">Proyecto externo</p>
                    <p className="text-content content-text-justify content-mb-sm">Desarrollar un portal web de noticias para dispositivos de escritorio que cumpla con los criterios de calidad de la comunidad de google.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify content-mb-md"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                    <Image src="/images/proyects/proyect-e-consulta.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto e-consulta.com" title="Imagen de portada de proyecto e-consulta.com" className="content-pointer modal-activator-button" data-target="simple-modal-01"/>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-md content-text-center">Restaurant System Management</h3>
                    <p className="text-description content-text-center content-mb-md">Proyecto de práctica</p>
                    <p className="text-content content-text-justify content-mb-sm">Sistema de administración para el sector restaurantero, facilitar la gestión de recursos con roles de usuario: administración, caja y venta.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2020.</p>
                    <p className="text-content content-text-justify content-mb-md"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2020.</p>
                    <Image src="/images/proyects/proyect-rs-mgmt.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto rs-mgmt" title="Imagen de portada de proyecto rs-mgmt" className="content-pointer modal-activator-button" data-target="simple-modal-03"/>
                </div>
            </div>

            <Modal identifier="simple-modal-01">
                <a className="text-title" href="https://e-consulta.com/" target="_blank" rel="nofollow">Visita: e-consulta.com</a>
                <div className="content-mt-md"><Image src="/images/proyects/proyect-e-consulta.png" width="820" height="460" layout="responsive" alt="Imagen en modal de portada de proyecto e-consulta.com" title="Imagen en modal de portada de proyecto e-consulta.com"/></div>
            </Modal>
            <Modal identifier="simple-modal-02">
                <Image src="/images/proyects/proyect-codesline.png" width="820" height="460" layout="responsive" alt="Imagen en modal de portada de proyecto de CodesLine" title="Imagen en modal de portada de proyecto de CodesLine"/>
            </Modal>
            <Modal identifier="simple-modal-03">
                <a className="text-title" href="https://rs-mgmt-cd.000webhostapp.com/" target="_blank" rel="nofollow">Visita: rs-mgmt</a>
                <div className="content-mt-md"><Image src="/images/proyects/proyect-rs-mgmt.png" width="820" height="460" layout="responsive" alt="Imagen en modal de portada de proyecto de rs-mgmt" title="Imagen en modal de portada de proyecto de rs-mgmt"/></div>
            </Modal>

        </>
    )

}