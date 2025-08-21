import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
            Garantia sem Risco
          </h2>
        </motion.div>

        <motion.div
          className="bg-gray-950 rounded-lg p-12 border border-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800">
                <Shield className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Garantia de 7 Dias
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                "Você tem <span className="text-white font-semibold">7 dias</span> para assistir.
                Se achar que não é pra você, basta pedir reembolso."
              </p>
              <div className="flex items-center gap-3 text-gray-400">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">100% do seu dinheiro de volta</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p 
          className="text-gray-500 mt-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Sem perguntas, sem complicação. Sua satisfação é garantida.
        </motion.p>
      </div>
    </section>
  );
}