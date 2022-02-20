import Image from 'next/image'

export default function Index () {
    return (
        <div>

            {/* A cerca del servicio */}

            <p className="text-subtitle-primary content-mb-xb">Todos los paquetes incluyen</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Diseño responsivo</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_real_time_sync_re_nky7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de diseño resposivo" title="Foto de servicio de diseño resposivo"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">En todo diseño se contempla que las interfaces puedan adaptarse a las distintas medidas de los dispositivos con los que un usuario podría acceder a su sitio web.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Diseño personalizado</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_building_blocks_re_rwls.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de diseño personalizado" title="Foto de servicio de diseño personalizado"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Con base en sus necesidades y criterios se determinan los diseños apropiados para su negocio o empresa, contemplando criterios de usabilidad y accesibilidad.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Optimización de SEO</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_search_engines_nn-9-e.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de optimización de SEO" title="Foto de servicio de optimización de SEO"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Se contempla cada uno de los criterios de calidad actuales propuestos por la comunidad de Google, que tienen como finalidad servir contenido de forma óptima.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Código optimizado</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_code_inspection_bdl7.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de código optimizado" title="Foto de servicio de código optimizado"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Cada una de sus solicitudes se desarrollan con las mejores prácticas de programación con la finalidad de hacer que su aplicación funcione de la manera más eficiente.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Soporte y capacitación</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_youtube_tutorial_re_69qc.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de soporte y capacitación" title="Foto de servicio de soporte y capacitación"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">Una vez conluído el proyecto, se ofrece soporte y capacitación para el uso correcto del mismo, donde conocerá a la vez los términos más relevantes y empleados de la web.</p>
                </div>
                <div className="simple-primary-slate">
                    <h3 className="text-subtitle-secondary content-mb-sm">Soporte SSL</h3>
                    <div className="image-responsive-md">
                        <Image src="/images/undraw_secure_login_pdn4.svg" width="987" height="714" layout="responsive" alt="Foto de servicio de soporte SSL" title="Foto de servicio de soporte SSL"/>
                    </div>
                    <p className="text-content content-text-justify content-mt-sm">En la puesta en producción se brinda un certificado de seguridad (SSL), para que así nuestra información se mantenga integra ante cualquier intersección en la red.</p>
                </div>
            </div>

            {/* Principales paquetes de conveniencia */}
        
            <p className="text-subtitle-primary content-my-xb">Paquetes de desarrollo web</p>

            <div className="grid-layout-content-md">
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Emprendedor</h3>
                    <p className="text-description content-mt-sm">Ideal cuando una empresa o negocio requiere comenzar a tener presencia en internet</p>
                    <h4 className="text-primary content-my-md">$ 4,000</h4>
                    <p className="text-content content-mb-xm">1 única sección</p>
                    <p className="text-content content-mb-xm">Hosting por un año</p>
                    <p className="text-content content-mb-xm">Dominio por un año</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>
                    <p className="text-content content-mb-xm">Imagen de portada</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm">Testimonios max. 10</p>
                    <p className="text-content content-mb-xm">Novedades max. 10</p>
                    <p className="text-content content-mb-bg">Galería de imágenes max. 10</p>
                    <div className="primary-button">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Empresarial</h3>
                    <p className="text-description content-mt-sm">Ideal para dar a conocer su empresa de manera profesional y ofertar productos o servicios</p>
                    <h4 className="text-primary content-my-md">$ 6,500</h4>
                    <p className="text-content content-mb-xm">Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Formulario de contacto</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>
                    <p className="text-content content-mb-xm">Imagen de portada</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm">Testimonios max. 10</p>
                    <p className="text-content content-mb-xm">Novedades max. 10</p>
                    <p className="text-content content-mb-bg">Galería de imágenes max. 10</p>
                    <div className="primary-button">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Gestor de contenido</h3>
                    <p className="text-description content-mt-sm">Ideal para empresas o negocios que requieren modificar contenido de forma constante</p>
                    <h4 className="text-primary content-my-md">$ 12,000</h4>
                    <p className="text-content content-mb-xm">Hasta 10 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Formulario de contacto</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>
                    <p className="text-content content-mb-xm">Imagen de portada dinámica</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm">Gestor de testimonios</p>
                    <p className="text-content content-mb-xm">Gestor de novedades</p>
                    <p className="text-content content-mb-bg">Getor de galería de imágenes</p>
                    <div className="primary-button">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Productos o servicios</h3>
                    <p className="text-description content-mt-sm">Ideal para negocios que requieren ofertar y gestionar sus productos o servicios de manera eficiente</p>
                    <h4 className="text-primary content-my-md">$ 15,000</h4>
                    <p className="text-content content-mb-xm">Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Formulario de contacto</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm">Gestor de testimonios</p>
                    <p className="text-content content-mb-xm">Gestor de novedades</p>
                    <p className="text-content content-mb-xm">Gestor de categorías</p>
                    <p className="text-content content-mb-bg">Gestor de productos o servicios</p>
                    <div className="primary-button">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Tienda en línea</h3>
                    <p className="text-description content-mt-sm">Ideal para negocios que requieren ofertar, gestionar y realizar ventas en linea de sus productos o servicios</p>
                    <h4 className="text-primary content-my-md">$ 18,000</h4>
                    <p className="text-content content-mb-xm">Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Gestor de novedades</p>
                    <p className="text-content content-mb-xm">Gestor de categorías</p>
                    <p className="text-content content-mb-xm">Gestor de productos</p>
                    <p className="text-content content-mb-xm">Gestor de inventario</p>
                    <p className="text-content content-mb-xm">Administración de ventas</p>
                    <p className="text-content content-mb-xm">Pasarela de pago</p>
                    <p className="text-content content-mb-bg">Carrito de compras</p>
                    <div className="primary-button">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Sistema de inventario</h3>
                    <p className="text-description content-mt-sm">Para empresa o negocio que pretende administrar sus recursos con entradas, salidas y generación de reportes</p>
                    <h4 className="text-primary content-my-md">variable</h4>
                    <p className="text-content content-mb-xm">Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Administración de compras</p>
                    <p className="text-content content-mb-xm">Administración de categorías</p>
                    <p className="text-content content-mb-xm">Administración de productos</p>
                    <p className="text-content content-mb-xm">Administración de ventas</p>
                    <p className="text-content content-mb-xm">Administración de clientes</p>
                    <p className="text-content content-mb-xm">Administración de usuarios</p>
                    <p className="text-content content-mb-bg">Administración de insumos</p>
                    <div className="primary-button">Ver detalles</div>
                </div>
            </div>
        </div>

    )
}