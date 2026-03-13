import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Eye } from 'lucide-react';

export const Slide1 = () => (
  <div className="flex flex-col items-center justify-center h-full w-full text-center">
    <motion.img 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      src="https://leydux.com.br/wp-content/uploads/2026/03/linkar-academy-3.svg" 
      alt="Linkar Academy" 
      className="w-full max-w-sm mb-12"
    />
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-base md:text-lg font-light tracking-widest text-white/80 max-w-2xl"
    >
      Programa de Formação Interdisciplinar em Marketing para Organizações e Negócios
    </motion.p>
  </div>
);

export const Slide2 = () => (
  <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-5xl font-serif text-brand-gold mb-12"
    >
      Sobre o Linkar Academy
    </motion.h2>
    <div className="space-y-8 text-xl leading-relaxed text-brand-blue/90">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        O Linkar Academy é uma iniciativa educacional voltada para a formação de profissionais preparados para atuar em ambientes organizacionais cada vez mais exigentes.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        Nosso modelo de ensino integra diferentes áreas do conhecimento — marketing, comunicação, comportamento profissional e estratégia de negócios — criando uma formação interdisciplinar orientada às demandas reais do mercado.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        O objetivo é preparar profissionais capazes de compreender contextos empresariais complexos e contribuir ativamente para o crescimento das organizações.
      </motion.p>
    </div>
  </div>
);

export const Slide3 = () => (
  <div className="flex flex-col justify-center h-full max-w-6xl mx-auto w-full px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="relative bg-white p-10 rounded-2xl border border-brand-blue/10 shadow-xl shadow-brand-blue/5 overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <Target className="w-12 h-12 text-brand-gold mb-6" strokeWidth={1.5} />
        <h3 className="text-3xl font-serif text-brand-blue mb-4">Propósito</h3>
        <p className="text-lg leading-relaxed text-brand-blue/70">
          Desenvolver profissionais preparados para atuar com visão estratégica, protagonismo e responsabilidade dentro das organizações e dos negócios.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="relative bg-white p-10 rounded-2xl border border-brand-blue/10 shadow-xl shadow-brand-blue/5 overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <Compass className="w-12 h-12 text-brand-gold mb-6" strokeWidth={1.5} />
        <h3 className="text-3xl font-serif text-brand-blue mb-4">Missão</h3>
        <p className="text-lg leading-relaxed text-brand-blue/70">
          Formar profissionais por meio de uma educação interdisciplinar que integra marketing, comunicação, comportamento profissional e estratégia de negócios, preparando-os para atuar de forma relevante e transformadora no mercado.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="relative bg-white p-10 rounded-2xl border border-brand-blue/10 shadow-xl shadow-brand-blue/5 overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <Eye className="w-12 h-12 text-brand-gold mb-6" strokeWidth={1.5} />
        <h3 className="text-3xl font-serif text-brand-blue mb-4">Visão</h3>
        <p className="text-lg leading-relaxed text-brand-blue/70">
          Ser reconhecido como um ecossistema de formação profissional capaz de preparar novas gerações de profissionais estratégicos para atuar em organizações e negócios.
        </p>
      </motion.div>
    </div>
  </div>
);

