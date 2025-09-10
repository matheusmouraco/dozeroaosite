
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Code, Users, Target } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Do zero ao site publicado em menos de 1 hora"
    },
    {
      icon: TrendingUp,
      title: "Fluxo profissional usado por quem já vende"
    },
    {
      icon: Code,
      title: "Sem precisar de programação"
    },
    {
      icon: Users,
      title: "Qualquer pessoa consegue aplicar"
    },
    {
      icon: Target,
      title: "Você já sai com tudo pronto para monetizar"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Transformação Garantida
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Saia do curso com tudo o que precisa para começar a lucrar imediatamente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-950 rounded-lg p-6 sm:p-8 border border-gray-900 hover:border-gray-800 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-center">
                <motion.div 
                  className="p-4 bg-gray-900 rounded-lg inline-block mb-6 group-hover:bg-gray-800 transition-all duration-300"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <benefit.icon className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
