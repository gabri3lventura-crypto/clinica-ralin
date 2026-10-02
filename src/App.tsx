import React, { useState, useEffect } from 'react';
import {
  Calendar,
  ChevronDown,
  Clock,
  Compass,
  ExternalLink,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X
} from 'lucide-react';

import heroImg from './assets/images/hero_editorial_listening_1790964437273.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Read cookie preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ralin_cookie_preference');
      if (saved) {
        setCookieConsent(saved);
      }
    } catch {
      // Local storage unavailable
    }
  }, []);

  const handleCookieChoice = (choice: 'essenciais' | 'todos') => {
    setCookieConsent(choice);
    try {
      localStorage.setItem('ralin_cookie_preference', choice);
    } catch {
      // Local storage unavailable
    }
  };

  // Keyboard Escape for Modal and Drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (privacyModalOpen) setPrivacyModalOpen(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [privacyModalOpen, mobileMenuOpen]);

  const whatsappPhone = '5579999715308';
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Cl%C3%ADnica%20Ralin%20e%20gostaria%20de%20agendar%20uma%20consulta.`;

  const specialities = [
    {
      id: 'dtm',
      num: '01',
      title: 'DTM & dor orofacial',
      isHighlight: true,
      desc: 'Avaliação clínica cuidadosa para desconfortos articulares na mandíbula, estalos, sensação de peso e dores musculares que irradiam pelo rosto.',
      note: 'Foco prioritário da Ralin com abordagem conservadora e não invasiva.',
      hrefText: 'Conversar sobre DTM'
    },
    {
      id: 'bruxismo',
      num: '02',
      title: 'Bruxismo',
      isHighlight: false,
      desc: 'Manejo do hábito involuntário de apertar ou ranger os dentes, diurno ou noturno, protegendo as estruturas dentárias e diminuindo a tensão crônica.',
      note: 'Placas estabilizadoras e desprogramação.',
      hrefText: 'Conversar sobre bruxismo'
    },
    {
      id: 'ortodontia',
      num: '03',
      title: 'Ortodontia & ortopedia funcional',
      isHighlight: false,
      desc: 'Alinhamento das arcadas e equilíbrio da oclusão com foco na mastigação funcional e na estabilidade biomecânica das articulações.',
      note: 'Equilíbrio da mordida e função.',
      hrefText: 'Conversar sobre ortodontia'
    },
    {
      id: 'medicas',
      num: '04',
      title: 'Consultas médicas',
      isHighlight: false,
      desc: 'Investigação clínica de possíveis causas clínicas associadas, diagnóstico diferencial com enxaquecas e suporte à saúde integral.',
      note: 'Olhar clínico e diagnóstico diferencial.',
      hrefText: 'Conversar sobre consultas médicas'
    },
    {
      id: 'ultrassonografia',
      num: '05',
      title: 'Ultrassonografia especializada',
      isHighlight: false,
      desc: 'Exame de imagem de alta precisão realizado no próprio consultório, permitindo avaliar tecidos moles e estruturas musculares com agilidade.',
      note: 'Realizado na própria clínica no bairro Luzia.',
      hrefText: 'Conversar sobre exames'
    },
    {
      id: 'nutricao',
      num: '06',
      title: 'Nutrição',
      isHighlight: false,
      desc: 'Apoio nutricional focado na modulação de processos inflamatórios silenciosos e adaptação de consistência alimentar em períodos de dor aguda.',
      note: 'Adequação alimentar e saúde sistêmica.',
      hrefText: 'Conversar sobre nutrição'
    },
    {
      id: 'psicologia',
      num: '07',
      title: 'Psicologia',
      isHighlight: false,
      desc: 'Espaço de escuta para compreender o papel da ansiedade, estresse e sobrecarga cotidiana na sustentação de tensões musculares na face.',
      note: 'Cuidado integrado mente e corpo.',
      hrefText: 'Conversar sobre psicologia'
    }
  ];

  const faqs = [
    {
      q: 'O que é DTM e quais sinais merecem atenção?',
      a: 'DTM é a sigla para Disfunção Temporomandibular, um conjunto de alterações que afetam a articulação que conecta o maxilar ao crânio (ATM) e os músculos mastigatórios. Os sinais mais comuns incluem estalos ou cliques ao mastigar, dificuldade para abrir a boca completamente, cansaço muscular no rosto ao acordar e dores que se estendem para a cabeça ou a região do ouvido. Uma avaliação profissional detalhada é o primeiro passo para identificar a origem exata.'
    },
    {
      q: 'Dor de cabeça pode ter relação com a mandíbula?',
      a: 'Sim. A musculatura da mastigação é intimamente conectada com as regiões temporal, cervical e occipital. Tensões mantidas ou apertamentos frequentes podem desencadear ou agravar dores de cabeça tensionais. Na Ralin, a avaliação médica e odontológica integrada busca diferenciar a dor orofacial de outras causas, como enxaquecas clássicas.'
    },
    {
      q: 'Bruxismo é sempre causado por estresse?',
      a: 'O estresse e a ansiedade são fatores desencadeantes e potencializadores frequentes, mas não os únicos. O bruxismo é hoje compreendido como um comportamento influenciado pelo sistema nervoso central, pela qualidade do sono, por microdespertares noturnos e por hábitos posturais. Por isso, olhamos para a rotina e o contexto de cada pessoa.'
    },
    {
      q: 'Como funciona a primeira consulta para DTM?',
      a: 'A primeira consulta é uma conversa com tempo e calma. Ouvimos a história da sua dor, quando ela começou e como impacta suas atividades diárias. Em seguida, realizamos palpação dos músculos da face e da cabeça, avaliamos os movimentos da mandíbula e, quando indicado, exames complementares de imagem são solicitados ou realizados para fundamentar o plano de cuidado.'
    },
    {
      q: 'Quanto tempo dura o tratamento de DTM ou bruxismo?',
      a: 'Como cada organismo responde de maneira particular, não trabalhamos com prazos fixos ou garantias. Na maioria dos casos, com o uso de placas estabilizadoras adequadas, ajustes de hábitos e condutas terapêuticas conservadoras, os pacientes relatam alívio perceptível logo nas primeiras semanas de acompanhamento contínuo.'
    }
  ];

  const testimonials = [
    {
      initials: 'J. C.',
      name: 'Jefferson Costa',
      quote: 'Excelente atendimento desde a recepção até os profissionais especialistas.',
      tag: 'Avaliação verificada no Google'
    },
    {
      initials: 'G. T.',
      name: 'Gabrielle Torres',
      quote: 'Atendimento exemplar, ambiente limpo e tratamentos de qualidade.',
      tag: 'Avaliação verificada no Google'
    },
    {
      initials: 'F. T.',
      name: 'Fábio Teles',
      quote: 'Você agenda, passa todos os dados, liga para a clínica, fala por WhatsApp.',
      tag: 'Avaliação verificada no Google'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#19392D] font-body selection:bg-[#1D4636] selection:text-[#FBF8F1]">
      {/* 1. CABEÇALHO FIXO */}
      <header className="sticky top-0 z-40 bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#19392D]/10 transition-colors">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Marca Tipográfica Provisória */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4636] rounded-md p-1"
          >
            {/* Símbolo circular simples com 3 traços orgânicos */}
            <div className="w-9 h-9 rounded-full border border-[#DCE8DF] bg-[#E8EEE7] flex items-center justify-center p-1.5 shrink-0 group-hover:border-[#19392D]/30 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#19392D]" fill="none" stroke="currentColor">
                <line x1="8" y1="6" x2="8" y2="18" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="4" x2="12" y2="20" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="7" x2="16" y2="17" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#19392D] leading-none">
                ralin
              </span>
              <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#66736B] font-semibold mt-1">
                saúde integrada
              </span>
            </div>
          </a>

          {/* Navegação Central Desktop */}
          <nav className="hidden md:flex items-center gap-7 font-heading text-sm font-medium text-[#19392D]/80">
            <a href="#cuidado" className="hover:text-[#19392D] transition-colors py-1">O cuidado</a>
            <a href="#especialidades" className="hover:text-[#19392D] transition-colors py-1">Especialidades</a>
            <a href="#como-funciona" className="hover:text-[#19392D] transition-colors py-1">Como funciona</a>
            <a href="#duvidas" className="hover:text-[#19392D] transition-colors py-1">Dúvidas</a>
            <a href="#localizacao" className="hover:text-[#19392D] transition-colors py-1">Localização</a>
          </nav>

          {/* Ação Direita */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-[#19392D] text-[#19392D] hover:bg-[#19392D] hover:text-[#FBF8F1] font-heading text-xs font-semibold tracking-wide uppercase transition-all duration-200"
            >
              Fale com a equipe
            </a>

            {/* Menu Hambúrguer Acessível Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-[#19392D] hover:bg-[#E8EEE7] transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Gaveta do Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#19392D]/10 bg-[#F7F5EF] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 font-heading text-base font-medium text-[#19392D]">
              <a
                href="#cuidado"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#19392D]/5"
              >
                O cuidado
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#19392D]/5"
              >
                Especialidades
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#19392D]/5"
              >
                Como funciona
              </a>
              <a
                href="#duvidas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#19392D]/5"
              >
                Dúvidas
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#19392D]/5"
              >
                Localização
              </a>
            </nav>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-md bg-[#19392D] text-[#FBF8F1] font-heading text-sm font-semibold tracking-wide"
              >
                <MessageCircle className="w-4 h-4 text-[#DDBD9E]" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 2. HERO EDITORIAL COM FOTOGRAFIA DE ESCUTA */}
        <section className="relative overflow-hidden min-h-[580px] lg:min-h-[635px] flex items-center bg-[#19392D] text-[#FBF8F1]">
          {/* Imagem de Fundo Posicionada à Direita */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg}
              alt="Ambiente sereno de consultório com profissional em diálogo acolhedor e escuta atenta"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-right md:object-[75%_center] opacity-45 lg:opacity-75"
            />
            {/* Degradê verde escuro da esquerda para a direita, mais forte atrás do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#19392D] via-[#19392D]/95 md:via-[#19392D]/85 to-[#19392D]/35" />
          </div>

          <div className="relative z-10 max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            <div className="max-w-2xl space-y-6">
              {/* Selo Pequeno */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16372B]/80 border border-[#DCE8DF]/20 text-[#DDBD9E] font-heading text-xs uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDBD9E]" />
                <span>Cuidado integrado em Aracaju</span>
              </div>

              {/* Título Editorial Grande */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.12] text-[#FBF8F1] tracking-tight">
                Sua dor merece ser <span className="italic text-[#DDBD9E] font-normal">escutada.</span>
              </h1>

              {/* Texto com Espaço para Olhar por Inteiro */}
              <p className="text-base sm:text-lg text-[#FBF8F1]/85 font-light leading-relaxed max-w-xl">
                Um cuidado atento para quem convive com dor na mandíbula, desconforto no rosto ou bruxismo — com espaço para olhar você por inteiro.
              </p>

              {/* Botões e Links de Ação */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#DDBD9E] hover:bg-[#D5B18E] text-[#19392D] font-heading text-sm font-semibold tracking-wide transition-colors duration-200 shadow-sm"
                >
                  Vamos conversar
                </a>
                <a
                  href="#cuidado"
                  className="inline-flex items-center text-sm font-heading font-medium text-[#FBF8F1]/90 hover:text-white underline underline-offset-4 decoration-[#DDBD9E]/60 transition-colors"
                >
                  Conheça o cuidado
                </a>
              </div>

              {/* Prova Social Compacta */}
              <div className="pt-4 flex items-center gap-3 text-xs text-[#FBF8F1]/75 font-heading">
                <div className="flex text-[#DDBD9E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#FBF8F1]">4,6 no Google</span>
                <span className="text-white/30">·</span>
                <span>Mais de 600 avaliações de referência</span>
              </div>
            </div>

            {/* Elementos Editoriais nas Extremidades */}
            <div className="mt-12 lg:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FBF8F1]/60 font-heading">
              <a
                href="#cuidado"
                className="inline-flex items-center gap-1.5 hover:text-[#DDBD9E] transition-colors"
              >
                <span>Role para conhecer</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
              <span className="italic text-[#DDBD9E]/90 font-editorial text-sm">
                Escuta, avaliação e cuidado em conjunto.
              </span>
            </div>
          </div>
        </section>

        {/* 3. FAIXA DE CONFIANÇA */}
        <section className="bg-[#E8EEE7] border-b border-[#DCE8DF] py-7">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DCE8DF]">
              {/* Item 1 */}
              <div className="flex items-center gap-3.5 pt-4 md:pt-0">
                <div className="w-9 h-9 rounded-full bg-[#DCE8DF] text-[#19392D] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#19392D]">Olhar integrado</h4>
                  <p className="text-xs text-[#66736B]">Especialidades em diálogo</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-9 h-9 rounded-full bg-[#DCE8DF] text-[#19392D] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#19392D]">Atendimento com hora marcada</h4>
                  <p className="text-xs text-[#66736B]">Organizado para sua rotina</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-8">
                <div className="w-9 h-9 rounded-full bg-[#DCE8DF] text-[#19392D] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#19392D]">No bairro Luzia</h4>
                  <p className="text-xs text-[#66736B]">Aracaju, Sergipe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SOBRE A CLÍNICA */}
        <section id="cuidado" className="py-20 lg:py-28 bg-[#F7F5EF]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Coluna Esquerda: Ilustração Geométrica Minimalista Sereno */}
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-[4/3] rounded-xl border border-[#DCE8DF] bg-[#E8EEE7]/60 p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
                  {/* Arte vetorial estilizada da janela, cadeira e planta */}
                  <svg viewBox="0 0 400 300" className="w-full h-full text-[#19392D]" fill="none">
                    {/* Janela ao fundo com luz suave */}
                    <rect x="230" y="40" width="130" height="150" rx="4" stroke="#C8D8CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="295" y1="40" x2="295" y2="190" stroke="#C8D8CC" strokeWidth="1.5" />
                    <line x1="230" y1="115" x2="360" y2="115" stroke="#C8D8CC" strokeWidth="1.5" />

                    {/* Vaso de planta com linhas orgânicas */}
                    <path d="M 60 210 L 85 210 L 80 250 L 65 250 Z" stroke="#19392D" strokeWidth="1.5" fill="#DCE8DF" />
                    <path d="M 72 210 Q 55 170 40 160 Q 60 175 72 205" stroke="#1D4636" strokeWidth="1.5" fill="none" />
                    <path d="M 72 205 Q 85 155 105 145 Q 85 175 74 205" stroke="#1D4636" strokeWidth="1.5" fill="none" />
                    <path d="M 72 200 Q 72 150 68 135 Q 78 160 74 195" stroke="#1D4636" strokeWidth="1.5" fill="none" />

                    {/* Cadeira de acolhimento com traço arquitetônico calmo */}
                    <path d="M 150 240 L 150 200 Q 150 170 180 170 L 230 170 Q 250 170 250 200 L 250 240" stroke="#19392D" strokeWidth="1.75" />
                    <line x1="165" y1="240" x2="165" y2="270" stroke="#19392D" strokeWidth="1.5" />
                    <line x1="235" y1="240" x2="235" y2="270" stroke="#19392D" strokeWidth="1.5" />
                    <line x1="140" y1="270" x2="260" y2="270" stroke="#C8D8CC" strokeWidth="1.5" />

                    {/* Luminária discreta */}
                    <line x1="330" y1="270" x2="330" y2="170" stroke="#C8D8CC" strokeWidth="1.5" />
                    <path d="M 315 170 Q 330 155 345 170 Z" stroke="#D5B18E" strokeWidth="1.5" fill="#F7F5EF" />
                  </svg>

                  {/* Cartão Sobreposto com a Nota do Google */}
                  <div className="absolute bottom-5 right-5 bg-[#F7F5EF] border border-[#DCE8DF] rounded-lg p-3.5 shadow-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#19392D] text-[#DDBD9E] flex items-center justify-center font-editorial font-bold text-sm">
                      ★
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#19392D]">
                        4,6 no Google
                      </div>
                      <div className="text-[11px] text-[#66736B]">
                        +600 avaliações de pacientes
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Conteúdo Editorial */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-heading text-xs uppercase tracking-widest text-[#1D4636] font-semibold">
                  Sobre a Ralin
                </span>

                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#19392D] leading-tight">
                  Um cuidado que começa por ouvir.
                </h2>

                <p className="font-editorial italic text-lg sm:text-xl text-[#19392D] leading-relaxed border-l-2 border-[#DDBD9E] pl-4 py-1">
                  “Conviver com dor pode trazer muitas perguntas. Aqui, sua história tem lugar antes de qualquer plano.”
                </p>

                <div className="space-y-4 text-sm sm:text-base text-[#66736B] leading-relaxed font-light">
                  <p>
                    A dor orofacial e o hábito de apertar ou ranger os dentes raramente têm uma causa isolada. É comum que pessoas passem por diferentes consultas sem compreender exatamente o que está acontecendo com sua musculatura ou articulação temporomandibular.
                  </p>
                  <p>
                    Na Ralin, reunimos profissionais de odontologia especializada, medicina, ultrassonografia, nutrição e psicologia. Cada indicação depende das necessidades identificadas durante a avaliação inicial, em um diálogo transparente e ético com você.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="#especialidades"
                    className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-[#19392D] hover:text-[#1D4636] underline underline-offset-4 decoration-[#DDBD9E] transition-colors"
                  >
                    <span>Conheça nossas especialidades</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ESPECIALIDADES */}
        <section id="especialidades" className="py-20 lg:py-28 bg-[#E6EDE5] border-t border-[#DCE8DF]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3 mb-12">
              <span className="font-heading text-xs uppercase tracking-widest text-[#1D4636] font-semibold">
                Áreas de Atenção
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#19392D]">
                O que podemos olhar juntos.
              </h2>
              <p className="text-sm sm:text-base text-[#66736B] font-light leading-relaxed">
                Diferentes perspectivas podem fazer parte do cuidado, conforme a avaliação individual de cada pessoa e de seus sintomas.
              </p>
            </div>

            {/* Grade de Cartões: 4 Colunas no Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {specialities.map((item) => {
                if (item.isHighlight) {
                  return (
                    <div
                      key={item.id}
                      className="col-span-1 sm:col-span-2 lg:col-span-2 bg-[#19392D] text-[#FBF8F1] rounded-xl p-7 lg:p-8 flex flex-col justify-between border border-[#19392D] shadow-sm relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#DDBD9E]">
                            {item.num} · Destaque
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#DDBD9E]" />
                        </div>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#FBF8F1] leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#FBF8F1]/85 font-light leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="pt-2 text-xs text-[#DDBD9E] font-heading font-medium">
                          {item.note}
                        </div>
                      </div>

                      <div className="pt-8 mt-6 border-t border-white/10">
                        <a
                          href={`https://wa.me/${whatsappPhone}?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20${encodeURIComponent(item.title)}%20na%20Cl%C3%ADnica%20Ralin.`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wider font-semibold text-[#DDBD9E] hover:text-white transition-colors"
                        >
                          <span>{item.hrefText}</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.id}
                    className="bg-[#F7F5EF] text-[#19392D] rounded-xl p-6 flex flex-col justify-between border border-[#DCE8DF] hover:border-[#19392D]/20 transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="font-heading text-xs font-semibold text-[#66736B]">
                        {item.num}
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#19392D]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#66736B] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#DCE8DF]/60">
                      <a
                        href={`https://wa.me/${whatsappPhone}?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20${encodeURIComponent(item.title)}%20na%20Cl%C3%ADnica%20Ralin.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-[#19392D] hover:text-[#1D4636] transition-colors"
                      >
                        <span>Conversar</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nota de esclarecimento e responsabilidade clínica */}
            <div className="mt-8 pt-4 text-center">
              <p className="text-xs text-[#66736B] font-light italic">
                A indicação de cada especialidade acontece após avaliação. Nenhuma conduta substitui uma consulta individual.
              </p>
            </div>
          </div>
        </section>

        {/* 6. COMO FUNCIONA */}
        <section id="como-funciona" className="py-20 lg:py-28 bg-[#F7F5EF]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Esquerda: Mensagem de Acolhimento */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <span className="font-heading text-xs uppercase tracking-widest text-[#1D4636] font-semibold">
                  Jornada de Atendimento
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#19392D] leading-tight">
                  Um passo de cada vez. <span className="italic">Junto.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#66736B] font-light leading-relaxed">
                  Sabemos que marcar uma consulta quando se está com dor pode ser cansativo. Por isso, simplificamos o contato com um atendimento atencioso e humano desde a primeira mensagem.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#19392D] hover:bg-[#16372B] text-[#FBF8F1] font-heading text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#DDBD9E]" />
                    <span>Agendar pelo WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Direita: Linha Vertical com os 3 Passos */}
              <div className="lg:col-span-7 relative pl-4 sm:pl-8 border-l border-[#DCE8DF] space-y-10">
                {/* Passo 1 */}
                <div className="relative group">
                  <div className="absolute -left-[25px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-[#E8EEE7] border-2 border-[#19392D] text-[#19392D] flex items-center justify-center font-heading text-xs font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#19392D]">
                      Conte o que você sente
                    </h3>
                    <p className="text-sm text-[#66736B] font-light leading-relaxed">
                      Entre em contato pelo WhatsApp (79) 99971-5308. Nossa equipe escuta suas principais queixas de dor ou desconforto e orienta sobre horários disponíveis.
                    </p>
                  </div>
                </div>

                {/* Passo 2 */}
                <div className="relative group">
                  <div className="absolute -left-[25px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-[#E8EEE7] border-2 border-[#19392D] text-[#19392D] flex items-center justify-center font-heading text-xs font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#19392D]">
                      Uma avaliação com escuta
                    </h3>
                    <p className="text-sm text-[#66736B] font-light leading-relaxed">
                      Na consulta, conversamos detalhadamente sobre a sua rotina, o histórico das dores e examinamos a musculatura da face, a mastigação e a mobilidade da mandíbula.
                    </p>
                  </div>
                </div>

                {/* Passo 3 */}
                <div className="relative group">
                  <div className="absolute -left-[25px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-[#E8EEE7] border-2 border-[#19392D] text-[#19392D] flex items-center justify-center font-heading text-xs font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#19392D]">
                      Próximos passos com clareza
                    </h3>
                    <p className="text-sm text-[#66736B] font-light leading-relaxed">
                      Apresentamos com transparência as possibilidades de cuidado — desde placas de proteção, orientações musculares ou integração com outras áreas se for necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. AVALIAÇÕES */}
        <section className="py-20 lg:py-28 bg-[#E8EEE7] border-t border-[#DCE8DF]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto space-y-3 mb-14">
              <span className="font-heading text-xs uppercase tracking-widest text-[#1D4636] font-semibold">
                Depoimentos
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#19392D]">
                Confiança se constrói no encontro.
              </h2>
              {/* Bloco compacto no topo */}
              <div className="pt-2 inline-flex items-center gap-2 bg-[#F7F5EF] px-4 py-1.5 rounded-full border border-[#DCE8DF] text-xs font-heading font-medium text-[#19392D]">
                <div className="flex text-[#D5B18E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4,6 no Google</span>
                <span className="text-[#66736B]">·</span>
                <span>Mais de 600 avaliações de pacientes</span>
              </div>
            </div>

            {/* Três Depoimentos em Cartões Claros */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F5EF] rounded-xl p-7 border border-[#DCE8DF] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex text-[#D5B18E]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="font-editorial italic text-[#19392D] text-base leading-relaxed">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-[#DCE8DF] flex items-center justify-between">
                    <div>
                      <div className="font-heading font-bold text-xs text-[#19392D]">
                        {t.initials} — {t.name}
                      </div>
                      <div className="text-[11px] text-[#66736B]">
                        {t.tag}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-[#66736B] italic font-light">
                Experiências individuais não representam garantia de resultados.
              </p>
            </div>
          </div>
        </section>

        {/* 8. PERGUNTAS FREQUENTES (FAQ) */}
        <section id="duvidas" className="py-20 lg:py-28 bg-[#F7F5EF]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Esquerda: Título e Link */}
              <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
                <span className="font-heading text-xs uppercase tracking-widest text-[#1D4636] font-semibold">
                  Esclarecimentos
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#19392D] leading-tight">
                  Suas dúvidas importam. <span className="italic">Mesmo.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#66736B] font-light leading-relaxed">
                  Informações prudentes e transparentes sobre o que esperar da investigação e do manejo de DTM e bruxismo.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wider font-semibold text-[#19392D] hover:text-[#1D4636] underline underline-offset-4 decoration-[#DDBD9E] transition-colors"
                  >
                    <span>Falar com a equipe pelo WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Direita: Acordeão Acessível */}
              <div className="lg:col-span-7 space-y-3" role="region" aria-label="Perguntas Frequentes">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#DCE8DF] rounded-lg bg-[#F7F5EF] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setOpenFaq(isOpen ? null : idx);
                          }
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${idx}`}
                        id={`faq-btn-${idx}`}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-[#19392D] hover:bg-[#E8EEE7]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4636]"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#19392D]/70 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#19392D]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-answer-${idx}`}
                          role="region"
                          aria-labelledby={`faq-btn-${idx}`}
                          className="px-5 pb-5 text-sm text-[#66736B] font-light leading-relaxed border-t border-[#DCE8DF]/40 pt-3"
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 9. LOCALIZAÇÃO */}
        <section id="localizacao" className="py-20 lg:py-24 bg-[#E8EEE7] border-t border-[#DCE8DF]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Esquerda: Informações de Endereço */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-heading text-xs uppercase tracking-widest text-[#1D4636] font-semibold">
                    Localização
                  </span>
                  <h2 className="font-editorial text-3xl font-normal text-[#19392D] mt-1">
                    Um lugar perto de você.
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-[#19392D]">
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#19392D]">
                      Clínica Ralin Saúde Integrada
                    </h3>
                    <p className="text-[#66736B] mt-1 font-light">
                      Av. Hermes Fontes, 1896 — Luzia<br />
                      Aracaju - SE, CEP 49048-010
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#DCE8DF]">
                    <span className="font-heading font-semibold text-xs uppercase tracking-wider text-[#66736B] block mb-1">
                      Horário de Funcionamento
                    </span>
                    <p className="text-[#19392D] font-medium">
                      Segunda a Sexta-feira: 08h às 18h
                    </p>
                    <p className="text-xs text-[#66736B] mt-0.5">
                      Consultas com horário marcado
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#DCE8DF]">
                    <span className="font-heading font-semibold text-xs uppercase tracking-wider text-[#66736B] block mb-1">
                      Contato e Agendamento
                    </span>
                    <p className="text-[#19392D] font-medium">
                      WhatsApp: (79) 99971-5308
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Av.+Hermes+Fontes,+1896+-+Luzia,+Aracaju+-+SE,+49048-010"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#19392D] text-[#19392D] hover:bg-[#19392D] hover:text-[#FBF8F1] font-heading text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Abrir no Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Direita: Mapa Incorporado com Etiqueta Discreta */}
              <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-[#DCE8DF] shadow-sm h-80 sm:h-96 bg-[#DCE8DF]">
                {/* Etiqueta Discreta Sobre o Mapa */}
                <div className="absolute top-4 left-4 z-10 bg-[#F7F5EF]/95 backdrop-blur-sm border border-[#DCE8DF] px-3.5 py-1.5 rounded-md text-xs font-heading font-semibold text-[#19392D] shadow-sm">
                  Clínica Ralin · Luzia · Aracaju, SE
                </div>

                <iframe
                  title="Localização da Clínica Ralin na Av. Hermes Fontes, Aracaju"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4815468759577!2d-37.06915152399221!3d-10.938837189219662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab26a0f449a5b%3A0xe54d3bb997bbdcb3!2sAv.%20Hermes%20Fontes%2C%201896%20-%20Luzia%2C%20Aracaju%20-%20SE%2C%2049048-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10. CHAMADA FINAL */}
        <section className="py-20 lg:py-24 bg-[#1D4636] text-[#FBF8F1] relative overflow-hidden">
          {/* Círculos concêntricos orgânicos e sutis no fundo */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -right-12 -top-12 w-[30rem] h-[30rem] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -right-4 -top-4 w-[36rem] h-[36rem] rounded-full border border-white/5 pointer-events-none" />

          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF8F1] leading-tight">
                  Vamos ouvir o que você sente.
                </h2>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm sm:text-base text-[#FBF8F1]/85 font-light leading-relaxed">
                  Entre em contato para tirar dúvidas, saber mais sobre a avaliação de DTM e bruxismo ou encontrar o melhor horário para você.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#DDBD9E] hover:bg-[#D5B18E] text-[#19392D] font-heading text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-sm"
                  >
                    Chamar no WhatsApp
                  </a>
                  <span className="text-xs text-[#FBF8F1]/70 font-heading">
                    (79) 99971-5308
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. RODAPÉ */}
      <footer className="bg-[#16372B] text-[#FBF8F1] py-16 border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Coluna 1: Marca e Frase */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center p-1 text-[#DDBD9E]">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                    <line x1="8" y1="6" x2="8" y2="18" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="4" x2="12" y2="20" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="7" x2="16" y2="17" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#FBF8F1]">
                  ralin
                </span>
              </div>
              <p className="text-xs text-[#FBF8F1]/70 font-light leading-relaxed">
                Clínica médica e odontológica com foco em escuta acolhedora, DTM, dor orofacial e bruxismo em Aracaju/SE.
              </p>
            </div>

            {/* Coluna 2: Seções Principais */}
            <div className="space-y-2 text-xs font-heading">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#DDBD9E] mb-3">
                Navegação
              </h4>
              <div><a href="#cuidado" className="text-[#FBF8F1]/80 hover:text-white transition-colors">O cuidado</a></div>
              <div><a href="#especialidades" className="text-[#FBF8F1]/80 hover:text-white transition-colors">Especialidades</a></div>
              <div><a href="#como-funciona" className="text-[#FBF8F1]/80 hover:text-white transition-colors">Como funciona</a></div>
              <div><a href="#duvidas" className="text-[#FBF8F1]/80 hover:text-white transition-colors">Dúvidas frequentes</a></div>
              <div><a href="#localizacao" className="text-[#FBF8F1]/80 hover:text-white transition-colors">Localização</a></div>
            </div>

            {/* Coluna 3: Endereço e Horário */}
            <div className="space-y-2 text-xs font-heading text-[#FBF8F1]/80">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#DDBD9E] mb-3">
                Endereço
              </h4>
              <p>Av. Hermes Fontes, 1896</p>
              <p>Bairro Luzia · Aracaju, SE</p>
              <p>CEP 49048-010</p>
              <p className="pt-2 text-[#DDBD9E]">Segunda a Sexta · 08h às 18h</p>
            </div>

            {/* Coluna 4: Contato, Instagram e Privacidade */}
            <div className="space-y-3 text-xs font-heading">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#DDBD9E] mb-3">
                Contato
              </h4>
              <p className="text-[#FBF8F1]/80">WhatsApp: (79) 99971-5308</p>
              <a
                href="https://instagram.com/ralinsaude"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#FBF8F1]/80 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#DDBD9E]" />
                <span>@ralinsaude</span>
              </a>
              <div className="pt-2">
                <button
                  onClick={() => setPrivacyModalOpen(true)}
                  className="text-xs text-[#DDBD9E] hover:underline underline-offset-2 cursor-pointer font-medium"
                >
                  Privacidade e cookies
                </button>
              </div>
            </div>
          </div>

          {/* Linha Final com Direitos e Aviso */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF8F1]/50 font-heading">
            <p>© {new Date().getFullYear()} Clínica Ralin Saúde Integrada. Todos os direitos reservados.</p>
            <p className="text-center sm:text-right italic max-w-md">
              As informações presentes neste site possuem caráter educativo e não substituem uma consulta com profissional habilitado.
            </p>
          </div>
        </div>
      </footer>

      {/* 12. BOTÃO FLUTUANTE DE WHATSAPP (Ajustado para mobile e desktop) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com a equipe da Clínica Ralin pelo WhatsApp"
          className="group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#19392D] text-[#FBF8F1] border border-[#DDBD9E]/40 hover:bg-[#1D4636] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5 text-[#DDBD9E] shrink-0" />
          {/* Oculto no celular mantendo círculo compacto */}
          <span className="font-heading font-medium text-xs tracking-wide hidden sm:inline text-[#FBF8F1]">
            Conversar com a equipe
          </span>
        </a>
      </div>

      {/* 13. AVISO DE COOKIES (LGPD) */}
      {!cookieConsent && (
        <aside
          aria-label="Aviso de cookies e privacidade"
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 bg-[#F7F5EF] p-4 rounded-lg border border-[#DCE8DF] shadow-lg text-xs text-[#19392D] space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#19392D]">
              Privacidade e Escolhas
            </span>
            <button
              onClick={() => handleCookieChoice('essenciais')}
              className="text-[#66736B] hover:text-[#19392D] p-0.5"
              aria-label="Fechar aviso de cookies"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[#66736B] font-light leading-relaxed">
            Utilizamos apenas recursos estritamente necessários para o funcionamento e a navegação segura do site. Não utilizamos rastreadores de publicidade de terceiros.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => handleCookieChoice('essenciais')}
              className="px-3 py-1.5 rounded-md border border-[#DCE8DF] bg-white text-[#19392D] hover:bg-[#E8EEE7] font-heading text-[11px] font-medium transition-colors"
            >
              Somente essenciais
            </button>
            <button
              onClick={() => handleCookieChoice('todos')}
              className="px-3 py-1.5 rounded-md bg-[#19392D] text-[#FBF8F1] hover:bg-[#1D4636] font-heading text-[11px] font-medium transition-colors"
            >
              Aceitar
            </button>
          </div>
        </aside>
      )}

      {/* 14. MODAL DE PRIVACIDADE E COOKIES ACESSÍVEL */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPrivacyModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
        >
          <div
            className="bg-[#F7F5EF] rounded-xl max-w-lg w-full p-6 border border-[#DCE8DF] shadow-2xl relative space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#DCE8DF] pb-3">
              <h3 id="privacy-title" className="font-editorial text-2xl font-normal text-[#19392D]">
                Privacidade & Informações
              </h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1 rounded-md text-[#66736B] hover:text-[#19392D] hover:bg-[#E8EEE7]"
                aria-label="Fechar janela de privacidade"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#66736B] font-light leading-relaxed">
              <p>
                <strong>Compromisso com a sua privacidade:</strong> A Clínica Ralin Saúde Integrada respeita o sigilo e a privacidade dos seus pacientes e visitantes, em conformidade com as diretrizes da LGPD (Lei Geral de Proteção de Dados).
              </p>
              <p>
                <strong>Comunicação direta via WhatsApp:</strong> Ao clicar nos links de agendamento, você é direcionado ao canal oficial de atendimento da clínica. Seus dados cadastrais fornecidos durante o contato são utilizados exclusivamente para fins de marcação e orientação médica/odontológica.
              </p>
              <p>
                <strong>Sem rastreamento invasivo:</strong> Este portal institucional não armazena nem comercializa dados com plataformas de anúncios de terceiros. As preferências de navegação são armazenadas de forma segura e localmente no seu próprio navegador.
              </p>
              <p>
                <strong>Contato do Encarregado:</strong> Dúvidas adicionais sobre o tratamento dos dados podem ser encaminhadas pelo WhatsApp oficial (79) 99971-5308 ou presencialmente na Av. Hermes Fontes, 1896, bairro Luzia, Aracaju/SE.
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCE8DF] flex justify-end">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 rounded-md bg-[#19392D] text-[#FBF8F1] font-heading text-xs font-semibold uppercase tracking-wider hover:bg-[#1D4636] transition-colors"
              >
                Compreendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
