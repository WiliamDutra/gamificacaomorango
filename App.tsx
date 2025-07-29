/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';

import { DoceCombinacaoGame } from './components/DoceCombinacaoGame';
import { PrizeRoom } from './components/PrizeRoom';
import { OfferSection } from './components/OfferSection';
import { TestimonialCard } from './components/TestimonialCard';
import { FaqItem } from './components/FaqItem';
import { ShieldCheckIcon } from './components/icons';


export const App: React.FC = () => {
  type FunnelStep = 'game' | 'prize_room' | 'offer';
  const [funnelStep, setFunnelStep] = useState<FunnelStep>('game');
  const [chosenPrizes, setChosenPrizes] = useState<Set<number>>(new Set());

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 text-gray-800 p-4 sm:p-6 lg:p-8">
      <main className="max-w-3xl mx-auto space-y-12 md:space-y-16">
        {/* --- ATO 1: A CONEXÃO E A PROMESSA --- */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 leading-tight drop-shadow-sm">
            🍓 A Técnica Secreta do Açúcar de Cristal
          </h1>
           <p className="mt-2 text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto font-semibold">Transforme Morangos Comuns em Joias Lucrativas</p>
        </header>
        
        <section className="text-center text-lg text-gray-700 space-y-3 max-w-2xl mx-auto">
            <p>Você já perdeu tempo e ingredientes tentando fazer aquela calda de morango do amor perfeita, só para ela derreter e virar uma meleca em poucos minutos?</p>
            <p>Já sentiu a frustração de preparar um doce com tanto carinho e, na hora de vender, sentir vergonha por ele não estar tão bonito e brilhante quanto você sonhou?</p>
        </section>

        <section className="text-center p-6 bg-white/50 rounded-2xl shadow-xl backdrop-blur-lg border border-white/30">
            <h2 className="text-3xl font-bold text-purple-600 mb-3">Agora, imagine o contrário...</h2>
            <p className="text-lg text-gray-700">Imagine ter um negócio de doces de sucesso, com clientes fazendo fila para comprar seus morangos do amor, que mais parecem joias de tão brilhantes. Imagine o orgulho de receber elogios e a segurança de ter uma fonte de renda que realmente funciona.</p>
            <p className="mt-3 font-bold text-gray-800">O Método Açúcar de Cristal é a ponte entre a sua frustração de hoje e o seu sonho de amanhã.</p>
        </section>
        
        {/* --- ATO 2: A EXPERIÊNCIA, RECOMPENSA E OFERTA --- */}
        <section>
          {funnelStep === 'game' && <DoceCombinacaoGame onGameWin={() => setFunnelStep('prize_room')} />}
          
          {funnelStep === 'prize_room' && (
            <PrizeRoom 
              onPrizesConfirmed={(prizes) => {
                setChosenPrizes(prizes);
                setFunnelStep('offer');
              }} 
            />
          )}

          {funnelStep === 'offer' && <OfferSection initialBonuses={chosenPrizes} />}
        </section>

        {/* --- ATO 3: A CONFIANÇA E A AÇÃO (SÓ APARECE APÓS A RECOMPENSA) --- */}
        {funnelStep === 'offer' && (
          <>
            <section className="pt-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quem já transformou morangos em joias</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
                    <TestimonialCard imgSrc="https://i.pravatar.cc/150?img=1" text="Meus doces nunca mais foram os mesmos! As vendas triplicaram." name="Joana S." />
                    <TestimonialCard imgSrc="https://i.pravatar.cc/150?img=5" text="Finalmente uma calda que não derrete. Esse método salvou meu negócio." name="Carla M." />
                </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8">
                <img src="https://i.pravatar.cc/150?img=12" alt="Criadora do curso" className="w-32 h-32 rounded-full shadow-lg border-4 border-purple-300"/>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800">Quem vai te guiar nesta jornada?</h2>
                    <p className="mt-2 text-gray-700">Olá, eu sou a Marina! Uma confeiteira apaixonada que, assim como você, já sofreu muito com caldas que davam errado. Depois de anos de testes, desenvolvi o 'Método Açúcar de Cristal' para ajudar outras mulheres a não passarem pelas mesmas frustrações e a construírem um negócio doce e lucrativo, com confiança e produtos perfeitos.</p>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    <FaqItem question="Preciso de algum equipamento especial?">
                        <p>Não! O método foi desenvolvido para ser feito com utensílios que você provavelmente já tem na sua cozinha. O segredo não está nos equipamentos, mas na técnica que vou te ensinar passo a passo.</p>
                    </FaqItem>
                    <FaqItem question="E se eu for totalmente iniciante?">
                        <p>Perfeito! O curso é ideal para iniciantes. Eu explico cada detalhe do zero, desde a escolha dos morangos até o ponto exato da calda. Você vai se sentir segura em todas as etapas.</p>
                    </FaqItem>
                    <FaqItem question="O acesso ao curso é por quanto tempo?">
                        <p>O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo, e consultar o material sempre que precisar de um reforço.</p>
                    </FaqItem>
                </div>
            </section>

            <section className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl text-center">
                <ShieldCheckIcon className="w-16 h-16 mx-auto text-yellow-300 drop-shadow-lg" />
                <h2 className="text-3xl font-bold font-display tracking-wider mt-4">Sua Compra é 100% Segura</h2>
                <p className="mt-2 text-lg">Você tem <strong className="font-bold">7 dias de garantia incondicional</strong>. Se por qualquer motivo você não amar o método, basta pedir o reembolso e eu devolvo todo o seu dinheiro. O risco é todo meu!</p>
            </section>

            <section className="text-center">
                <button className="w-full max-w-lg mx-auto bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold text-2xl py-4 rounded-xl shadow-lg transform hover:scale-[1.03] transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                    SIM, QUERO GARANTIR MINHA VAGA!
                </button>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
