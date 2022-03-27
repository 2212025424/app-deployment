import { useEffect } from 'react'
import Head from 'next/head'
import PresentationCard from '../PresentationCard/PresentationCard'
import LateralMenu from '../LateralMenu/LateralMenu'

export default function DocumentLayout({ children }) {

    useEffect (() => {
        const buttonso = document.querySelectorAll(".modal-activator-button")
        const buttonsc = document.querySelectorAll(".modal-disabling-button")

        buttonso.forEach (button => {
            button.addEventListener("click", function () {
                const modal = document.getElementById(this.getAttribute("data-target"))
                modal.classList.toggle("modal-hidden")
            })
        })

        buttonsc.forEach (button => {
            button.addEventListener("click", function () {
                const modal = document.getElementById(this.getAttribute("data-target"))
                modal.classList.add("modal-hidden")
            })
        })
    }, [children])

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="images/logo/image-codes-line.svg"></link>
                
                <title>{process.env.companyName} empresa de desarrollo web y mantenimiento preventivo y correctivo en Puebla</title>
                <meta name="description" content={`${process.env.companyName} es una empresa que brinda servicios de Tecnologías de la información en todo Puebla, cuenta con desarrollo web y mantenimiento preventivo y correctivo.`} />
                <meta name="keywords" content={`${process.env.companyName}, Desarrollo de software, Desarrollo de aplicaciones, Páginas web, Sitios web, Aplicaciones web, Desarrollo web, Precios de páginas web, Precios de sitios web, Planes de páginas web, Planes de sitios web, Planes de páginas web, Mantenimiento preventivo y correctivo, José Enrique Zempoaltecatl Moyotl`} />
                <meta name="author" content={process.env.companyName} />
                <meta name="copyright" content="José Enrique Zempoaltecatl Moyotl" />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`${process.env.companyName} empresa de desarrollo web y mantenimiento preventivo y correctivo en Puebla`} />
                <meta name="og:description" content={`${process.env.companyName} es una empresa que brinda servicios de Tecnologías de la información en todo Puebla, cuenta con desarrollo web y mantenimiento preventivo y correctivo.`} />
                <meta name="og:image" content={process.env.canonicalLink + 'images/logo/image-codes-line.jpg'} />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:site_name" content={process.env.companyName} />

                <meta name="twitter:title" content={`${process.env.companyName} empresa de desarrollo web y mantenimiento preventivo y correctivo en Puebla`} />
                <meta name="twitter:description" content={`${process.env.companyName} es una empresa que brinda servicios de Tecnologías de la información en todo Puebla, cuenta con desarrollo web y mantenimiento preventivo y correctivo.`} />
                <meta name="twitter:image" content={process.env.canonicalLink + 'images/logo/image-codes-line.jpg'} />
                <meta name="twitter:site" content="@kike_zempo" />
                <meta name="twitter:creator" content="@kike_zempo" />
                
                <meta name="canonical" content={process.env.canonicalLink} />
                <meta name="alternate" content={process.env.canonicalLink} />
                
                <meta name="robots" content="index, follow" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "Corporation",
                    "url": process.env.canonicalLink,
                    "name": process.env.companyName,
                    "legalName": process.env.companyName,
                    "description": process.env.companyName + ' es una empresa que brinda servicios de Tecnologías de la información en todo Puebla, cuenta con desarrollo web y mantenimiento preventivo y correctivo.',
                    "image": process.env.canonicalLink + 'images/logo/image-codes-line.jpg',
                    "logo": process.env.canonicalLink + 'images/logo/image-codes-line.jpg',
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "bestRating": "100",
                        "ratingCount": "24",
                        "ratingValue": "87"
                    },
                    "alumi": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    }
                })}} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "Organization",
                    "@id": process.env.canonicalLink,
                    "name": process.env.companyName,
                    "url": process.env.canonicalLink,
                    "logo": process.env.canonicalLink + 'images/logo/image-codes-line.jpg',
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+52 2213401464",
                        "url": `${process.env.canonicalLink + 'images/logo/logo-codes-line.jpg'}`,
                        "contactType": "sales"
                    },
                    "alumi": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    }
                })}} />

                <meta name="google-site-verification" content="zwF0PsLuRe_6HxVH_9vn0WodMNqtbAZ3Ry80_4eptWc" />
                <script src="/static/html-events/html-events.js" />
            </Head>
            <div className="wrap-template">
                <section className="wrap-template-target">
                    <PresentationCard/>
                </section>
                <main className="hidden-scroll-bar wrap-template-wrap">
                    <div className="wrap-template-content">
                        <div>
                            {children}
                        </div>
                        <footer className="wrap-template-footer">
                            <div className="wrap-template-copy">
                                <p>© 2022 Todos los derechos reservados.</p>
                            </div>
                            <div className="wrap-template-copy">
                                <p>Email: josenriquezempo@gmail.com</p>
                            </div>
                        </footer>
                    </div>
                </main>
                <section className="wrap-template-menu">
                    <LateralMenu/>
                </section>
            </div>
        </>
    )
}