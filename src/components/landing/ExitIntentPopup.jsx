import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { X, Shield, Clock, TrendingUp, Star } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Detecta quando o mouse sai pela parte superior da página
      if (!hasShown && e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVisible(false)}
        />

        {/* Popup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-gray-950 border-2 border-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-800">
                <Clock className="w-10 h-10 text-gray-400" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ⚠️ Espera aí!
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-8">
              Você está prestes a perder uma oportunidade única
            </h3>

            <div className="space-y-6 mb-8 text-left">
              <div className="flex items-start gap-4 bg-gray-900 rounded-lg p-4 border border-gray-800">
                <Shield className="w-8 h-8 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Garantia Total de 7 Dias</h4>
                  <p className="text-gray-300">
                    Teste o curso por 7 dias completos. Se não gostar, devolvemos 100% do seu dinheiro. 
                    <span className="text-white font-semibold"> Sem perguntas, sem complicação.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-900 rounded-lg p-4 border border-gray-800">
                <TrendingUp className="w-8 h-8 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">ROI Garantido</h4>
                  <p className="text-gray-300">
                    Com apenas <span className="text-white font-semibold">1 site vendido por R$897</span>, 
                    você já teve um retorno de <span className="text-white font-semibold">925% sobre o investimento</span>. 
                    E ainda tem os outros clientes...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
              <p className="text-lg text-gray-300 font-semibold">
                "Enquanto você pensa, outros estão criando sites e faturando..."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setIsVisible(false)}
                variant="outline"
                className="flex-1 py-3 text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-300"
              >
                Deixar passar essa chance
              </Button>
              
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full py-3 bg-white hover:bg-gray-200 text-black font-semibold"
                >
                  <Star className="mr-2 w-5 h-5" />
                  SIM! Quero Garantir Minha Vaga
                </Button>
              </motion.div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              🛡️ 7 dias de garantia • 🚀 Acesso imediato
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}