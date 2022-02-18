import Image from 'next/image'

export default function Index () {
    return (
        <div>

            {/* Tarjeta de presentación principal */}

            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">Increíble contenido digital</h1>
                <p className="text-description content-mb-xm">José Enrique Zempoaltecatl Moyotl</p>
                <p className="text-content content-text-justify">Ingeniero en <span className="text-content-highlighted">Tecnologías de la información</span> por <span className="text-content-highlighted">Universidad Politécnica de Puebla</span>, el desarrollo de software es una rama de mi carrera y uno de mis pasatiempos favoritos, me agrada realizar proyectos propios y para empresas, empleando <span className="text-content-highlighted">diferentes tecnologías</span>, sin salir de las que realmente se requieren, dan <span className="text-content-highlighted">soluciones óptimas</span> y se <span className="text-content-highlighted">ajustan al presupuesto</span> presentado.</p>
            </div>

            {/* Herramientas de agrado */}

            <p className="text-subtitle content-my-xb">Herramientas de agrado</p>

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
            
            {/* Linea de tiempo, escuela y trabajo */}

            <div className="grid-layout-content-md content-mt-xb">
                <div>
                    <p className="text-subtitle content-mb-xb">Grados de escolaridad</p>

                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle content-mb-sm">UPPuebla</h3>
                        <p className="text-description content-text-justify content-mt-sm">Ingeniería, Tecnologías de la información</p>
                        <p className="text-content content-text-justify content-mt-sm">Adquirí conocimientos en lenguajes como JAVA, C, PHP, HTML, CSS y SQL, bases para el manejo de Laravel, MySQL, VSCode y GitHub. Realicé prácticas en redes y de mantenimiento preventivo y correctivo.</p>
                        <p className="text-description content-text-right content-mt-sm">[Sep. 2018 - Dic. 2021]</p>
                    </div>

                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle content-mb-sm">Centro de Estudios Tecnológicos, Industrial y de Servicio</h3>
                        <p className="text-description content-text-justify content-mt-sm">Técnico, Programación</p>
                        <p className="text-content content-text-justify content-mt-sm">Aprendí a utilizar lo básico de WordPress, realicé mis primeras prácticas de desarrollo web básico. Manejo de base de datos con Microsoft access y terminología de redes y base de datos.</p>
                        <p className="text-description content-text-right content-mt-sm">[Ago. 2015 - Jul. 2018]</p>
                    </div>

                    <div className="simple-primary-slate">
                        <h3 className="text-subtitle content-mb-sm">ÁBACO Computadoras</h3>
                        <p className="text-description content-text-justify content-mt-sm">Curso, Computación</p>
                        <p className="text-content content-text-justify content-mt-sm">Aprendí a hacer uso de las herramientas propias del sistema operativo Windows y herramientas ofimáticas.</p>
                        <p className="text-description content-text-right content-mt-sm">[May. 2015 - Ago. 2015]</p>
                    </div>
                </div>
                <div>
                    <p className="text-subtitle content-mb-xb">Historial de trabajo</p>
                    
                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle content-mb-sm">Desarrollador web</h3>
                        <p className="text-description content-mb-xm">Consultoría contracorriente S.A de C.V</p>
                        <p className="text-content content-text-justify content-mt-sm">Mi actual trabajo después de realizar mis prácticas profesionales desarrollando una aplicación en Next.js para el periódico <a href="https://e-consulta.com/" target="_blank">e-consulta.com</a>, misma que detalla contenido y redirige tráfico dependiendo el dispositivo.</p>
                        <p className="text-description content-text-right content-mt-sm">[Ago. 2021 - Actulmente]</p>
                    </div>
                    
                    <div className="simple-primary-slate content-mb-xb">
                        <h3 className="text-subtitle content-mb-sm">Técnico en computación</h3>
                        <p className="text-description content-mb-xm">H. Ayuntamiento de Coronango Puebla</p>
                        <p className="text-content content-text-justify content-mt-sm">Las actividades que realicé fueron dar mantenimiento preventivo y correctivo a los equipos de cómputo, a la vez resolver dudas con el manejo de herramientas de sistema y de aplicación (Servicio social – UPPuebla).</p>
                        <p className="text-description content-text-right content-mt-sm">[Feb. 2021 - Ago. 2021]</p>
                    </div>
                    
                    <div className="simple-primary-slate">
                        <h3 className="text-subtitle content-mb-sm">Profesor en desarrollo de web y edición de imágenes</h3>
                        <p className="text-description content-mb-xm">BUSPEC, San Pedro Cholula</p>
                        <p className="text-content content-text-justify content-mt-sm">Apoyé impartiendo dos cursos, uno orientado al desarrollo web básico con herramientas HTML Y CSS, el segundo requería guiar el manejo de herramientas que permiten la edición de imágenes como photoshop.</p>
                        <p className="text-description content-text-right content-mt-sm">[Ene. 2020 - Abr. 2020]</p>
                    </div>
                </div>
            </div>
        </div>

    )
}