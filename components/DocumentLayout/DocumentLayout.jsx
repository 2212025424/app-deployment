import Head from 'next/head'
import PresentationCard from '../PresentationCard/PresentationCard'
import LateralMenu from '../LateralMenu/LateralMenu'

export default function DocumentLayout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="/images/logo/image-codes-line.svg"></link>
                
                <title>Desarrollo web | {process.env.webSiteName}</title>
                <meta name="description" content={`${process.env.webSiteName} es una empresa de desarrollo web, misma que es capas de apoyarlo con proyectos en páginas, sitio y aplicaciones web complejas básicas y complejas con tecnología que se adapte a sus necesidades y presupuesto.`} />
                <meta name="keywords" content={`${process.env.webSiteName}, Desarrollo de software, Desarrollo de aplicaciones, Páginas web, Sitios web, Aplicaciones web, Desarrollo web, Precios de páginas web, Precios de sitios web, Planes de páginas web, Planes de sitios web, Planes de páginas web, José Enrique Zempoaltecatl Moyotl`} />
                <meta name="author" content={process.env.webSiteName} />
                <meta name="copyright" content="José Enrique Zempoaltecatl Moyotl" />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`Desarrollo web | ${process.env.webSiteName}`} />
                <meta name="og:description" content={`${process.env.webSiteName} es una empresa de desarrollo web, misma que es capas de apoyarlo con proyectos en páginas, sitio y aplicaciones web complejas básicas y complejas con tecnología que se adapte a sus necesidades y presupuesto.`} />
                <meta name="og:image" content={process.env.canonicalLink + '/images/logo/image-codes-line.jpg'} />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:site_name" content={process.env.webSiteName} />

                <meta name="twitter:title" content={`Desarrollo web | ${process.env.webSiteName}`} />
                <meta name="twitter:description" content={`${process.env.webSiteName} es una empresa de desarrollo web, misma que es capas de apoyarlo con proyectos en páginas, sitio y aplicaciones web complejas básicas y complejas con tecnología que se adapte a sus necesidades y presupuesto.`} />
                <meta name="twitter:image" content={process.env.canonicalLink + '/images/logo/image-codes-line.jpg'} />
                <meta name="twitter:site" content="@kike_zempo" />
                <meta name="twitter:creator" content="@kike_zempo" />
                
                <meta name="canonical" content={process.env.canonicalLink} />
                <meta name="alternate" content={process.env.canonicalLink} />
                
                <meta name="robots" content="index, follow"  />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "Coporation",
                    "url": process.env.canonicalLink,
                    "name": process.env.webSiteName,
                    "legalName": process.env.webSiteName,
                    "description": process.env.webSiteName + ' es una empresa de desarrollo web, misma que es capas de apoyarlo con proyectos en páginas, sitio y aplicaciones web complejas básicas y complejas con tecnología que se adapte a sus necesidades y presupuesto.',
                    "image": process.env.canonicalLink + '/images/logo/image-codes-line.jpg',
                    "alumi": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    }
                })}} />

                <meta name="google-site-verification" content="gzPUwKxJdQh7OpY0vihIK4GXSGHgjCy8HfyVZpeNOsg" />

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