export const Slide4 = () => {
  const pilares = [
    { title: "Protagonismo profissional", desc: "Acreditamos em profissionais que assumem responsabilidade sobre sua própria formação, carreira e impacto nas organizações." },
    { title: "Excelência com método", desc: "Resultados consistentes são construídos a partir de padrões, disciplina e compromisso com a qualidade." },
    { title: "Visão de negócio", desc: "Todo profissional precisa compreender o funcionamento das organizações e o impacto de suas decisões no contexto empresarial." },
    { title: "Comunicação estratégica", desc: "A capacidade de comunicar ideias com clareza, propósito e inteligência é essencial para gerar valor dentro das organizações." },
    { title: "Desenvolvimento humano", desc: "A formação profissional precisa caminhar junto com o desenvolvimento de postura, inteligência emocional e maturidade." },
    { title: "Conexão com o mercado", desc: "Aprender significa compreender a realidade das organizações e desenvolver soluções aplicáveis ao mundo dos negócios." }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-serif text-brand-gold mb-12 text-center"
      >
        Pilares de Cultura
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pilares.map((pilar, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl font-serif text-brand-gold mr-4 opacity-50">{idx + 1}.</span>
              <h4 className="text-xl font-semibold text-brand-blue">{pilar.title}</h4>
            </div>
            <p className="text-brand-blue/70 leading-relaxed pl-10">{pilar.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Slide5 = () => {
  const areas = [
    { title: "Marketing Estratégico", desc: "Planejamento, análise de mercado e posicionamento." },
    { title: "Comunicação e Narrativa", desc: "Storytelling, oratória e comunicação profissional." },
    { title: "Design e Construção de Marcas", desc: "Branding, identidade visual e percepção de valor." },
    { title: "Produção Audiovisual", desc: "Desenvolvimento de conteúdo e estratégias de comunicação digital." },
    { title: "Vendas e Conversão", desc: "Processos comerciais, relacionamento com clientes e fidelização." },
    { title: "Comportamento Profissional", desc: "Postura corporativa, ética, liderança e saúde comportamental." }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-serif text-brand-gold mb-4 text-center"
      >
        Estrutura da Formação
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-xl text-center text-brand-blue/80 mb-12"
      >
        O programa integra diferentes áreas de conhecimento:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {areas.map((area, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (idx * 0.1) }}
            className="border-l-2 border-brand-gold pl-6 py-2"
          >
            <h4 className="text-2xl font-serif text-brand-blue mb-2">{area.title}</h4>
            <p className="text-brand-blue/70 text-lg">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Slide6 = () => {
  const docentes = [
    { name: "Josuel Ventura", role: "Fundador e Diretor", img: "https://leydux.com.br/wp-content/uploads/2026/03/Josuel-Ventura.jpeg.jpg" },
    { name: "Cláudia Palermo", role: "Gestão de Relacionamento", img: "https://leydux.com.br/wp-content/uploads/2026/03/Claudia-Palermo.jpeg.jpg" },
    { name: "Paulo Victor", role: "Coordenador de TI", img: "https://leydux.com.br/wp-content/uploads/2026/03/Paulo-Victor.jpeg.jpg" },
    { name: "Marcos Fonseca", role: "Arquiteto de Marca e Percepção", img: "https://leydux.com.br/wp-content/uploads/2026/03/Marcos-Fonseca.jpeg.jpg" },
    { name: "Kênia Roman Triaca", role: "Ética, Saúde e Cultura Empresarial", img: "https://leydux.com.br/wp-content/uploads/2026/03/Kenia-Roman-Triaca.jpeg.jpg" },
    { name: "Thales Mendes", role: "Canais Digitais, Marketplaces e Automação", img: "https://leydux.com.br/wp-content/uploads/2026/03/Thales-Mendes.jpeg.jpg" },
    { name: "Júnior Biasoli", role: "Estratégias de Marketing para Indústria e Negócios", img: "https://leydux.com.br/wp-content/uploads/2026/03/Junior-Biasoli-.jpeg.jpg" },
    { name: "Marília Kanagusto", role: "Direção Visual para Marcas", img: "https://leydux.com.br/wp-content/uploads/2026/03/Marilia-Kanagusto.jpeg.jpg" },
    { name: "Joelma Ospedal", role: "Comunicação Escrita, Narrativa e Oratória", img: "https://leydux.com.br/wp-content/uploads/2026/03/Joelma-Ospedal.jpeg.jpg" },
    { name: "Mauricio Buffa", role: "Mentalidade Empreendedora & Visão de Negócios", img: "https://leydux.com.br/wp-content/uploads/2026/03/Mauricio-Buffa.jpeg.jpg" }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-7xl mx-auto w-full px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-serif text-brand-gold mb-12 text-center"
      >
        Corpo Docente
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8">
        {docentes.map((docente, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors shadow-md">
              <img src={docente.img} alt={docente.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <h4 className="font-serif text-[15px] text-brand-blue font-semibold leading-tight">{docente.name}</h4>
            <p className="text-[11px] text-brand-blue/70 mt-1.5 leading-snug px-2">{docente.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Slide7 = () => {
  return (
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto w-full px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">Estrutura em Fases</h2>
        <p className="text-brand-blue/70 text-lg">A jornada de desenvolvimento dos alunos.</p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-gold/20 -translate-y-1/2 hidden md:block"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 relative z-10">
          
          {/* Fase 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex flex-col items-center w-full md:w-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-2xl font-serif text-brand-gold shadow-lg mb-8 relative">
              1
              <div className="absolute -inset-2 rounded-full border border-brand-gold/30 animate-pulse"></div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-brand-blue/10 shadow-xl shadow-brand-blue/5 w-full text-center relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-t border-l border-brand-blue/10 rotate-45 hidden md:block"></div>
              <h3 className="text-2xl font-serif text-brand-blue mb-6">Fase 1º</h3>
              <ul className="space-y-3 text-brand-blue/70 text-sm">
                <li>Base Técnica</li>
                <li>Fundamentos Práticos</li>
                <li>Visão Integrada das Áreas</li>
              </ul>
            </div>
          </motion.div>

          {/* Fase 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col items-center w-full md:w-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center text-2xl font-serif text-brand-gold shadow-lg mb-8 relative">
              2
              <div className="absolute -inset-2 rounded-full border border-brand-gold/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-brand-blue/10 shadow-xl shadow-brand-blue/5 w-full text-center relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-t border-l border-brand-blue/10 rotate-45 hidden md:block"></div>
              <h3 className="text-2xl font-serif text-brand-blue mb-6">Fase 2º</h3>
              <ul className="space-y-3 text-brand-blue/70 text-sm">
                <li>Aprofundamento</li>
                <li>Integração Entre Disciplinas</li>
                <li>Visão Estratégica Aplicada</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export const Slide8 = () => {
  const patentes = [
    { title: "Explorer", badge: "Nível Médio - 1º Mês", desc: "Ingresso no ecossistema Linkar. Etapa de exploração, ambientação e fundamentos iniciais.", img: "https://leydux.com.br/wp-content/uploads/2026/03/01-1.png" },
    { title: "Builder", badge: "Nível Médio - Meses 2 e 3", desc: "Desenvolvimento da base técnica e aplicação orientada dos conhecimentos.", img: "https://leydux.com.br/wp-content/uploads/2026/03/02-1.png" },
    { title: "Operator", badge: "Nível Médio - Meses 4 a 6", desc: "Execução estruturada e atuação prática com acompanhamento.", img: "https://leydux.com.br/wp-content/uploads/2026/03/03-1.png" },
    { title: "Strategist", badge: "Nível Avançado - 1º Trimestre", desc: "Visão estratégica conectada aos objetivos do negócio.", img: "https://leydux.com.br/wp-content/uploads/2026/03/04-1.png", isAdvanced: true },
    { title: "Architect", badge: "Nível Avançado - Formatura", desc: "Habilidade para desenhar arquiteturas completas de growth e marketing.", img: "https://leydux.com.br/wp-content/uploads/2026/03/05-1.png", isAdvanced: true, isArchitect: true }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-7xl mx-auto w-full px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-5xl font-serif text-brand-gold mb-4">Sistema de Patentes</h2>
        <p className="text-brand-blue/70 text-lg">Criado para representar o progresso técnico, prático e estratégico dos nossos alunos.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {patentes.map((patente, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (idx * 0.1) }}
            className={`flex flex-col items-center text-center p-6 rounded-2xl w-56 transition-all duration-300 hover:-translate-y-2
              ${patente.isArchitect ? 'bg-white border-2 border-brand-gold shadow-xl shadow-brand-gold/10' : 'bg-white border border-brand-blue/10 shadow-lg hover:shadow-xl hover:border-brand-blue/20'}
            `}
          >
            <div className="w-20 h-20 mb-5 drop-shadow-md flex items-center justify-center">
              <img src={patente.img} alt={patente.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${patente.isArchitect ? 'text-brand-gold' : 'text-brand-blue'}`}>{patente.title}</h3>
            <div className={`px-3 py-1.5 rounded-full text-[11px] font-semibold mb-4 tracking-wide leading-tight
              ${patente.isArchitect || patente.isAdvanced ? 'bg-brand-gold/10 text-brand-gold' : 'bg-brand-blue/5 text-brand-blue/70'}
            `}>
              {patente.badge}
            </div>
            <p className={`text-xs leading-relaxed text-brand-blue/80`}>
              {patente.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Slide9 = () => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl flex flex-col items-center"
    >
      <img
        src="https://leydux.com.br/wp-content/uploads/2026/03/linkar-horizontal.svg"
        alt="Linkar Academy"
        className="h-10 md:h-12 mb-8"
        referrerPolicy="no-referrer"
      />
      <h2 className="text-3xl md:text-4xl font-light text-brand-blue leading-relaxed tracking-wide">
        Um curso de nível <span className="font-serif text-brand-gold italic text-4xl md:text-5xl mx-1">MBA</span>,
        <br/> com 360 horas,
        <br/> totalmente online e livre.
      </h2>
      <div className="w-24 h-px bg-brand-gold/50 mx-auto mt-12"></div>
    </motion.div>
  </div>
);
