import { useState } from "react"
import Image from 'next/image'
import Modal from '../components/SimpleModal/SimpleModal'

export default function desarrollo () {

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
                    <span className="primary-button modal-activator-button" data-target="simple-modal-01">Ves detalles</span>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Empresarial</h3>
                    <p className="text-description content-mt-sm">Ideal para dar a conocer su empresa de manera profesional y ofertar productos o servicios</p>
                    <h4 className="text-primary content-my-md">$ 7,500</h4>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Formulario de contacto</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>   
                    <p className="text-content content-mb-xm">Imagen de portada</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm">Testimonios max. 10</p>
                    <p className="text-content content-mb-xm">Novedades max. 10</p>
                    <p className="text-content content-mb-bg">Galería de imágenes max. 10</p>
                    <div className="primary-button modal-activator-button" data-target="simple-modal-02">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Gestor de contenido</h3>
                    <p className="text-description content-mt-sm">Ideal para empresas o negocios que requieren modificar contenido de forma constante</p>
                    <h4 className="text-primary content-my-md">$ 12,000</h4>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Hasta 10 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Formulario de contacto</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Imagen de portada dinámica</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de testimonios</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de novedades</p>
                    <p className="text-content content-mb-bg"><i className="icon-thumbs-up text-content-primary"></i> Getor de galería de imágenes</p>
                    <div className="primary-button modal-activator-button" data-target="simple-modal-03">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Productos o servicios</h3>
                    <p className="text-description content-mt-sm">Ideal para negocios que requieren ofertar y gestionar sus productos o servicios de manera eficiente</p>
                    <h4 className="text-primary content-my-md">$ 14,000</h4>
                    <p className="text-content content-mb-xm">Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Visualizador de producto</p>
                    <p className="text-content content-mb-xm">Enlace a sus redes sociales</p>
                    <p className="text-content content-mb-xm">Mapa de ubicación con google</p>
                    <p className="text-content content-mb-xm">Gestor de testimonios</p>
                    <p className="text-content content-mb-xm">Gestor de novedades</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de categorías</p>
                    <p className="text-content content-mb-bg"><i className="icon-thumbs-up text-content-primary"></i> Gestor de productos o servicios</p>
                    <div className="primary-button modal-activator-button" data-target="simple-modal-04">Ver detalles</div>
                </div>
                <div className="simple-primary-slate content-text-center">
                    <h3 className="text-subtitle-secondary">Tienda en línea</h3>
                    <p className="text-description content-mt-sm">Ideal para negocios que requieren ofertar, gestionar y realizar ventas en linea de sus productos o servicios</p>
                    <h4 className="text-primary content-my-md">$ 19,000</h4>
                    <p className="text-content content-mb-xm">Hasta 5 secciones</p>
                    <p className="text-content content-mb-xm">Hosting y dominio por un año</p>
                    <p className="text-content content-mb-xm">Gestor de novedades</p>
                    <p className="text-content content-mb-xm">Gestor de categorías</p>
                    <p className="text-content content-mb-xm">Gestor de productos</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de inventario</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Administración de ventas</p>
                    <p className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Carrito de compras</p>
                    <p className="text-content content-mb-bg"><i className="icon-thumbs-up text-content-primary"></i> Pasarela de pago</p>
                    <div className="primary-button modal-activator-button" data-target="simple-modal-05">Ver detalles</div>
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
                    <div className="primary-button modal-activator-button" data-target="simple-modal-06">Ver detalles</div>
                </div>
            </div>

            <Modal identifier="simple-modal-01">
                <h1 className="text-title content-mb-bg">Paquete web emprendedor</h1>
                <p className="text-subtitle-secondary content-mb-xm">Especificaciones del paquete:</p>
                <li className="text-content content-mb-xm">1 única sección</li>
                <p className="text-description content-mb-sm content-text-justify">Se desarrolla una sóla página que detalle contenido de su empresa como (nombre empresa, imagen principal, novedades, testimonios, galería, mapa de ubicación con google, horario)</p>
                <li className="text-content content-mb-xm">Hosting y dominio</li>
                <p className="text-description content-mb-sm content-text-justify">Para la puesta en producción de su proyecto, se requiere la renta de un dominio y hosting, mismo que requiere una <span className="text-content">renovación anual de $1,500.00 pesos</span>. Usted cuenta con este servicio el primer año al contratar este plan.</p>
                <li className="text-content content-mb-xm">Enlace a sus redes sociales</li>
                <p className="text-description content-mb-sm content-text-justify">SeSe le solicitan los enlaces de sus redes sociales para colocarlos en su sitio web, de esta forma facilitar a los visitantes más formas de conocer lo que ofrece y su identidad.</p>
                <li className="text-content content-mb-xm">Imagen de portada</li>
                <p className="text-description content-mb-sm content-text-justify">Se coloca una imagen que sea referente a sus actividades, de esta forma las personas se adentran a su contexto.</p>
                <li className="text-content content-mb-xm">Mapa de ubicación con google</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da la opción de colocar el mapa de google a su sitio, así las personas sabrán la ubicación de su empresa.</p>
                <li className="text-content content-mb-xm">Testimonios</li>
                <p className="text-description content-mb-sm content-text-justify">Se colocan algunos de los comentarios que tienen sus clientes y que a usted le interesan, acerca de sus servicios o productos para así promocianar más su empresa (límite de 10).</p>
                <li className="text-content content-mb-xm">Novedades</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da un enfoque de publicación (noticias, eventos, promociones) que a usted le interesa que los visitantes visualicen como relevantes o en primera instancia (límite de 10).</p>
                <li className="text-content content-mb-xm">Galería de imágenes</li>
                <p className="text-description content-mb-sm content-text-justify">Se coloca una galería de imágenes estática, usted decide que imágenes de su negocio le gustaría mostrar a sus visitantes, de esta forma hace más relevante su empresa o contenido.</p>
            </Modal>
            <Modal identifier="simple-modal-02">
                <h1 className="text-title content-mb-bg">Paquete web empresarial</h1>
                <p className="text-subtitle-secondary content-mb-xm">Especificaciones del paquete:</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> 5 secciones de información</li>
                <p className="text-description content-mb-sm content-text-justify">Se puede desarrollar un máximo de 5 secciones informativas o también llamadas páginas estáticas, por ejemplo: inicio, acerca de su empresa, contacto, productos/servicios (máximo 15), blog estático, preguntas frecuentes. Usted facilita toda la información.</p>
                <li className="text-content content-mb-xm">Hosting y dominio</li>
                <p className="text-description content-mb-sm content-text-justify">Para la puesta en producción de su proyecto, se requiere la renta de un dominio y hosting, mismo que requiere una <span className="text-content">renovación anual de $1,500.00 pesos</span>. Usted cuenta con este servicio el primer año al contratar este plan.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Formulario de contacto</li>
                <p className="text-description content-mb-sm content-text-justify">Se integra con la finalidad de dar a los visitantes una forma más de ponerse en contacto, puede solicitar una cotización o dejar un mensaje sobre alguna duda de los servicios, productos o paquetes que oferta.</p>
                <li className="text-content content-mb-xm">Enlace a sus redes sociales</li>
                <p className="text-description content-mb-sm content-text-justify">Se le solicitan los enlaces de sus redes sociales para colocarlos en su sitio web, de esta forma facilitar a los visitantes más formas de conocer lo que ofrece y su identidad.</p>
                <li className="text-content content-mb-xm">Imagen de portada</li>
                <p className="text-description content-mb-sm content-text-justify">Se coloca una imagen que sea referente a sus actividades, de esta forma las personas se adentran a su contexto.</p>
                <li className="text-content content-mb-xm">Mapa de ubicación con google</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da la opción de colocar el mapa de google a su sitio, así las personas sabrán la ubicación de su empresa.</p>
                <li className="text-content content-mb-xm">Testimonios</li>
                <p className="text-description content-mb-sm content-text-justify">Se colocan algunos de los comentarios que tienen sus clientes y que a usted le interesan, acerca de sus servicios o productos para así promocianar más su empresa (límite de 10).</p>
                <li className="text-content content-mb-xm">Novedades</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da un enfoque de publicación (noticias, eventos, promociones) que a usted le interesa que los visitantes visualicen como relevantes o en primera instancia (límite de 10).</p>
                <li className="text-content content-mb-xm">Galería de imágenes</li>
                <p className="text-description content-mb-sm content-text-justify">Se coloca una galería de imágenes estática, usted decide que imágenes de su negocio le gustaría mostrar a sus visitantes, de esta forma hace más relevante su empresa o contenido.</p>
            </Modal>
            <Modal identifier="simple-modal-03">
                <h1 className="text-title content-mb-bg">Gestor de contenido</h1>
                <p className="text-subtitle-secondary content-mb-xm">Especificaciones del paquete:</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> 10 secciones de información</li>
                <p className="text-description content-mb-sm content-text-justify">Se puede desarrollar un máximo de 10 secciones informativas o también llamadas páginas estáticas, por ejemplo: inicio, acerca de su empresa, contacto, blog estático, preguntas frecuentes. Usted facilita toda la información.</p>
                <li className="text-content content-mb-xm">Hosting y dominio</li>
                <p className="text-description content-mb-sm content-text-justify">Para la puesta en producción de su proyecto, se requiere la renta de un dominio y hosting, mismo que requiere una <span className="text-content">renovación anual de $1,500.00 pesos</span>. Usted cuenta con este servicio el primer año al contratar este plan.</p>
                <li className="text-content content-mb-xm">Formulario de contacto</li>
                <p className="text-description content-mb-sm content-text-justify">Se integra con la finalidad de dar a los visitantes una forma más de ponerse en contacto, puede solicitar una cotización o dejar un mensaje sobre alguna duda de los servicios, productos o paquetes que oferta.</p>
                <li className="text-content content-mb-xm">Enlace a sus redes sociales</li>
                <p className="text-description content-mb-sm content-text-justify">Se le solicitan los enlaces de sus redes sociales para colocarlos en su sitio web, de esta forma facilitar a los visitantes más formas de conocer lo que ofrece y su identidad.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Imagen de portada dinámica</li>
                <p className="text-description content-mb-sm content-text-justify">Es la imágen principal, se coloca al inicio de su sitio con la finalidad de anunciar algo que le interesa o simplemente adentrar a sus vitantes, misma que se define desde la galería.</p>
                <li className="text-content content-mb-xm">Mapa de ubicación con google</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da la opción de colocar el mapa de google a su sitio, así las personas sabrán la ubicación de su empresa.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de testimonios</li>
                <p className="text-description content-mb-sm content-text-justify">Los visitantes o sus clientes pueden escribir alguna reseña o comentario de sus servicios desde el sitio, los cuales usted puede administrar (publicar, eliminar, actualizar), para así demostrar a nuevos visitantes que sus servicios o productos han aportado a otras personas.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de novedades</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da un enfoque de publicación (noticias, eventos, promociones) que a usted le interesa que los visitantes visualicen como relevantes o en primera instancia, usted desde un sitio de administración puede agregar más, eliminar los que ya no le interesan o modificar.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de galería de imágenes</li>
                <p className="text-description content-mb-sm content-text-justify">Se coloca una sección como galería de imágenes, usted define el límite, cuales mostrar a sus visitantes y cuales eliminar, de esta forma hace más relevante y dinámica la visualización de su sitio web.</p>
            </Modal>
            <Modal identifier="simple-modal-04">
                <h1 className="text-title content-mb-bg">Productos o servicios</h1>
                <p className="text-subtitle-secondary content-mb-xm">Especificaciones del paquete:</p>
                <li className="text-content content-mb-xm">5 secciones de información</li>
                <p className="text-description content-mb-sm content-text-justify">Se puede desarrollar un máximo de 5 secciones informativas o también llamadas páginas estáticas, por ejemplo: inicio, acerca de su empresa, contacto, blog estático, preguntas frecuentes. Usted facilita toda la información.</p>
                <li className="text-content content-mb-xm">Hosting y dominio</li>
                <p className="text-description content-mb-sm content-text-justify">Para la puesta en producción de su proyecto, se requiere la renta de un dominio y hosting, mismo que requiere una <span className="text-content">renovación anual de $1,500.00 pesos</span>. Usted cuenta con este servicio el primer año al contratar este plan.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Visualizador de producto</li>
                <p className="text-description content-mb-sm content-text-justify">Se desarrolla con la finalidad de dar más detalle al visitante del producto o servicio que ofrece, en este mismo apartado se coloca un máximo de 5 productos que sean similares para dar una navegación más amigable.</p>
                <li className="text-content content-mb-xm">Enlace a sus redes sociales</li>
                <p className="text-description content-mb-sm content-text-justify">Se le solicitan los enlaces de sus redes sociales para colocarlos en su sitio web, de esta forma facilitar a los visitantes más formas de conocer lo que ofrece y su identidad.</p>
                <li className="text-content content-mb-xm">Mapa de ubicación con google</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da la opción de colocar el mapa de google a su sitio, así las personas sabrán la ubicación de su empresa.</p>
                <li className="text-content content-mb-xm">Gestor de testimonios</li>
                <p className="text-description content-mb-sm content-text-justify">Los visitantes o sus clientes pueden escribir alguna reseña o comentario de sus servicios desde el sitio, los cuales usted puede administrar (publicar, eliminar, actualizar), para así demostrar a nuevos visitantes que sus servicios o productos han aportado a otras personas.</p>
                <li className="text-content content-mb-xm">Gestor de novedades</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da un enfoque de publicación (noticias, eventos, promociones) que a usted le interesa que los visitantes visualicen como relevantes o en primera instancia, usted desde un sitio de administración puede agregar más, eliminar los que ya no le interesan o modificar.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de categorías</li>
                <p className="text-description content-mb-sm content-text-justify">Es una forma de clasificar sus productos o servicios, usted decide cuales publicar, actualizar o eliminar. De esta forma podemos tener una mejor adminisración de los productos o servicios que ofrece.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de productos o servicios</li>
                <p className="text-description content-mb-sm content-text-justify">Se coloca un administrador de productos, los cuales puede pubicar, eliminar o simplemente actualizar su información.</p>
            </Modal>
            <Modal identifier="simple-modal-05">
                <h1 className="text-title content-mb-bg">Tienda en línea</h1>
                <p className="text-subtitle-secondary content-mb-xm">Especificaciones del paquete:</p>
                <li className="text-content content-mb-xm">5 secciones de información</li>
                <p className="text-description content-mb-sm content-text-justify">Se puede desarrollar un máximo de 5 secciones informativas o también llamadas páginas estáticas, por ejemplo: inicio, acerca de su empresa, contacto, blog estático, preguntas frecuentes. Usted facilita toda la información.</p>
                <li className="text-content content-mb-xm">Hosting y dominio</li>
                <p className="text-description content-mb-sm content-text-justify">Para la puesta en producción de su proyecto, se requiere la renta de un dominio y hosting, mismo que requiere una <span className="text-content">renovación anual de $1,500.00 pesos</span>. Usted cuenta con este servicio el primer año al contratar este plan.</p>
                <li className="text-content content-mb-xm">Gestor de novedades</li>
                <p className="text-description content-mb-sm content-text-justify">Se le da un enfoque de publicación (noticias, eventos, promociones) que a usted le interesa que los visitantes visualicen como relevantes o en primera instancia, usted desde un sitio de administración puede agregar más, eliminar los que ya no le interesan o modificar.</p>
                <li className="text-content content-mb-xm">Gestor de categorías</li>
                <p className="text-description content-mb-sm content-text-justify">Es una forma de clasificar sus productos, usted decide cuales publicar, actualizar o eliminar. De esta forma podemos tener una mejor adminisración en lo que oferta.</p>
                <li className="text-content content-mb-xm">Gestor de productos</li>
                <p className="text-description content-mb-sm content-text-justify">Se desarrolla un administrador de productos, los cuales puede pubicar, eliminar o simplemente actualizar su información.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Gestor de inventario</li>
                <p className="text-description content-mb-sm content-text-justify">Tiene el control total de las existencias de los productos, se le notifica cuando un proucto sale del límite de stock, puede agregar más ejemplares y activar o desactivar produtos para venta.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Administración de ventas</li>
                <p className="text-description content-mb-sm content-text-justify">Se agrega un visualizador de las ventas realizadas de forma local o en línea, agrupadas día a día. Además una funcionalidad que le permite que usted mismo realizar ventas.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Carrito de compras</li>
                <p className="text-description content-mb-sm content-text-justify">Se desarrolla un carrito de compras para que los visitantes puedan escoger los productos que requieren y la cantidad de los mismos.</p>
                <li className="text-content content-mb-xm"><i className="icon-thumbs-up text-content-primary"></i> Pasarela de pago</li>
                <p className="text-description content-mb-sm content-text-justify">Se implementa la funcionalidad para realizar pagos en línea PayPal, uno de los métodos más seguros para realizar pagos en línea, pues toda tu información financiera se mantiene de manera privada.</p>
            </Modal>
            <Modal identifier="simple-modal-06">Modal 6</Modal>
        </div>

    )
}
