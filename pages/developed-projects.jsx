import Head from 'next/head'
import Image from 'next/image'
import Modal from '../components/SimpleModal/SimpleModal'

export default function Developed () {
    
    return (
        <>
            <Head>
                <title>Proyectos web desarrollados | {process.env.companyName}</title>
                <meta name="description" content={`${process.env.companyName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que generan impacto empresarial.`} />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`Proyectos web desarrollados | ${process.env.companyName}`} />
                <meta name="og:description" content={`${process.env.companyName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que generan impacto empresarial.`} />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:site_name" content={process.env.companyName} />
                
                <meta name="twitter:title" content={`Proyectos web desarrollados | ${process.env.companyName}`} />
                <meta name="twitter:description" content={`${process.env.companyName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que generan impacto empresarial.`} />
                
                <meta name="canonical" content={process.env.canonicalLink + 'developed-projects/'} />
                <meta name="alternate" content={process.env.canonicalLink + 'developed-projects/'} />
            </Head>

            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">Proyectos web desarrollados</h1>
                <p className="text-description content-mb-xm">{process.env.companyName}</p>
                <p className="text-content content-text-justify">Los proyectos en los que {process.env.companyName} ha tenido la oportunidad de participar son propios y para empresas o negocios externos, los cuales han generado impacto positivo en los usuarios finales y por ende a nuestro clientes.</p>
            </div>

            <p className="text-subtitle-primary content-my-xb">Repositorio de proyectos</p>

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