import Image from 'next/image'

export default function Index () {
    return (
        <div>

            {/* Tarjeta de presentación principal */}

            <div className="simple-primary-slate">
                <h1 className="text-title content-mb-xm">Increíble contenido digital</h1>
                <p className="text-description content-mb-xm">José Enrique Zempoaltecatl Moyotl</p>
                <p className="text-content content-text-justify">Ingeniero en <span className="text-content-highlighted">Tecnologías de la información</span> por <span className="text-content-highlighted">Universidad Politécnica de Puebla</span>, el desarrollo de software es una rama de mi carrera y uno de mis pasa tiempos favoritos, me agrada realizar proyectos propios y para empresas, empleando <span className="text-content-highlighted">diferentes tecnologías</span>, sin salir de las que realmente se requieren, dan <span className="text-content-highlighted">soluciones óptimas</span> y se <span className="text-content-highlighted">ajustan al presupuesto</span> presentado.</p>
            </div>

            {/* A cerca del servicio */}

            <p className="text-subtitle content-my-xb">Todo servicio incluye</p>

            <div className="grid-component-min-220">
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle content-mb-sm">Diseño responsivo</h3>
                    <div className="image-responsive">
                        <Image src="/images/undraw_real_time_sync_re_nky7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de diseño resposivo" title="Foto de servicio de diseño resposivo"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">En todo diseño se contempla que las interfaces puedan adaptarse a las distintas medidas de los dispositivos con los que un usuario podría acceder a su sitio web.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle content-mb-sm">Diseño personalizado</h3>
                    <div className="image-responsive">
                        <Image src="/images/undraw_building_blocks_re_rwls.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de diseño personalizado" title="Foto de servicio de diseño personalizado"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Con base a sus necesidades y criterios se determinan los diseños apropiados, contemplando criterios de usabilidad y accesibilidad.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle content-mb-sm">Optimización de SEO</h3>
                    <div className="image-responsive">
                        <Image src="/images/undraw_search_engines_nn-9-e.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de optimización de SEO" title="Foto de servicio de optimización de SEO"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Se contempla cada uno de los criterios de calidad actuales propuestos por la comunidad de Google, que tienen como finalidad servir contenido de forma optima.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle content-mb-sm">Código optimizado</h3>
                    <div className="image-responsive">
                        <Image src="/images/undraw_code_inspection_bdl7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de código optimizado" title="Foto de servicio de código optimizado"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Cada una de sus solicitudes se desarrollan con las mejores prácticas de programación con la finalidad de hacer que su aplicación funcione de la manera más eficiente.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle content-mb-sm">Soporte y capacitación</h3>
                    <div className="image-responsive">
                        <Image src="/images/undraw_youtube_tutorial_re_69qc.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de soporte y capacitación" title="Foto de servicio de soporte y capacitación"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Le damos la facilidad de poder hacer cambios una vez finalizado el proyecto y lo capacitación sobre el uso del mismo y de los terminos más relevantes.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle content-mb-sm">Soporte SSL</h3>
                    <div className="image-responsive">
                        <Image src="/images/undraw_secure_login_pdn4.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de soporte SSL" title="Foto de servicio de soporte SSL"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">En la puesta en producción del proyecto, agregamos soporte SSL para así tener más seguridad que todo nuestro contenido esté seguro ante cualquier ataque.</p>
                </div>
            </div>

            {/* Principales planes de conveniencia */}
        
            <p className="text-subtitle content-my-xb">Planes de desarrollo</p>

            <div className="grid-component-min-220">
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-content">Plan básico</h3>
                    <p className="text-description content-mt-sm">Ideal para negocios con la finalidad de dar a conocer su marca</p>
                    <h4 className="text-primary content-my-md">$ 5,000</h4>
                    <p className="text-content content-mb-xm">Hasta 4 secciones estáticas</p>
                    <p className="text-content content-mb-xm">Hosting eficiente por un año</p>
                    <p className="text-content content-mb-xm">Dominio por un año</p>
                    <p className="text-content content-mb-xm">Enlace a redes sociales</p>
                    <p className="text-content content-mb-xm">Funcionalidad de compartir sitio</p>
                    <p className="text-description content-mb-xm content-text-through">Boton de llamada directa</p>
                    <p className="text-description content-mb-xm content-text-through">Galería de imágenes</p>
                    <p className="text-description content-mb-xm content-text-through">Formulario de contacto</p>
                    <p className="text-description content-mb-bg content-text-through">Mapa de ubicación con google</p>
                    <div className="primary-button">Solicitar plan ahora</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-content">Plan startup</h3>
                    <p className="text-description content-mt-sm">Ideal para empresas con finalidad de dar a conocer sus servicios</p>
                    <h4 className="text-primary content-my-md">$ 11,500</h4>
                    <p className="text-content content-mb-xm">Hasta 10 secciones estáticas</p>
                    <p className="text-content content-mb-xm">Hosting eficiente por un año</p>
                    <p className="text-content content-mb-xm">Dominio por un año</p>
                    <p className="text-content content-mb-xm">Enlace a redes sociales</p>
                    <p className="text-content content-mb-xm">Funcionalidad de compartir sitio</p>
                    <p className="text-content content-mb-xm">Boton de llamada directa</p>
                    <p className="text-content content-mb-xm">Galería de imágenes</p>
                    <p className="text-content content-mb-xm">Formulario de contacto</p>
                    <p className="text-content content-mb-bg">Mapa de ubicación con google</p>
                    <div className="primary-button">Solicitar plan ahora</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-content">Plan tienda en linea</h3>
                    <p className="text-description content-mt-sm">Ideal para negocios con finalidad de dar a conocer sus servicios</p>
                    <h4 className="text-primary content-my-md">$ 15,000</h4>
                    <p className="text-content content-mb-xm">Hasta 3 secciones estáticas</p>
                    <p className="text-content content-mb-xm">Hasta 3 secciones administrables</p>
                    <p className="text-content content-mb-xm">Pasarela de pago en linea</p>
                    <p className="text-content content-mb-xm">Hosting eficiente por un año</p>
                    <p className="text-content content-mb-xm">Dominio por un año</p>
                    <p className="text-content content-mb-xm">Enlace a redes sociales</p>
                    <p className="text-content content-mb-xm">Galería de imágenes</p>
                    <p className="text-content content-mb-xm">Formulario de contacto</p>
                    <p className="text-content content-mb-bg">Mapa de ubicación con google</p>
                    <div className="primary-button">Solicitar plan ahora</div>
                </div>
            </div>
        </div>

    )
}