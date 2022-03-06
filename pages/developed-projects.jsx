import Head from 'next/head'

export default function Developed () {
    
    return (
        <>
            <Head>
                <title>Proyectos web desarrollados | {process.env.webSiteName}</title>
                <meta name="description" content={`${process.env.webSiteName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que genern impacto empresarial.`} />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`Proyectos web desarrollados | ${process.env.webSiteName}`} />
                <meta name="og:description" content={`${process.env.webSiteName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que genern impacto empresarial.`} />
                <meta name="og:url" content={process.env.canonicalLink} />
                <meta name="og:site_name" content={process.env.webSiteName} />

                <meta name="twitter:title" content={`Proyectos web desarrollados | ${process.env.webSiteName}`} />
                <meta name="twitter:description" content={`${process.env.webSiteName} es una empresa que ha desarrollado diferentes proyectos web propios y para empresas externas, los cuales ha entregado en tiempo y forma, pero sobre todo que genern impacto empresarial.`} />
                
                <meta name="canonical" content={process.env.canonicalLink + 'developed-projects/'} />
                <meta name="alternate" content={process.env.canonicalLink + 'developed-projects/'} />
            </Head>

            <h1>Repositorio de proyectos</h1>
        </>
    )
}