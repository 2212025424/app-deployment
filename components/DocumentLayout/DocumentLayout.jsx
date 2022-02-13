import Head from 'next/head'
import PresentationCard from '../PresentationCard/PresentationCard'

export default function DocumentLayout({ children }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <title>Currículum vitae de José Enrique Zempoaltecatl Moyotl - Desarrollo de software</title>
                <link rel="shortcut icon" href="favicon.png"></link>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="Currículum vitae de Jose Enrique Zempoaltecatl Moyotl, quien es desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por UPPuebla."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type": "WebPage","headline": "Currículum vitae de José Enrique Zempoaltecatl Moyotl - Desarrollo de software", "description": "Currículum vitae de Jose Enrique Zempoaltecatl Moyotl, quien es desarrollador de software con ingeniería en Tecnologías de la información desde el 2021 por UPPuebla.","alternateName": "cv Jose Enrique","url": `${process.env.canonicalLink}`,"ImageObject": `${process.env.canonicalLink + 'images/kike_zempo_profile.jpg'}`})}} />
                {/* <meta name="google-site-verification" content="..." />*/}
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