
import React from 'react';
import { motion } from 'framer-motion';

const Analytics: React.FC = () => {

    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.querySelector('#formulario');
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="analytics-section" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)', padding: '120px 20px', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* PRE-TITULAR */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <span style={{ color: '#8B5CF6', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        No Solo Diseño, También Inteligencia de Datos
                    </span>
                </div>

                {/* TITULAR PRINCIPAL */}
                <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, textAlign: 'center', marginBottom: '30px', lineHeight: 1.2 }}>
                    ¿Tu Web Está Lista Pero No Sabes<br />Si Está Funcionando?
                </h2>

                {/* SUBTÍTULO EMOCIONAL */}
                <div style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center' }}>
                    <p style={{ color: '#E5E7EB', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '20px' }}>
                        La mayoría de negocios invierten miles en su web y luego... silencio. No saben cuántas personas visitan, dónde hacen click, por qué abandonan. Es como conducir con los ojos vendados: sabes que te mueves, pero no a dónde vas.
                    </p>
                    <p style={{ color: '#8B5CF6', fontSize: '1.25rem', fontWeight: 700 }}>
                        Cada día sin datos es dinero que dejas sobre la mesa.
                    </p>
                </div>

                {/* COPY DE TRANSICIÓN */}
                <div style={{ maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center' }}>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8 }}>
                        Imagina saber exactamente qué botón no funciona, qué sección confunde a tus visitantes, o por qué el 70% abandona en la página de precios. Imagina tomar decisiones basadas en <strong style={{ color: '#FFFFFF' }}>comportamiento real</strong>, no en corazonadas.
                    </p>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginTop: '20px' }}>
                        Eso es lo que la inteligencia de datos te da: <strong style={{ color: '#8B5CF6' }}>certeza</strong>.
                    </p>
                    <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.6, marginTop: '20px' }}>
                        Y no necesitas ser un experto técnico para entenderlo. Te lo entregamos visual, claro, accionable.
                    </p>
                </div>

                {/* BENEFICIO 1: MAPA DE CALOR */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                    {/* Imagen */}
                    <div style={{ order: 1 }}>
                        <img
                            src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/MAPA%20CALOR.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvTUFQQSBDQUxPUi5wbmciLCJpYXQiOjE3NjI2MDA2MzcsImV4cCI6MTAzMDU3NDYyMzd9.uLZpRT5JpOQ9g7IKuycxSRxBK5Z-u8Ha8EoyWFCUUE0"
                            alt="Mapa de calor de Clarity"
                            style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)' }}
                        />
                    </div>
                    {/* Copy */}
                    <div style={{ order: 2 }}>
                        <h3 style={{ color: '#FFFFFF', fontSize: '1.875rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '2.5rem' }}>📹</span> Ve Cómo Tus Usuarios Navegan (Realmente)
                        </h3>
                        <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                            No adivines. <strong style={{ color: '#FFFFFF' }}>Mira</strong>.
                        </p>
                        <p style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginBottom: '15px' }}>
                            Clarity graba sesiones reales de usuarios navegando tu web. Ves exactamente:
                        </p>
                        <ul style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginLeft: '20px', marginBottom: '20px' }}>
                            <li>Dónde hacen click (y dónde intentan hacer click pero no pasa nada)</li>
                            <li>Hasta dónde bajan antes de abandonar</li>
                            <li>Qué secciones leen y cuáles ignoran completamente</li>
                            <li>Dónde se frustran (rage clicks: cuando hacen click desesperado 5 veces)</li>
                        </ul>
                        <p style={{ color: '#8B5CF6', fontSize: '1.125rem', fontWeight: 600 }}>
                            Resultado: Descubres fricciones que nunca imaginaste. Las arreglas. Las conversiones suben.
                        </p>
                    </div>
                </div>

                {/* BENEFICIO 2: TIEMPO REAL */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                    {/* Copy */}
                    <div style={{ order: 2 }}>
                        <h3 style={{ color: '#FFFFFF', fontSize: '1.875rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '2.5rem' }}>📊</span> Dashboard en Tiempo Real (Sin Tecnicismos)
                        </h3>
                        <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                            Tus métricas clave, siempre visibles.
                        </p>
                        <p style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginBottom: '15px' }}>
                            Google Analytics te muestra:
                        </p>
                        <ul style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginLeft: '20px', marginBottom: '20px' }}>
                            <li>Cuántas personas están en tu web <strong style={{ color: '#FFFFFF' }}>ahora mismo</strong></li>
                            <li>De dónde vienen (Google, Instagram, directo)</li>
                            <li>Qué páginas visitan más</li>
                            <li>Cuánto tiempo pasan antes de irse</li>
                            <li>Desktop vs Mobile (86.2% vs 13.8% en este ejemplo)</li>
                        </ul>
                        <p style={{ color: '#8B5CF6', fontSize: '1.125rem', fontWeight: 600 }}>
                            Resultado: Sabes qué funciona. Duplicas lo que genera resultados. Eliminas lo que no.
                        </p>
                    </div>
                    {/* Imagen */}
                    <div style={{ order: 1 }}>
                        <img
                            src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/TIEMPO%20REAL.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvVElFTVBPIFJFQUwucG5nIiwiaWF0IjoxNzYyNjAwNjUyLCJleHAiOjI2MTYyMzI2NTJ9.k7GsJ6zyCgLF2h69fLJC97p4tzK8spbWibjviqtJ7S4"
                            alt="Dashboard tiempo real Google Analytics"
                            style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)' }}
                        />
                    </div>
                </div>

                {/* BENEFICIO 3: INFORMES */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                    {/* Imagen */}
                    <div style={{ order: 1 }}>
                        <img
                            src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/INFORMES.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvSU5GT1JNRVMucG5nIiwiaWF0IjoxNzYyNjAwNjI0LCJleHAiOjg2NzQ0Mjc4MjR9.QtzlaHmz5RTLIPuT9MHrry7XSV41uCrq1YHRRFxDWDU"
                            alt="Informes Google Analytics"
                            style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)' }}
                        />
                    </div>
                    {/* Copy */}
                    <div style={{ order: 2 }}>
                        <h3 style={{ color: '#FFFFFF', fontSize: '1.875rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '2.5rem' }}>📈</span> Reportes Que Hablan en Tu Idioma
                        </h3>
                        <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                            Nada de "métricas raras". Solo respuestas claras.
                        </p>
                        <p style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginBottom: '15px' }}>
                            Cada mes recibes un informe que responde:
                        </p>
                        <ul style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginLeft: '20px', marginBottom: '20px' }}>
                            <li>¿Cuántos leads generé este mes?</li>
                            <li>¿Qué botón CTA convierte más?</li>
                            <li>¿De qué red social vienen mis mejores clientes?</li>
                            <li>¿Qué cambiar para vender más?</li>
                        </ul>
                        <p style={{ color: '#8B5CF6', fontSize: '1.125rem', fontWeight: 600 }}>
                            Resultado: Decisiones informadas. Crecimiento predecible. No más "probar a ver qué pasa".
                        </p>
                    </div>
                </div>

                {/* IMAGEN DE DATOS (CENTRADA) */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <img
                        src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/DATOS.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvREFUT1MucG5nIiwiaWF0IjoxNzYyNjAwNjA0LCJleHAiOjI0NTM3MTQyMDR9.LhQ4bmbQW-rbpd-X-1EFP0dit7DjJEwuDPqBuv-7HfQ"
                        alt="Dashboard de datos Analytics"
                        style={{ width: '100%', maxWidth: '900px', borderRadius: '12px', boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)', margin: '0 auto' }}
                    />
                </div>

                {/* NIVELES DE SERVICIO */}
                <div style={{ marginTop: '80px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '2.25rem', fontWeight: 700, textAlign: 'center', marginBottom: '60px' }}>
                        Cómo Lo Incluimos en Tu Proyecto
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>

                        {/* NIVEL 1 */}
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', border: '2px solid #8B5CF6', borderRadius: '16px', padding: '40px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-15px', left: '20px', background: '#8B5CF6', color: '#FFFFFF', padding: '5px 15px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>
                                INCLUIDO ✅
                            </div>
                            <h4 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, marginTop: '20px', marginBottom: '20px' }}>
                                Nivel 1: Analytics Básico
                            </h4>
                            <p style={{ color: '#E5E7EB', fontSize: '0.875rem', marginBottom: '30px' }}>
                                Todo proyecto de Impulsa tu Marca incluye:
                            </p>
                            <ul style={{ color: '#E5E7EB', fontSize: '0.9375rem', lineHeight: 2, marginLeft: 0, paddingLeft: 0, listStyle: 'none' }}>
                                <li style={{ marginBottom: '12px' }}>✅ Instalación de sistema de tracking profesional<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Google Tag Manager + Microsoft Clarity</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ Seguimiento de conversiones básico<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Clicks en CTAs, formularios enviados</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ Dashboard de métricas en vivo<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Acceso a Google Analytics</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ Capacitación de 30 minutos<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Te enseñamos a leer los datos</span></li>
                            </ul>
                            <p style={{ color: '#8B5CF6', fontSize: '1rem', fontWeight: 600, marginTop: '30px' }}>
                                Sin costo adicional
                            </p>
                        </div>

                        {/* NIVEL 2 */}
                        <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 100%)', border: '2px solid #8B5CF6', borderRadius: '16px', padding: '40px', position: 'relative', boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)' }}>
                            <div style={{ position: 'absolute', top: '-15px', left: '20px', background: 'linear-gradient(90deg, #8B5CF6 0%, #6D28D9 100%)', color: '#FFFFFF', padding: '5px 15px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>
                                RECOMENDADO 🔥
                            </div>
                            <h4 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, marginTop: '20px', marginBottom: '20px' }}>
                                Nivel 2: Analytics Avanzado
                            </h4>
                            <p style={{ color: '#E5E7EB', fontSize: '0.875rem', marginBottom: '30px' }}>
                                Para negocios que quieren crecimiento serio:
                            </p>
                            <ul style={{ color: '#E5E7EB', fontSize: '0.9375rem', lineHeight: 2, marginLeft: 0, paddingLeft: 0, listStyle: 'none' }}>
                                <li style={{ marginBottom: '12px' }}>✅ Todo lo del Nivel 1, más:</li>
                                <li style={{ marginBottom: '12px' }}>✅ Configuración avanzada de eventos<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Trackeo específico de cada acción clave</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ Integración con ads<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Meta Pixel, LinkedIn Insight Tag</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ Reporte mensual con insights<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Te decimos qué cambiar y por qué</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ 1 sesión de optimización<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Ajustes basados en primeros 30 días</span></li>
                                <li style={{ marginBottom: '12px' }}>✅ Dashboard personalizado<br /><span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>→ Panel visual en Looker Studio</span></li>
                            </ul>
                            <p style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 700, marginTop: '30px' }}>
                                +€300
                            </p>
                            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', textDecoration: 'line-through' }}>
                                Valor real: €800+
                            </p>
                        </div>
                    </div>
                </div>

                {/* STORYTELLING EMOCIONAL */}
                <div style={{ maxWidth: '800px', margin: '80px auto 60px', textAlign: 'center' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '2.25rem', fontWeight: 700, marginBottom: '30px' }}>
                        La Diferencia Entre Crecer y Sobrevivir Son Los Datos
                    </h3>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                        He visto esto cientos de veces:
                    </p>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                        Un emprendedor invierte €2,000 en una web profesional. Se ve increíble. Comparte en redes. Los primeros días hay tráfico.
                    </p>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                        Pero después... ¿qué?
                    </p>
                    <div style={{ background: 'rgba(139, 92, 246, 0.1)', borderLeft: '4px solid #8B5CF6', padding: '20px', margin: '30px 0', textAlign: 'left' }}>
                        <ul style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.8, marginLeft: '20px' }}>
                            <li>¿Cuántos visitantes realmente hubo?</li>
                            <li>¿Cuántos hicieron click en "Agendar llamada"?</li>
                            <li>¿Cuántos llegaron al formulario y se fueron sin completarlo?</li>
                            <li>¿Por qué nadie compra si el producto es bueno?</li>
                        </ul>
                    </div>
                    <p style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '30px' }}>
                        Sin datos, solo hay silencio. Y suposiciones.
                    </p>
                    <p style={{ color: '#9CA3AF', fontStyle: 'italic', marginBottom: '15px' }}>
                        "Tal vez no les gusta el precio."
                    </p>
                    <p style={{ color: '#9CA3AF', fontStyle: 'italic', marginBottom: '15px' }}>
                        "Quizás no confían en mí."
                    </p>
                    <p style={{ color: '#9CA3AF', fontStyle: 'italic', marginBottom: '30px' }}>
                        "Debería cambiar todo el diseño."
                    </p>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                        Mientras tanto, la competencia <strong style={{ color: '#FFFFFF' }}>sabe exactamente</strong> qué funciona. Porque <strong style={{ color: '#8B5CF6' }}>mide</strong>.
                    </p>
                    <p style={{ color: '#FFFFFF', fontSize: '1.125rem', fontWeight: 700, marginTop: '30px' }}>
                        No se trata de tener más tráfico. Se trata de saber qué hacer con el tráfico que ya tienes.
                    </p>
                    <p style={{ color: '#8B5CF6', fontSize: '1.25rem', fontWeight: 700, marginTop: '30px' }}>
                        Una web sin analytics es dinero quemándose. Lento. Invisible. Pero se quema.
                    </p>
                </div>

                {/* CTA FINAL */}
                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <h3 style={{ color: '#FFFFFF', fontSize: '2.25rem', fontWeight: 700, marginBottom: '30px' }}>
                        ¿Listo Para Saber Qué Está Pasando en Tu Web?
                    </h3>
                    <p style={{ color: '#E5E7EB', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 40px' }}>
                        No más adivinar. No más "creo que funciona".<br />
                        Datos claros. Decisiones inteligentes. Resultados medibles.
                    </p>
                    <p style={{ color: '#E5E7EB', fontSize: '1rem', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 50px' }}>
                        Agenda una consultoría gratuita y te mostramos cómo convertir tu web en una máquina de información que <strong style={{ color: '#8B5CF6' }}>te dice exactamente cómo crecer</strong>.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                        <motion.a 
                            href="#formulario" 
                            onClick={scrollToForm}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{ 
                                background: 'linear-gradient(90deg, #8B5CF6 0%, #6D28D9 100%)', 
                                color: '#FFFFFF', 
                                padding: '18px 40px', 
                                borderRadius: '50px', 
                                textDecoration: 'none', 
                                fontSize: '1.125rem', 
                                fontWeight: 700, 
                                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
                                display: 'inline-block'
                             }}
                        >
                            Quiero Inteligencia de Datos Para Mi Negocio
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;
