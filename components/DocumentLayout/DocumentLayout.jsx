import Head from 'next/head'
import PresentationCard from '../PresentationCard/PresentationCard'

export default function DocumentLayout({ children }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href="/images/logo/image-codes-line.svg"></link>
                
                <title>Tarjeta de presentación | José Enrique Zempoaltecatl Moyotl</title>
                <meta name="description" content="Tarjeta de presentación de Jose Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla."/>
                <meta name="keywords" content="Desarrollo de software, Desarrollo we aplicaciones, Aplicaciones web, Desarrollo web, Páginas web, Desarrollo de páginas web, Precios de páginas web,  Panes de páginas web, Tarjeta presentación de José Enrique Zempoaltecatl Moyotl, José Enrique Zempoaltecatl Moyotl" />
                <meta name="author" content={process.env.webSiteName} />
                <meta name="copyright" content="José Enrique Zempoaltecatl Moyotl" />
                
                <meta name="og:title" content="Tarjeta de presentación de José Enrique Zempoaltecatl Moyotl" />
                <meta name="og:type" content="WebSite" />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:description" content="Tarjeta de presentación de Jose Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla." />
                <meta name="og:site_name" content={process.env.webSiteName} />
                <meta name="og:image" content="/images/logo/logo-codes-line.jpg" />
                
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    "author": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    },
                    "description": "Tarjeta de presentación de Jose Enrique Zempoaltecatl Moyotl, desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por universidad Politécnica de Puebla."
                })}} />
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
                    Ah
                </section>
            </div>
        </div>
    )
}