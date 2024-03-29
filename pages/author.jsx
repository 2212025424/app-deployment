import Image from 'next/image'
import Head from 'next/head'
import Modal from '../components/SimpleModal/SimpleModal'

export default function Author () {

    return (
        <>
            <Head>
                <title>José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | {process.env.companyName}</title>
                <meta name="description" content={`Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla.`} />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | ${process.env.companyName}`} />
                <meta name="og:description" content={`Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla.`} />
                <meta name="og:url" content={process.env.canonicalLink + 'author/'} />
                <meta name="og:site_name" content={process.env.companyName} />

                <meta name="twitter:title" content={`José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | ${process.env.companyName}`} />
                <meta name="twitter:description" content={`Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla.`} />
                
                <meta name="canonical" content={process.env.canonicalLink + 'author/'} />
                <meta name="alternate" content={process.env.canonicalLink + 'author/'} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@type":"WebSite",
                    "@id":`${process.env.canonicalLink}web-development/`,
                    "url":`${process.env.canonicalLink}web-development/`,
                    "name":`José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | ${process.env.companyName}`,
                    "description":`Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla`,
                    "inLanguage":"es",
                    "publisher": {
                        "@type":"Organization",
                        "@id":`${process.env.canonicalLink}`,
                        "name":`${process.env.companyName}`,
                        "url":`${process.env.canonicalLink}`,
                        "sameAs":"https://www.linkedin.com/in/jose-enrique-zempoaltecatl-moyotl-309362230",
                        "name":`José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | ${process.env.companyName}`,
                        "logo":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                        "logo": {
                            "@type":"ImageObject",
                            "@id":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "inLanguage":"es",
                            "url":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "contentUrl":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "width":"250",
                            "height":"250",
                            "caption":`José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | ${process.env.companyName}`
                        },"image": {
                            "@type":"ImageObject",
                            "@id":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "inLanguage":"es",
                            "url":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "contentUrl":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "width":"250",
                            "height":"250",
                            "caption":`José Enrique Zempoaltecatl Moyotl - Desarrollador web en Puebla | ${process.env.companyName}`,
                        }, "contactPoint": {
                            "@type":"ContactPoint",
                            "telephone":"+52 2213401464",
                            "url":`${process.env.canonicalLink}images/logo/image-codes-line.jpg`,
                            "contactType":"sales"
                        }
                    }
                })}} />
            </Head>

            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">Tarjeta de presentación digital</h1>
                <p className="text-description content-mb-xm">José Enrique Zempoaltecatl Moyotl</p>
                <p className="text-content content-text-justify">Ingeniero en <span className="text-content-highlighted">Tecnologías de la información</span> por <span className="text-content-highlighted">Universidad Politécnica de Puebla</span>, el desarrollo de software es una rama de mi carrera y uno de mis pasatiempos favoritos, me agrada realizar proyectos propios y para empresas, empleando <span className="text-content-highlighted">diferentes tecnologías</span>, sin salir de las que realmente se requieren, dan <span className="text-content-highlighted">soluciones óptimas</span> y se <span className="text-content-highlighted">ajustan al presupuesto</span> presentado.</p>
            </div>

            <p className="text-subtitle-primary content-my-xb">Herramientas de agrado</p>

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

            <div className="grid-layout-content-md content-mt-xb">
                <div>
                    <p className="text-subtitle-primary content-mb-xb">Grados de escolaridad</p>

                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle-secondary content-mb-sm">UPPuebla</h3>
                        <p className="text-description content-text-justify content-mt-sm">Ingeniería, Tecnologías de la información</p>
                        <p className="text-content content-text-justify content-mt-sm">Adquirí conocimientos en lenguajes como JAVA, C, PHP, HTML, CSS y SQL, bases para el manejo de Laravel, MySQL, VSCode y GitHub. Realicé prácticas en redes y de mantenimiento preventivo y correctivo.</p>
                        <p className="text-description content-text-right content-mt-sm">[Sep. 2018 - Dic. 2021]</p>
                    </div>

                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle-secondary content-mb-sm">Centro de Estudios Tecnológicos, Industrial y de Servicio</h3>
                        <p className="text-description content-text-justify content-mt-sm">Técnico, Programación</p>
                        <p className="text-content content-text-justify content-mt-sm">Aprendí a utilizar lo básico de WordPress, realicé mis primeras prácticas de desarrollo web básico. Manejo de base de datos con Microsoft access y terminología de redes y base de datos.</p>
                        <p className="text-description content-text-right content-mt-sm">[Ago. 2015 - Jul. 2018]</p>
                    </div>

                    <div className="simple-primary-slate">
                        <h3 className="text-subtitle-secondary content-mb-sm">ÁBACO Computadoras</h3>
                        <p className="text-description content-text-justify content-mt-sm">Curso, Computación</p>
                        <p className="text-content content-text-justify content-mt-sm">Fue una de las bases para adentrarme más al muno de la tecnología, aprendí a hacer uso básico de los sistemas operativos Windows y Linux. Emplear con distintos ejercicios las herramientas ofimáticas</p>
                        <p className="text-description content-text-right content-mt-sm">[May. 2015 - Ago. 2015]</p>
                    </div>
                </div>
                <div>
                    <p className="text-subtitle-primary content-mb-xb">Historial de trabajo</p>
                    
                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle-secondary content-mb-sm">Desarrollador web</h3>
                        <p className="text-description content-mb-xm">Consultoría contracorriente S.A de C.V</p>
                        <p className="text-content content-text-justify content-mt-sm">Mi actual trabajo después de realizar mis prácticas profesionales desarrollando una aplicación en Next.js para el periódico <a href="https://e-consulta.com/" target="_blank">e-consulta.com</a>, misma que detalla contenido y redirige tráfico dependiendo el dispositivo.</p>
                        <p className="text-description content-text-right content-mt-sm">[Ago. 2021 - Actulmente]</p>
                    </div>
                    
                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle-secondary content-mb-sm">Técnico en computación</h3>
                        <p className="text-description content-mb-xm">H. Ayuntamiento de Coronango Puebla</p>
                        <p className="text-content content-text-justify content-mt-sm">Las actividades que realicé fueron dar mantenimiento preventivo y correctivo a los equipos de cómputo, a la vez resolver dudas con el manejo de herramientas de sistema y de aplicación (Servicio social – UPPuebla).</p>
                        <p className="text-description content-text-right content-mt-sm">[Feb. 2021 - Ago. 2021]</p>
                    </div>
                    
                    <div className="simple-primary-slate">
                        <h3 className="text-subtitle-secondary content-mb-sm">Profesor en desarrollo de web y edición de imágenes</h3>
                        <p className="text-description content-mb-xm">BUSPEC, San Pedro Cholula</p>
                        <p className="text-content content-text-justify content-mt-sm">Apoyé impartiendo dos cursos, uno orientado al desarrollo web básico con herramientas HTML Y CSS, el segundo requería guiar el manejo de herramientas que permiten la edición de imágenes como photoshop.</p>
                        <p className="text-description content-text-right content-mt-sm">[Ene. 2020 - Abr. 2020]</p>
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