
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight text-white">
            Você já viu que a IA está dominando.
          </h2>
          
          <p className="text-2xl md:text-3xl font-semibold mb-16 text-gray-300">
            A pergunta é: vai assistir de fora ou 
            <span className="text-white"> começar a lucrar com isso agora?</span>
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-lg p-12 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <p className="text-xl text-gray-400 mb-6">
              Não perca mais tempo. O mercado está esperando por você.
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                Sites em Minutos
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                Lucro Imediato
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="px-12 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-100 border-0 transition-all duration-200 w-full md:w-auto"
          >
            QUERO CRIAR MEU PRIMEIRO SITE EM MINUTOS
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>

          <p className="text-sm text-gray-500 mt-6">
            ⏰ Oferta por tempo limitado • 🔒 Pagamento 100% seguro • 🎯 Acesso imediato
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-block bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Este site foi feito com IA em <strong>23 MINUTOS</strong>. Acredite, isso é poderoso.</span>
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Do Zero ao Site em Minutos • Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
