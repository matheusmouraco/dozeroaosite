import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Globe, DollarSign, RotateCcw } from 'lucide-react';

export default function LearningSection() {
  const learningItems = [
    {
      icon: Zap,
      title: "Criar sites completos em minutos",
      description: "Aprenda a usar IA para criar sites profissionais rapidamente"
    },
    {
      icon: Globe,
      title: "Publicar seu site de forma simples e rápida",
      description: "Processo step-by-step para colocar seu site no ar"
    },
    {
      icon: Globe,
      title: "Conectar o site a um domínio profissional",
      description: "Configuração completa para um site 100% profissional"
    },
    {
      icon: DollarSign,
      title: "Vender esse serviço e lucrar já com seus primeiros clientes",
      description: "Estratégias práticas para monetizar imediatamente"
    },
    {
      icon: RotateCcw,
      title: "Ter um processo repetível para gerar renda extra",
      description: "Sistema escalável para crescer seus ganhos"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            O que você vai aprender
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No curso você vai dominar cada passo do processo, do zero ao primeiro cliente
          </p>
        </motion.div>

        <div className="space-y-4">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-gray-800 rounded-md flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}