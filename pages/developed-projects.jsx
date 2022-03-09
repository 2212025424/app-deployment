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

            <p className="text-subtitle-primary content-mb-xb">Proyectos web desarrollados</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <Image className="modal-activator-button content-pointer" data-target="simple-modal-01" src="/images/proyects/proyect-e-consulta.com.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto e-consulta.com" title="Imagen de portada de proyecto e-consulta.com"/>
                    <h3 className="content-text-center content-my-xm"><a className="text-subtitle-primary" href="https://e-consulta.com/" target="_blank">e-consulta.com</a></h3>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Cliente:</span> Periódico digital e-consulta.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                </div>
                <div className="simple-primary-slate">
                    <Image className="modal-activator-button content-pointer" data-target="simple-modal-01" src="/images/proyects/proyect-e-consulta.com.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto e-consulta.com" title="Imagen de portada de proyecto e-consulta.com"/>
                    <h3 className="content-text-center content-my-xm"><a className="text-subtitle-primary" href="https://e-consulta.com/" target="_blank">e-consulta.com</a></h3>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Cliente:</span> Periódico digital e-consulta.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                </div>
                <div className="simple-primary-slate">
                    <Image className="modal-activator-button content-pointer" data-target="simple-modal-01" src="/images/proyects/proyect-e-consulta.com.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto e-consulta.com" title="Imagen de portada de proyecto e-consulta.com"/>
                    <h3 className="content-text-center content-my-xm"><a className="text-subtitle-primary" href="https://e-consulta.com/" target="_blank">e-consulta.com</a></h3>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Cliente:</span> Periódico digital e-consulta.</p>
                    <p className="text-content content-text-justify content-mb-xm"><span className="text-description">Fecha inicio:</span> 01 de Septiembre, 2021.</p>
                    <p className="text-content content-text-justify"><span className="text-description">Fecha termino:</span> 05 de Diciembre, 2021.</p>
                </div>
            </div>

            <Modal identifier="simple-modal-01">
                <Image src="/images/proyects/proyect-e-consulta.com.png" width="820" height="460" layout="responsive" alt="Imagen de portada de proyecto e-consulta.com" title="Imagen de portada de proyecto e-consulta.com"/>    
            </Modal>
        </>
    )
}