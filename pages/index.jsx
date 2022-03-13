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
                <p className="text-content content-text-justify">Es una empresa con perfil digital, misma que brinda servicios de tecnologías de la información como desarrollo web para emprendedores, negocios estables, empresas pequeñas y grandes, con la finalidad de generar impacto positivo en el mundo de la tecnología.</p>
            </div>

            <p className="text-subtitle-primary content-my-xb">Presentación inicial</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Misión</h3>
                    <p className="text-content content-text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam. Harum dolores qui quaerat ullam dicta facilis quae, voluptatibus, numquam quos distinctio doloremque sed dignissimos, optio molestias. Quasi, odit. Minima.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Visión</h3>
                    <p className="text-content content-text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi neque ipsam deleniti facere aspernatur beatae maxime? Cum libero impedit ipsa, mollitia velit dolore magnam laudantium, ea voluptas beatae autem consequatur.</p>
                </div>
            </div>

            <p className="text-subtitle-primary content-my-xb">Información de contacto</p>
        </>
    )

}