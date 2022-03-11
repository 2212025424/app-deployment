import Head from 'next/head'
import Image from 'next/image'
import Modal from '../components/SimpleModal/SimpleModal'

export default function Developed () {
    
    return (
        <>
            <Head>
                <title>Proyectos web desarrollados | {process.env.webSiteName}</title>
                <meta name="description" content={`${process.env.webSiteName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que generan impacto empresarial.`} />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`Proyectos web desarrollados | ${process.env.webSiteName}`} />
                <meta name="og:description" content={`${process.env.webSiteName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que generan impacto empresarial.`} />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:site_name" content={process.env.webSiteName} />

                <meta name="twitter:title" content={`Proyectos web desarrollados | ${process.env.webSiteName}`} />
                <meta name="twitter:description" content={`${process.env.webSiteName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que generan impacto empresarial.`} />
                
                <meta name="canonical" content={process.env.canonicalLink + 'developed-projects/'} />
                <meta name="alternate" content={process.env.canonicalLink + 'developed-projects/'} />
            </Head>

            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">Proyectos web desarrollados</h1>
                <p className="text-description content-mb-xm">{process.env.webSiteName}: José Enrique Zempoaltecatl Moyotl</p>
                <p className="text-content content-text-justify">Los proyectos en los que {process.env.webSiteName} ha tenido la oportunidad de participar son propios y para empresas o negocios externos, los cuales han generado impacto positivo en los usuarios finales y por ende a nuestro clientes.</p>
            </div>

            <p className="text-subtitle-primary content-my-xb">Repositorio de proyectos</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate content-pointer modal-activator-button" data-target="simple-modal-01">
                    <p className="text-subtitle-primary content-text-center">Portal digital e-consulta</p>
                    <p className="text-description content-text-center content-mb-sm">Proyecto externo</p>
                    <p className="text-content content-text-justify content-mb-sm">Desarrollar un portal web de noticias para dispositivos de escritorio que cumpla con los criterios de calidad de la comunidad de google.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                </div>
                <div className="simple-primary-slate content-pointer modal-activator-button" data-target="simple-modal-01">
                    <p className="text-subtitle-primary content-text-center">Portal digital e-consulta</p>
                    <p className="text-description content-text-center content-mb-sm">Proyecto externo</p>
                    <p className="text-content content-text-justify content-mb-sm">Desarrollar un portal web de noticias para dispositivos de escritorio que cumpla con los criterios de calidad de la comunidad de google.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                </div>
                <div className="simple-primary-slate content-pointer modal-activator-button" data-target="simple-modal-01">
                    <p className="text-subtitle-primary content-text-center">Portal digital e-consulta</p>
                    <p className="text-description content-text-center content-mb-sm">Proyecto externo</p>
                    <p className="text-content content-text-justify content-mb-sm">Desarrollar un portal web de noticias para dispositivos de escritorio que cumpla con los criterios de calidad de la comunidad de google.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                </div>
            </div>

            <Modal identifier="simple-modal-01">
                <a className="text-title" href="https://e-consulta.com/" target="_blank">Visita: e-consulta.com</a>
                <div className="content-mt-md"><Image src="/images/proyects/proyect-e-consulta.com.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto e-consulta.com" title="Imagen de portada de proyecto e-consulta.com"/>    </div>
            </Modal>
        </>
    )
}