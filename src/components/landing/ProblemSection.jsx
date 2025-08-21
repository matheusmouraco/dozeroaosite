import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Frown, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      text: "Quantas vezes você tentou montar um site e desistiu no meio do caminho?"
    },
    {
      icon: AlertCircle,
      text: "O WordPress com Elementor é bacana, mas dias e dias pra criar uma landing page? Não dá né"
    },
    {
      icon: TrendingDown,
      text: "Quantas vezes pensou em oferecer esse serviço, mas travou na parte técnica?"
    },
    {
      icon: Frown,
      text: "Quantas vezes viu gente pior que você vendendo e você aí parado?"
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
            Seja sincero:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-md">
                  <problem.icon className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center bg-gray-900 rounded-lg p-8 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Enquanto isso, <span className="text-white font-semibold">o mercado continua comprando sites todos os dias</span>.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white">
            👉 A verdade é: quem não se adapta à velocidade da IA, fica pra trás.
          </p>
        </motion.div>
      </div>
    </section>
  );
}