
import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { PACK_ITEMS, TESTIMONIALS, FAQ_DATA, TECHNIQUES } from './constants';

const CHECKOUT_URL = 'https://pay.cakto.com.br/4zigknt_660329';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 48 });
  const [spotsLeft, setSpotsLeft] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            if (hours > 0) {
              hours--;
              minutes = 59;
            } else {
              return prev;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => prev > 3 ? prev - 1 : prev);
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-amber-500/30 overflow-x-hidden font-['Inter']">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-black uppercase tracking-widest relative z-[60] animate-pulse">
        ⚠️ ATENÇÃO: ÚLTIMAS {spotsLeft} VAGAS NO VALOR DE R$ 9,90!
      </div>

      {/* Navigation */}
      <nav className="h-20 flex items-center justify-center border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-md flex items-center justify-center font-black text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">E</div>
          <span className="text-xl font-black tracking-tighter italic">ETERNAL <span className="text-amber-500">FRAMES</span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black mb-10 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
            VAGAS LIMITADAS PARA NÃO SATURAR O ALGORITMO
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] max-w-5xl mx-auto">
            Por que seus vídeos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)] uppercase">TRAVAM EM 200 VIEWS?</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 px-4 leading-relaxed font-medium">
            O problema não é o seu conteúdo, é o seu <span className="text-white underline decoration-amber-500 underline-offset-8">material reciclado</span>. Pare de usar vídeos que o algoritmo já baniu e comece a viralizar com o pack indetectável.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Button size="lg" onClick={handleCheckout} className="group h-20 px-12 text-2xl bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 hover:scale-105 shadow-[0_0_50px_rgba(245,158,11,0.4)]">
              <span className="relative z-10 uppercase tracking-tighter font-black">QUERO ACESSO IMEDIATO (R$ 9,90)</span>
            </Button>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/40 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2">✔ Download Vitalício</span>
                <span className="flex items-center gap-2">✔ Sem Direitos Autorais</span>
                <span className="flex items-center gap-2">✔ Entrega Automática</span>
              </div>
              <p className="text-amber-500 font-black text-sm animate-bounce mt-4">⚠️ Só restam {spotsLeft} acessos promocionais!</p>
            </div>
          </div>
        </div>
      </header>

      {/* PRD Pain Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1] text-white">
                O TikTok sabe que você está <span className="text-amber-500 italic">Copiando.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-slate-400 leading-relaxed">
                  Quando você pega um vídeo "grátis" do Pinterest, você está assinando o atestado de óbito do seu canal. Aquele arquivo já foi postado 10.000 vezes. O algoritmo tem a "impressão digital" dele e <span className="text-white font-bold">joga seu alcance no lixo em segundos.</span>
                </p>
                <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-4">
                  <h4 className="text-amber-500 font-black uppercase text-sm tracking-widest">A Realidade que não te contam:</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="text-red-500 text-xl font-bold">✕</span>
                      <p className="text-slate-300 font-medium">Material Público = Shadowban Invisível.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-red-500 text-xl font-bold">✕</span>
                      <p className="text-slate-300 font-medium">Edição de iniciante não altera o Hash do arquivo.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-red-500 text-xl font-bold">✕</span>
                      <p className="text-slate-300 font-medium">Você trabalha de graça para o Mark e para o Shou Zi Chew.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-amber-500/10 rounded-full blur-[100px] -z-10" />
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 shadow-3xl text-center space-y-8">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <span className="text-5xl">🔒</span>
                </div>
                <h3 className="text-3xl font-black text-white">Segurança Vitalícia</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  "O Eternal Frames não é apenas um pack, é uma barreira contra o sistema de detecção de conteúdo duplicado. Arquivos virgens e técnica de camuflagem."
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent w-full" />
                <p className="text-red-500 font-black text-sm uppercase tracking-widest animate-pulse">Preço de R$ 9,90 expira em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-20 tracking-tighter uppercase">CONTEÚDO <span className="text-amber-500 italic">PREMIUM</span></h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PACK_ITEMS.map((item, i) => (
              <div key={i} className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-700">
                <img src={item.thumbnail} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={item.category} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-4 right-4 text-left">
                  <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest mb-1">NICHO {i+1}</p>
                  <h4 className="text-sm font-black uppercase leading-tight">{item.category}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              { t: "100+ Vídeos 4K", d: "Sem compressão, bitrate máximo para o Reels.", e: "💎" },
              { t: "150+ Imagens", d: "Fundo perfeito para legendas dinâmicas.", e: "📸" },
              { t: "Cenários Luxury", d: "Casas, Relógios e muito Cash.", e: "💰" }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-amber-500/20 transition-all">
                <span className="text-3xl block mb-4">{box.e}</span>
                <h4 className="text-xl font-bold mb-2">{box.t}</h4>
                <p className="text-slate-500 text-sm font-medium">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-black">
            <div>
              <span className="bg-black text-amber-500 px-4 py-1 font-black text-xs uppercase tracking-widest mb-6 inline-block">MÉTODO ANTI-REUSO</span>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">O Guia de <br/> Edição Secreta</h2>
              <p className="text-lg font-bold mb-10 opacity-80">
                Ter os arquivos é só metade do jogo. No nosso guia, você aprende as 5 técnicas exatas para tornar qualquer material 100% original para o algoritmo em menos de 2 minutos.
              </p>
              <div className="space-y-4">
                {TECHNIQUES.map((tech, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-black/5 border border-black/10">
                    <div className="w-8 h-8 rounded-lg bg-black text-amber-500 flex items-center justify-center flex-shrink-0 font-black">{i+1}</div>
                    <div>
                      <h4 className="font-black text-lg">{tech.title}</h4>
                      <p className="text-black/60 text-sm font-bold">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-4 shadow-3xl rotate-2">
                <div className="bg-[#111] rounded-[2.5rem] aspect-[9/16] flex flex-col items-center justify-center p-12 text-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-amber-500/10 animate-pulse" />
                   <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-8">
                     <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <h3 className="text-4xl font-black text-white mb-4 uppercase">INDETECTÁVEL</h3>
                   <p className="text-amber-500 font-bold tracking-widest uppercase text-sm">Pronto para monetizar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Feedback) Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-20 tracking-tighter uppercase text-white/50 italic">Quem já saiu do zero</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#050505] border border-white/5 p-10 rounded-[2.5rem] relative group hover:border-amber-500/20 transition-all">
                <div className="absolute top-8 right-8 text-amber-500 font-black text-xs italic tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full">{t.views}</div>
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.avatar} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover border-2 border-white/5" alt={t.name} />
                  <div>
                    <h4 className="font-bold text-white text-lg mb-0.5">{t.name}</h4>
                    <span className="text-white/30 text-xs font-bold tracking-widest uppercase">{t.handle}</span>
                  </div>
                </div>
                <p className="text-white/70 text-xl font-medium leading-relaxed italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section with Heavy Urgency */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0a0a0a] border border-amber-500/20 rounded-[3rem] p-12 lg:p-24 text-center relative shadow-3xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
            
            <span className="text-red-500 font-black text-sm tracking-[0.3em] uppercase mb-8 block animate-pulse">Últimos {spotsLeft} Acessos Restantes</span>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.8]">Comece Seu <br/><span className="text-amber-500 italic">Império Dark</span></h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="text-white/20 line-through text-2xl font-black italic">R$ 47,00</div>
              <div className="flex items-baseline gap-2">
                <span className="text-amber-500 text-8xl font-black tracking-tighter">R$ 9,90</span>
              </div>
            </div>

            <Button fullWidth size="lg" onClick={handleCheckout} className="h-24 text-2xl font-black tracking-tighter shadow-[0_20px_60px_rgba(245,158,11,0.3)] bg-gradient-to-r from-amber-600 to-amber-400 hover:scale-[1.02]">
              QUERO ACESSO IMEDIATO (SÓ 9,90)
            </Button>

            <div className="mt-12 text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] space-y-4">
              <p>O preço subirá para R$ 47,00 assim que as vagas acabarem.</p>
              <div className="flex items-center justify-center gap-4 opacity-50">
                <span className="h-px bg-white/10 flex-1" />
                <span className="text-amber-500">Expira em: {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
                <span className="h-px bg-white/10 flex-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Dúvidas) Section */}
      <section className="py-24 bg-black/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-white/40 italic">Tire suas dúvidas</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <details key={i} className="group bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 transition-all hover:border-amber-500/20">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-white/80">{item.question}</h4>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-180 transition-all bg-black">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/5 text-slate-400 font-medium leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center bg-black">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-10 h-10 bg-amber-500 rounded-md flex items-center justify-center font-black text-black">E</div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">ETERNAL <span className="text-amber-500">FRAMES</span></span>
        </div>
        <p className="text-white/20 text-xs font-bold uppercase tracking-widest mb-10">© 2026 Eternal Frames. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-8 text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Suporte</a>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-4 right-4 z-[100] lg:hidden">
        <Button fullWidth size="lg" onClick={handleCheckout} className="h-16 text-lg bg-gradient-to-r from-amber-600 to-amber-400 text-black font-black shadow-2xl relative overflow-hidden">
          <span className="relative z-10">LIBERAR MEU ACESSO - R$ 9,90</span>
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
        </Button>
      </div>
    </div>
  );
};

export default App;
