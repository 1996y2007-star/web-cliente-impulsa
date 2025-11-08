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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="analytics" className="py-20 md:py-32 bg-dark-mid/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-5"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-primary-purple-400 text-sm font-semibold uppercase tracking-widest">
            No Solo Diseño, También Inteligencia de Datos
          </span>
        </motion.div>

        <motion.h2 
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8 leading-tight clamp-h2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          ¿Tu Web Está Lista Pero No Sabes<br className="hidden md:block" />Si Está Funcionando?
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            La mayoría de negocios invierten miles en su web y luego... silencio. No saben cuántas personas visitan, dónde hacen click, por qué abandonan. Es como conducir con los ojos vendados: sabes que te mueves, pero no a dónde vas.
          </p>
          <p className="text-primary-purple-400 text-xl font-bold">
            Cada día sin datos es dinero que dejas sobre la mesa.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto mb-20 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Imagina saber exactamente qué botón no funciona, qué sección confunde a tus visitantes, o por qué el 70% abandona en la página de precios. Imagina tomar decisiones basadas en <strong className="text-white">comportamiento real</strong>, no en corazonadas.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-5">
            Eso es lo que la inteligencia de datos te da: <strong className="text-primary-purple-400">certeza</strong>.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-5">
            Y no necesitas ser un experto técnico para entenderlo. Te lo entregamos visual, claro, accionable.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Benefit 1: Heatmap */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              className="md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/MAPA%20CALOR.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvTUFQQSBDQUxPUi5wbmciLCJpYXQiOjE3NjI2MDA2MzcsImV4cCI6MTAzMDU3NDYyMzd9.uLZpRT5JpOQ9g7IKuycxSRxBK5Z-u8Ha8EoyWFCUUE0"
                alt="Mapa de calor de una página web mostrando las zonas de mayor interacción de los usuarios."
                className="w-full rounded-xl shadow-2xl shadow-primary-purple-500/20"
                loading="lazy"
                width="1200"
                height="736"
              />
            </motion.div>
            <motion.div 
              className="md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-5 flex items-center gap-4">
                <span className="text-4xl">📹</span> Ve Cómo Tus Usuarios Navegan
              </h3>
              <p className="text-lg text-gray-300 mb-4">No adivines. <strong className="text-white">Mira</strong>. Clarity graba sesiones reales de usuarios navegando tu web. Ves exactamente:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-5">
                <li>Dónde hacen click (y dónde no pasa nada).</li>
                <li>Hasta dónde bajan antes de abandonar.</li>
                <li>Qué secciones leen y cuáles ignoran.</li>
                <li>Dónde se frustran (rage clicks).</li>
              </ul>
              <p className="text-primary-purple-400 text-lg font-semibold">
                Resultado: Descubres fricciones que nunca imaginaste. Las arreglas. Las conversiones suben.
              </p>
            </motion.div>
          </div>

          {/* Benefit 2: Real-time */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              className="md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/TIEMPO%20REAL.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvVElFTVBPIFJFQUwucG5nIiwiaWF0IjoxNzYyNjAwNjUyLCJleHAiOjI2MTYyMzI2NTJ9.k7GsJ6zyCgLF2h69fLJC97p4tzK8spbWibjviqtJ7S4"
                alt="Dashboard en tiempo real de Google Analytics mostrando visitantes activos, fuentes de tráfico y páginas más vistas."
                className="w-full rounded-xl shadow-2xl shadow-primary-purple-500/20"
                loading="lazy"
                width="1200"
                height="725"
              />
            </motion.div>
            <motion.div 
              className="md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-5 flex items-center gap-4">
                <span className="text-4xl">📊</span> Dashboard en Tiempo Real
              </h3>
              <p className="text-lg text-gray-300 mb-4">Tus métricas clave, siempre visibles. Google Analytics te muestra:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-5">
                <li>Cuántas personas están en tu web <strong className="text-white">ahora mismo</strong>.</li>
                <li>De dónde vienen (Google, Instagram, directo).</li>
                <li>Qué páginas visitan más y por cuánto tiempo.</li>
                <li>Desktop vs Mobile (86.2% vs 13.8% en este ejemplo).</li>
              </ul>
              <p className="text-primary-purple-400 text-lg font-semibold">
                Resultado: Sabes qué funciona. Duplicas lo que genera resultados. Eliminas lo que no.
              </p>
            </motion.div>
          </div>
          
          {/* Benefit 3: Reports */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              className="md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/INFORMES.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvSU5GT1JNRVMucG5nIiwiaWF0IjoxNzYyNjAwNjI0LCJleHAiOjg2NzQ0Mjc4MjR9.QtzlaHmz5RTLIPuT9MHrry7XSV41uCrq1YHRRFxDWDU"
                alt="Informe de Google Analytics con gráficos de adquisición de usuarios, interacción y conversiones."
                className="w-full rounded-xl shadow-2xl shadow-primary-purple-500/20"
                loading="lazy"
                width="1200"
                height="677"
              />
            </motion.div>
            <motion.div 
              className="md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-5 flex items-center gap-4">
                <span className="text-4xl">📈</span> Reportes Que Hablan tu Idioma
              </h3>
              <p className="text-lg text-gray-300 mb-4">Nada de "métricas raras". Solo respuestas claras. Cada mes recibes un informe que responde:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-5">
                <li>¿Cuántos leads generé este mes?</li>
                <li>¿Qué botón CTA convierte más?</li>
                <li>¿De qué red social vienen mis mejores clientes?</li>
                <li>¿Qué cambiar para vender más?</li>
              </ul>
              <p className="text-primary-purple-400 text-lg font-semibold">
                Resultado: Decisiones informadas. Crecimiento predecible. No más "probar a ver qué pasa".
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center my-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="https://rkgtdjrozbieeqgicgkc.supabase.co/storage/v1/object/sign/audios/DATOS.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZGJmM2NhNy1kMzM5LTQ2N2EtYjhiZC1iZmIzNThjY2YzMDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdWRpb3MvREFUT1MucG5nIiwiaWF0IjoxNzYyNjAwNjA0LCJleHAiOjI0NTM3MTQyMDR9.LhQ4bmbQW-rbpd-X-1EFP0dit7DjJEwuDPqBuv-7HfQ"
            alt="Dashboard completo de analíticas web mostrando diversas métricas clave de rendimiento del sitio."
            className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl shadow-primary-purple-500/20"
            loading="lazy"
            width="1200"
            height="694"
          />
        </motion.div>

        <div className="my-20">
          <motion.h3 
            className="text-white text-3xl md:text-4xl font-bold text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Cómo Lo Incluimos en Tu Proyecto
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-primary-purple-500/10 border-2 border-primary-purple-500/30 rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-6 bg-primary-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">INCLUIDO ✅</div>
              <h4 className="text-white text-2xl font-bold mt-4 mb-4">Nivel 1: Analytics Básico</h4>
              <p className="text-gray-300 text-sm mb-6">Todo proyecto de Impulsa tu Marca incluye:</p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">✅<div>Instalación de tracking profesional<br/><span className="text-gray-400 text-sm">Google Tag Manager + Microsoft Clarity</span></div></li>
                <li className="flex items-start gap-3">✅<div>Seguimiento de conversiones básico<br/><span className="text-gray-400 text-sm">Clicks en CTAs, formularios enviados</span></div></li>
                <li className="flex items-start gap-3">✅<div>Dashboard de métricas en vivo<br/><span className="text-gray-400 text-sm">Acceso a Google Analytics</span></div></li>
                <li className="flex items-start gap-3">✅<div>Capacitación de 30 minutos<br/><span className="text-gray-400 text-sm">Te enseñamos a leer los datos</span></div></li>
              </ul>
              <p className="text-primary-purple-400 text-lg font-semibold mt-6">Sin costo adicional</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-primary-purple-500/20 to-primary-purple-500/5 border-2 border-primary-purple-500 rounded-2xl p-8 relative shadow-2xl shadow-primary-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-primary-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">RECOMENDADO 🔥</div>
              <h4 className="text-white text-2xl font-bold mt-4 mb-4">Nivel 2: Analytics Avanzado</h4>
              <p className="text-gray-300 text-sm mb-6">Para negocios que quieren crecimiento serio:</p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">✅ Todo lo del Nivel 1, más:</li>
                <li className="flex items-start gap-3">✅<div>Configuración avanzada de eventos<br/><span className="text-gray-400 text-sm">Trackeo específico de cada acción clave</span></div></li>
                <li className="flex items-start gap-3">✅<div>Integración con ads<br/><span className="text-gray-400 text-sm">Meta Pixel, LinkedIn Insight Tag</span></div></li>
                <li className="flex items-start gap-3">✅<div>Reporte mensual con insights<br/><span className="text-gray-400 text-sm">Te decimos qué cambiar y por qué</span></div></li>
                <li className="flex items-start gap-3">✅<div>Dashboard personalizado<br/><span className="text-gray-400 text-sm">Panel visual en Looker Studio</span></div></li>
              </ul>
              <div className="mt-6">
                <p className="text-white text-3xl font-bold">+€300</p>
                <p className="text-gray-400 text-sm line-through">Valor real: €800+</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            className="text-white text-3xl md:text-4xl font-bold mb-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            La Diferencia Entre Crecer y Sobrevivir Son Los Datos
          </motion.h3>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              He visto esto cientos de veces: un emprendedor invierte €2,000 en una web profesional. Se ve increíble. Comparte en redes. Pero después... ¿qué?
            </p>
            <div className="bg-primary-purple-500/10 border-l-4 border-primary-purple-500 p-6 my-8 text-left">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>¿Cuántos visitantes realmente hubo?</li>
                <li>¿Cuántos hicieron click en "Agendar llamada"?</li>
                <li>¿Cuántos llegaron al formulario y se fueron sin completarlo?</li>
                <li>¿Por qué nadie compra si el producto es bueno?</li>
              </ul>
            </div>
            <p className="text-white text-xl font-bold mb-8">
              Sin datos, solo hay silencio. Y suposiciones.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Mientras tanto, la competencia <strong className="text-white">sabe exactamente</strong> qué funciona. Porque <strong className="text-primary-purple-400">mide</strong>.
            </p>
            <p className="text-white text-xl font-bold mt-8">
              No se trata de tener más tráfico. Se trata de saber qué hacer con el tráfico que ya tienes.
            </p>
             <p className="text-primary-purple-400 text-xl font-bold mt-8">
              Una web sin analytics es dinero quemándose. Lento. Invisible. Pero se quema.
            </p>
          </motion.div>

          <motion.div 
            className="mt-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
              ¿Listo Para Saber Qué Pasa en Tu Web?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              No más adivinar. Datos claros. Decisiones inteligentes. Resultados medibles. Agenda una consultoría gratuita y te mostramos cómo convertir tu web en una máquina de información que <strong className="text-primary-purple-400">te dice exactamente cómo crecer</strong>.
            </p>
            <a
              href="#formulario"
              onClick={scrollToForm}
              className="inline-block px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-purple-600 to-primary-blue-500 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900 focus-visible:ring-purple-500"
            >
              Quiero Inteligencia de Datos Para Mi Negocio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;