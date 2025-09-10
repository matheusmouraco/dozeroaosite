
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

export default function OfferSection() {
  const handleBuyClick = () => {
    window.open('https://pay.hub.la/4zASV6jFvnVq20f0H5wn', '_blank');
  };

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
          className="bg-gray-900 rounded-2xl p-12 border border-gray-800 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-2xl" />
          
          <div className="relative z-10">
            {/* Price comparison */}
            <div className="text-center mb-12">
              <div className="mb-8">
                <p className="text-gray-500 text-lg mb-3">Valor normal:</p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-3xl text-gray-500 line-through font-bold">R$197</span>
                  <Badge className="bg-gray-800 text-gray-300 border-gray-700 px-3 py-1">
                    66% OFF
                  </Badge>
                </div>
              </div>
              
              <motion.div 
                className="mb-12"
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
                      R$67
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 font-semibold">
                    Pagamento único
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleBuyClick}
                  className="px-12 py-6 text-xl font-bold bg-white text-black hover:bg-gray-100 border-0 transition-all duration-300 shadow-xl w-full md:w-auto"
                >
                  COMPRAR AGORA
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mt-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
