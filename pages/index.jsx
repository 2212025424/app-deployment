import Image from 'next/image'
import Head from 'next/head'

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
                <p className="text-content content-text-justify">{process.env.companyName} es una empresa, que brinda servicios de tecnologías de la información; desarrollo web y mantenimiento preventivo y correctivo a equipos de cómputo. Nuestros cientes son personas independientes, emprendedores, empresas chicas y grandes. La finalidad es generar impacto en el mundo de la tecnología.</p>
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

            <p className="text-subtitle-primary content-my-xb">Información de contacto</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <p className="text-content content-text-justify content-mb-sm"><span className="text-description">Empresa:</span> <br/> {process.env.companyName}</p>
                    <p className="text-content content-text-justify"><span className="text-description">Dirección:</span> <br/> San Andrés Cholula, Puebla. México</p>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-justify content-mb-sm"><span className="text-description">Autor:</span> <br/> José Enrique Zempoaltecatl Moyotl</p>
                    <p className="text-content content-text-justify"><span className="text-description">Dirección:</span> <br/> San Andrés Cholula, Puebla. México</p>
                </div>
                <div className="simple-primary-slate">
                    <p className="text-content content-text-justify content-mb-sm"><span className="text-description">Número:</span> <br/> 2213401454</p>
                    <p className="text-content content-text-justify"><span className="text-description">Correo:</span> <br/> josenriquezempo@gmail.com</p>
                </div>
            </div>
        </>
    )

}