import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Badge className="mb-8 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 font-semibold text-lg shadow-lg">
              🔥 TRANSFORME SUA VIDA COM IA
            </Badge>
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Você já percebeu que a IA está{' '}
          <motion.span 
            className="text-gray-400"
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            mudando tudo?
          </motion.span>
        </motion.h1>

        <motion.div 
          className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300 max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            Enquanto você espera aprender programação, já tem gente criando sites em minutos 
            e vendendo por{' '}
            <motion.span 
              className="text-white font-semibold"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              R$897 a R$1.497
            </motion.span>{' '}
            ou até mais.
          </p>
          <motion.p 
            className="text-2xl md:text-3xl font-semibold text-white"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            👉 A pergunta é: quanto tempo você ainda vai esperar para entrar nesse jogo?
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-100 border-0 transition-all duration-200 shadow-xl"
            >
              QUERO CRIAR MEU PRIMEIRO SITE EM MINUTOS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { text: "Sites em Minutos" },
            { text: "Sem Programação" },
            { text: "100% com IA" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2"
              animate={{ 
                y: [0, -2, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}