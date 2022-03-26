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
                        <Image src="/images/undraw_online_test_gba7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de análisis y corrección" title="Foto de servicio de análisis y corrección"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Hacemos una revisión física del equipo, se determinan los orígenes de las fallas y se hace una cotización del servicio completo (componentes y servicio).</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Ensamblado de equipos</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_bug_fixing_oc-7-a.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de ensamblado de equipos" title="Foto de servicio de ensamblado de equipos"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Si requieres un equipo dedicado para la escuela, trabajo y videojuegos, nos ajustamos a tu presupuesto, buscamos las piezas y armamos tu equipo.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Actualización de componentes</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_dev_productivity_re_fylf.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de actualización de componentes" title="Foto de servicio de actualización de componentes"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Analizamos tu equipo, determinamos cuales son los componentes que podríamos cambiar para lograr así una mejora en el rendimiento.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Instalación de programas</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_cloud_files_wmo8.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de instalación de programas" title="Foto de servicio de instalación de programas"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Se instalan programas que son requeridos en escuela o trabajo como paquetería (Autocad, Adobe, Office, Corell) con tres meses de garantía.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Actualización o formateo</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_engineering_team_u99p.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de actualización o formateo" title="Foto de servicio de actualización o formateo"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Limpieza completa de la unidad del equipo, se respalda toda información importante o se actualiza el sistema a una versión más reciente.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Limpieza del equipo</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_clean_up_ucm0.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de limpieza del equipo" title="Foto de servicio de limpieza del equipo"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Eiminamos el polvo o rastros de pelusa cada unos de los componentes de su equipo y de la carcasa, ensamblamos y aplicamos pasta térmica.</p>
                </div>
            </div>

            <p className="text-subtitle-primary content-my-xb">Galería de servicios</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <Image src="/images/proyects/02-service.jpeg" width="1600" height="900" layout="responsive" alt="Foto de servicio de ensamblado de PC" title="Foto de servicio de ensamblado de PC"/>
                </div>
                <div className="simple-primary-slate">
                    <Image src="/images/proyects/03-service.jpeg" width="1600" height="900" layout="responsive" alt="Foto de seguimiento de servicio de ensamblado de PC" title="Foto de seguimiento de servicio de ensamblado de PC"/>
                </div>
                <div className="simple-primary-slate">
                    <Image src="/images/proyects/01-service.jpeg" width="1600" height="900" layout="responsive" alt="Foto de servicio de mantenimiento preventivo" title="Foto de servicio de mantenimiento preventivo"/>
                </div>
            </div>
        </>
    )

}
