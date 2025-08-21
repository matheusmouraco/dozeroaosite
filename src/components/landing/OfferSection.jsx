import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, CheckCircle, CreditCard, ArrowRight, Zap, Star, TrendingUp } from 'lucide-react';

export default function OfferSection() {
  const bonuses = [
    "Template de proposta para vender sites",
    "Checklist de publicação",
    "Mini-aula: como fechar clientes no WhatsApp"
  ];

  return (
    <section className="py-20 px-6 bg-gray-950 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-white/3 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-8 px-6 py-3 bg-gray-900 text-gray-300 border border-gray-800 font-medium text-lg">
            💰 OFERTA ESPECIAL DE LANÇAMENTO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Investimento que se Paga
          </h2>
          <p className="text-xl text-gray-400">
            Uma única venda já cobre todo o investimento
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-2xl p-12 border border-gray-800 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            {/* Price comparison */}
            <div className="mb-8">
              <p className="text-gray-500 text-lg mb-3">Valor normal:</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl text-gray-500 line-through font-bold">R$297</span>
                <Badge className="bg-gray-800 text-gray-300 border-gray-700 px-3 py-1">
                  67% OFF
                </Badge>
              </div>
            </div>
            
            <motion.div 
              className="mb-8"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
                <div className="mb-4">
                  <span className="text-6xl md:text-8xl font-bold text-black">
                    R$97
                  </span>
                </div>
                <p className="text-xl text-gray-700 font-semibold">
                  ou em até 12x no cartão
                </p>
              </div>
            </motion.div>

            {/* ROI Calculator - Monochromatic */}
            <div className="bg-gray-950 rounded-xl p-6 border border-gray-800 mb-10">
              <h4 className="text-lg font-semibold text-white mb-6">💰 Retorno do Investimento:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">1 Site</div>
                  <div className="text-gray-300 text-lg">R$897</div>
                  <div className="text-sm text-gray-500 mt-1">ROI: 925%</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">2 Sites</div>
                  <div className="text-gray-300 text-lg">R$1.794</div>
                  <div className="text-sm text-gray-500 mt-1">ROI: 1849%</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">3 Sites</div>
                  <div className="text-gray-300 text-lg">R$2.691</div>
                  <div className="text-sm text-gray-500 mt-1">ROI: 2774%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bonuses - Monochromatic */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Gift className="w-7 h-7 text-gray-400" />
              <h3 className="text-2xl font-bold text-white">Bônus Exclusivos (Valor: R$197):</h3>
            </div>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-gray-950 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                    <CheckCircle className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-lg font-medium text-gray-200 flex-grow">{bonus}</span>
                  <Badge className="bg-gray-800 text-gray-400 border-gray-700 text-xs">
                    GRÁTIS
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl font-bold bg-white text-black hover:bg-gray-100 border-0 transition-all duration-300 shadow-xl w-full md:w-auto"
              >
                <Zap className="mr-3 w-6 h-6" />
                GARANTIR MINHA VAGA AGORA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </motion.div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}