import Head from 'next/head'
import Image from 'next/image'

export default function Maintenance () {

    return (
        <>
            <Head>
                <title>Mantenimiento preventivo y correctivo en Puebla | {process.env.companyName}</title>
                <meta name="description" content={`${process.env.companyName} le ofrece servicio de mantenimiento preventivo y correctivo de calidad para sus equipos de cómputo y a buen precio.`} />
                
                <meta name="og:type" content="WebSite" />
                <meta name="og:title" content={`Mantenimiento preventivo y correctivo en Puebla | ${process.env.companyName}`} />
                <meta name="og:description" content={`${process.env.companyName} le ofrece servicio de mantenimiento preventivo y correctivo de calidad para sus equipos de cómputo y a buen precio.`} />
                <meta name="og:url" content={process.env.canonicalLink + 'maintenance/'} />
                <meta name="og:site_name" content={process.env.companyName} />

                <meta name="twitter:title" content={`Mantenimiento preventivo y correctivo en Puebla | ${process.env.companyName}`} />
                <meta name="twitter:description" content={`${process.env.companyName} le ofrece servicio de mantenimiento preventivo y correctivo de calidad para sus equipos de cómputo y a buen precio.`} />
                
                <meta name="canonical" content={process.env.canonicalLink + 'maintenance/'} />
                <meta name="alternate" content={process.env.canonicalLink + 'maintenance/'} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    "author": {
                        "@type": "Person",
                        "name": "José Enrique Zempoaltecatl Moyotl"
                    },
                    "description": process.env.companyName + " le ofrece servicio de mantenimiento preventivo y correctivo de calidad para sus equipos de cómputo y a buen precio."
                })}} />
            </Head>

            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">Mantenimiento preventivo y correctivo</h1>
                <p className="text-description content-mb-xm">{process.env.companyName}</p>
                <p className="text-content content-text-justify">Todo equipo de cómputo requiere mantenimiento preventivo y/o correctivo por el uso que se le da, la recomendación es una vez cada 3 meses, con la finalidad de alargar el tiempo de vida útil, lograr óptimo desempeño y de esta forma incrementar su productividad.</p>
            </div>

            <p className="text-subtitle-primary content-my-xb">Servicios que se ofrecen</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Análisis y correción</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_real_time_sync_re_nky7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de diseño resposivo" title="Foto de servicio de diseño resposivo"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Hacemos una revisión física del equipo, se determinan los orígenes de las fallas y se hace una cotización del servicio completo (componentes y servicio).</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Ensamblado de equipos</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_secure_login_pdn4.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de soporte SSL" title="Foto de servicio de soporte SSL"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Si requieres un equipo dedicado para la escuela, trabajo y videojuegos, nos ajustamos a tu presupuesto, buscamos las piezas y armamos tu equipo.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Actualización de componentes</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_code_inspection_bdl7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de código optimizado" title="Foto de servicio de código optimizado"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Analizamos tu equipo, determinamos cuales son los componentes que podríamos cambiar para lograr así una mejora en el rendimiento.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Instalación de programas</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_building_blocks_re_rwls.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de diseño personalizado" title="Foto de servicio de diseño personalizado"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Se instalan programas que son requeridos en escuela o trabajo como paquetería (Autocad, Adobe, Office, Corell) con tres meses de garantía.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Actualización o formateo</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_search_engines_nn-9-e.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de optimización de SEO" title="Foto de servicio de optimización de SEO"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Limpieza completa de la unidad del equipo, se respalda toda información importante o se actualiza el sistema a una versión más reciente.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Limpieza del equipo</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_youtube_tutorial_re_69qc.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de soporte y capacitación" title="Foto de servicio de soporte y capacitación"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Eiminamos el polvo o rastros de pelusa cada unos de los componentes de su equipo y de la carcasa, ensamblamos y aplicamos pasta térmica.</p>
                </div>
            </div>
        </>
    )

}
