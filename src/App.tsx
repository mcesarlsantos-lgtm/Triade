import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  Instagram, 
  MessageCircle,
  CheckCircle2,
  Star,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Valknut = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 87" className={className} fill="currentColor">
    <path d="M24.2,86.6L0,43.3L24.2,0h14.5l-7.3,12.5h-7.3l-12.1,21h48.4l7.3-12.5H31.5l7.3-12.5h38.7L100,43.3l-24.2,43.3H61.3l7.3-12.5h7.3l12.1-21H42.4l-7.3,12.5h36.3l-7.3,12.5H24.2z" />
  </svg>
);

const LogoHorizontal = ({ className }: { className?: string }) => (
  <div className={`h-12 flex items-center justify-center ${className}`}>
    <img 
      src="https://i.postimg.cc/w7J6VtDM/TRD-LOGO-PNG.png" 
      alt="Triade Logo" 
      className="h-full object-contain invert"
      referrerPolicy="no-referrer"
    />
  </div>
);

const LogoVertical = ({ className }: { className?: string }) => (
  <div className={`w-full h-full flex items-center justify-center ${className}`}>
    <img 
      src="https://i.postimg.cc/py3WzQ5L/TRD-LOGO-2.png" 
      alt="Triade Logo Vertical" 
      className="max-w-[80%] max-h-[80%] object-contain invert opacity-90"
      referrerPolicy="no-referrer"
    />
  </div>
);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-sub', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'back.out(1.7)'
      });

      // Scroll Reveal Animations
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Bento Grid Stagger
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b-0 mt-4 mx-auto max-w-7xl rounded-full px-6 py-3 flex items-center justify-between left-1/2 -translate-x-1/2">
        <LogoHorizontal className="text-white" />
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#inicio" className="hover:text-brand-accent transition-colors">Início</a>
          <a href="#produtos" className="hover:text-brand-accent transition-colors">Produtos</a>
          <a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-brand-accent transition-colors">Contato</a>
        </nav>

        <a 
          href="https://triade.rdi.store" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all duration-300 flex items-center gap-2 group"
        >
          Ver Catálogo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </header>

      {/* Floating WhatsApp Button */}
      <a 
        href="http://wa.me/message/QPZXRSXRO3DTO1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale Conosco
        </span>
      </a>

      <main>
        {/* Hero Section */}
        <section id="inicio" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Hero Background - CrossFit Double Under Workout */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.postimg.cc/xT1Xrt0J/2024-Crossfit-Double-Under-Workout-Workout-Of-The-Day-768x432.jpg" 
              alt="CrossFit Double Under Workout" 
              className="w-full h-full object-cover opacity-80 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-transparent to-brand-bg"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-brand-accent mb-6 hero-sub">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              BE YOUR INSPIRATION
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-8 hero-title">
              O MELHOR PARA <br />
              <span className="text-gradient">SUPERAR LIMITES</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto hero-sub">
              Os melhores preços de Brasília e região. Suplementação de elite para quem não aceita o comum.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-cta">
              <a 
                href="http://wa.me/message/QPZXRSXRO3DTO1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a 
                href="https://triade.rdi.store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Acessar Catálogo
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Authority Marquee */}
        <div className="py-12 border-y border-brand-border overflow-hidden bg-white/[0.02]">
          <div className="marquee">
            <div className="marquee-content">
              {[
                'UNDER ARMOUR', 'OLYMPIKUS', 'CCM MODA FITNESS', 'MAX TITANIUM', 'DUX NUTRITION', 
                'UNDER LABZ', 'OPTIMUM NUTRITION', 'TRUE SOURCE', 'ADAPTOGEN', 'ALQUIMIA DA SAÚDE', 
                'DOBRO', 'CAFFEINE ARMY', 'VITAFOR', 'OCEAN DROP', 'UNIÃO VEGETAL', 'UNINUTRE', 
                'LONG JACK', 'EQUALIVE', 'BOLD', 'DARKNESS'
              ].map((brand) => (
                <span key={brand} className="text-3xl md:text-5xl font-display opacity-30 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap px-8">
                  {brand}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {[
                'UNDER ARMOUR', 'OLYMPIKUS', 'CCM MODA FITNESS', 'MAX TITANIUM', 'DUX NUTRITION', 
                'UNDER LABZ', 'OPTIMUM NUTRITION', 'TRUE SOURCE', 'ADAPTOGEN', 'ALQUIMIA DA SAÚDE', 
                'DOBRO', 'CAFFEINE ARMY', 'VITAFOR', 'OCEAN DROP', 'UNIÃO VEGETAL', 'UNINUTRE', 
                'LONG JACK', 'EQUALIVE', 'BOLD', 'DARKNESS'
              ].map((brand) => (
                <span key={brand} className="text-3xl md:text-5xl font-display opacity-30 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap px-8">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Differentials Bento Grid */}
        <section id="produtos" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-6xl mb-4">POR QUE A <span className="text-brand-accent">TRIADE?</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">Excelência em atendimento e os melhores produtos do mercado fitness.</p>
          </div>

          <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
            {/* Main Feature */}
            <div className="bento-item md:col-span-2 md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                alt="Training" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-4">
                  <ShoppingBag className="text-black w-6 h-6" />
                </div>
                <h3 className="text-3xl mb-2">Ampla Linha de Produtos</h3>
                <p className="text-white/60">Dos maiores fabricantes mundiais para CrossFit, Musculação, Triathlon e muito mais.</p>
              </div>
            </div>

            {/* Delivery */}
            <div className="bento-item md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center border-l-4 border-l-brand-accent">
              <div className="flex items-center gap-4 mb-4">
                <Truck className="text-brand-accent w-8 h-8" />
                <h3 className="text-2xl">Entrega Grátis*</h3>
              </div>
              <p className="text-white/60">Receba seus suplementos com rapidez e sem custo em todo o DF e Região.</p>
            </div>

            {/* Price */}
            <div className="bento-item glass rounded-3xl p-8 flex flex-col justify-center text-center">
              <span className="text-brand-accent text-4xl font-display mb-2">#1</span>
              <h3 className="text-xl mb-1">Melhores Preços</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest">Brasília & Entorno</p>
            </div>

            {/* Expert Advice */}
            <div className="bento-item glass rounded-3xl p-8 flex flex-col justify-center">
              <ShieldCheck className="text-brand-accent w-8 h-8 mb-4" />
              <h3 className="text-xl mb-2">Consultoria Especializada</h3>
              <p className="text-sm text-white/60">Profissionais treinados para orientar suas melhores escolhas.</p>
            </div>

            {/* Community */}
            <div className="bento-item md:col-span-2 glass rounded-3xl p-8 flex items-center justify-between group overflow-hidden">
              <div className="max-w-[60%]">
                <h3 className="text-2xl mb-2">Be Your Inspiration</h3>
                <p className="text-sm text-white/60">Junte-se a milhares de atletas que confiam na Triade desde 2021.</p>
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-bg overflow-hidden bg-zinc-800">
                    <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>

            {/* Vegan Friendly */}
            <div className="bento-item md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center bg-brand-accent/5">
              <div className="flex items-center gap-4 mb-2">
                <CheckCircle2 className="text-brand-accent w-6 h-6" />
                <h3 className="text-2xl">Opções Veganas</h3>
              </div>
              <p className="text-white/60">Linha completa de suplementação plant-based para todos os objetivos.</p>
            </div>
          </div>
        </section>

        {/* Catalog & QR Code Section */}
        <section id="catalogo" className="py-24 px-4 bg-brand-accent/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-6xl mb-6">NOSSO <span className="text-brand-accent">CATÁLOGO</span> DIGITAL</h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Acesse agora nossa loja completa com todos os produtos, preços e disponibilidade em tempo real. Escaneie o QR Code ou clique no botão abaixo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://triade.rdi.store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Ir para a Loja
                </a>
                <a 
                  href="http://wa.me/message/QPZXRSXRO3DTO1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>
            <div className="flex justify-center reveal">
              <div className="glass p-8 rounded-[2rem] text-center max-w-sm">
                <div className="bg-white p-4 rounded-2xl mb-6">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://triade.rdi.store" 
                    alt="QR Code Triade" 
                    className="w-full aspect-square"
                  />
                </div>
                <p className="text-sm font-bold text-brand-accent uppercase tracking-widest">Aponte a câmera para o QR Code</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" ref={aboutRef} className="py-24 px-4 bg-white/2">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
                MAIS QUE UMA LOJA, <br />
                <span className="text-brand-accent italic">UM ESTILO DE VIDA.</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Desde 2021, a Triade nasceu com o propósito de ser a inspiração para quem busca superar seus limites. Localizada no coração de Brasília, oferecemos não apenas suplementos, mas as ferramentas necessárias para sua evolução.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-display text-brand-accent mb-1">1.8k+</h4>
                  <p className="text-sm text-white/40 uppercase tracking-widest">Seguidores Reais</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display text-brand-accent mb-1">1k+</h4>
                  <p className="text-sm text-white/40 uppercase tracking-widest">Posts de Conteúdo</p>
                </div>
              </div>

              <a 
                href="https://www.instagram.com/triadebsb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-brand-accent transition-colors group"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-semibold">Siga-nos no Instagram @triadebsb</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="relative reveal">
              <div className="aspect-square rounded-3xl overflow-hidden glass p-12 flex items-center justify-center bg-brand-accent/5">
                <LogoVertical />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl max-w-[200px] hidden md:block">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-sm font-medium">"Melhor atendimento de Brasília, entrega super rápida!"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-6xl mb-4">PROVA <span className="text-brand-accent">SOCIAL</span></h2>
            <p className="text-white/50">O que nossos atletas dizem sobre a experiência Triade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Carlos Silva", role: "Crossfitter", text: "A Triade salvou meu pré-treino. Entrega rápida e o atendimento via WhatsApp é nota 10." },
              { name: "Mariana Costa", role: "Triatleta", text: "Encontro tudo que preciso para natação e corrida. Os preços são realmente os melhores do DF." },
              { name: "João Pedro", role: "Bodybuilder", text: "Produtos originais e consultoria de quem entende. Recomendo para todos os meus alunos." }
            ].map((testi, i) => (
              <div key={i} className="glass p-8 rounded-3xl reveal">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-white/70 mb-6 italic">"{testi.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center font-bold text-brand-accent">
                    {testi.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testi.name}</h4>
                    <p className="text-xs text-white/40">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden reveal">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/5 -z-10"></div>
            <h2 className="text-5xl md:text-7xl mb-8">PRONTO PARA <br /> <span className="text-brand-accent">EVOLUIR?</span></h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Não perca tempo. Fale agora com um de nossos consultores e descubra o combo ideal para seus objetivos.
            </p>
            <a 
              href="http://wa.me/message/QPZXRSXRO3DTO1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-accent transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="py-12 px-4 border-t border-brand-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <LogoHorizontal className="mb-6" />
            <p className="text-white/40 max-w-sm mb-6">
              SMPW QUADRA 05 CONJUTO 09 LOTE 02 - DF- 71.735, Brasília, Brazil 71.735-509
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/triadebsb" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="http://wa.me/message/QPZXRSXRO3DTO1" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-accent transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Horários</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Seg a Sex: 05h às 20h</li>
              <li>Sáb: 08h às 12h</li>
              <li>Dom: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="https://triade.rdi.store/products" className="hover:text-white transition-colors">Loja Online</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-brand-border flex flex-col md:row items-center justify-between gap-4 text-xs text-white/20 uppercase tracking-widest">
          <p>© 2026 TRIADE SUPLEMENTOS. TODOS OS DIREITOS RESERVADOS.</p>
          <p>DESIGNED FOR PERFORMANCE</p>
        </div>
      </footer>
    </div>
  );
}
