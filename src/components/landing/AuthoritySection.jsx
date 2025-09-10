
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Calendar } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="bg-gray-950 rounded-2xl p-6 md:p-12 border border-gray-900 grid md:grid-cols-5 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image Column - smaller */}
          <motion.div 
            className="md:col-span-2 w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cde104579_freepik_edit_Create-a-realistic-frontfacing-portrait-of-a-styli.png" 
                alt="Matheus Moura" 
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </motion.div>

          {/* Text Column - larger */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Matheus Moura
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-400 mb-6">
                Por que comigo?
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
              Porque eu de verdade não quero te enrolar, quero te mostrar o óbvio de forma bem clara, rápida, 
              sem firula e mostrando o que ninguém mostra de verdade. Eu estou há mais de 6 anos criando sites, 
              já fiz em HTML, já usei Wix, já usei WordPress, mas a IA está mudando tudo. Hoje 
              <span className="text-white font-semibold"> qualquer pessoa pode criar, publicar e melhor ainda, VENDER sites profissionais em minutos</span>, 
              e é isso que eu vou te ensinar, passo a passo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Calendar, number: "6+", label: "Anos de Experiência" },
                { icon: Users, number: "1000+", label: "Sites Criados" },
                { icon: Award, number: "100%", label: "Método Testado" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 bg-gray-800 rounded-md inline-block mb-3">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-xl font-bold text-white">{stat.number}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
