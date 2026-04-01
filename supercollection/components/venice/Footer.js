import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-[#8b2b7d] pt-10 font-sans">
      {/* Parte Superiore: Logo */}
      <div className="flex justify-center mb-10">
        <img src="images/venice/log1.png" alt="Il Doge di Venezia" className="h-20 w-auto" />
      </div>

      {/* Parte Centrale: Griglia Informazioni */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm pb-10">
        
        {/* Colonna 1: Indirizzo */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Il Doge di Venezia</h3>
          <p className="text-gray-600">
            Via Treportina, 30 I-30013<br />
            Cavallino Treporti - Venezia
          </p>
        </div>

        {/* Colonna 2: Contatti Prodotti */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Contatti per prodotti su misura</h3>
          <p className="text-gray-600">Tel: +39 041 530 23 63</p>
          <p className="text-gray-600">Fax: +39 041 530 40 16</p>
          <p className="text-gray-600">E-Mail: info@dogedivenezia.it</p>
        </div>

        {/* Colonna 3: Contatti Escursioni */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Contatti Individuali / Escursioni</h3>
          <p className="text-gray-600">Tel: +39 041 530 23 63</p>
          <p className="text-gray-600">E-Mail: api@dogedivenezia.it</p>
        </div>

        {/* Colonna 4: Social e Pagamenti */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Seguici</h3>
          <div className="flex gap-3 mb-6">
            {/* Icone semplificate come cerchi */}
            <div className="w-8 h-8 border border-[#8b2b7d] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8b2b7d] hover:text-white transition-colors">f</div>
            <div className="w-8 h-8 border border-[#8b2b7d] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8b2b7d] hover:text-white transition-colors">ig</div>
            <div className="w-8 h-8 border border-[#8b2b7d] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8b2b7d] hover:text-white transition-colors">x</div>
          </div>
          
          <h3 className="font-bold mb-3 uppercase text-xs">I nostri metodi di pagamento</h3>
          <img src="images/venice/carte.png" alt="Pagamenti" className="h-15 grayscale " />
        </div>
      </div>

      {/* Parte Inferiore: Copyright Bar */}
      <div className="bg-[#8b2b7d] text-white py-3 px-6 text-[10px] md:text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p>Il Doge di Venezia S.r.l. - P.Iva: IT03515100273 - Rea VE - 315238 Privacy & Cookie policy</p>
          <p>Design & Develop by <span className="font-bold underline cursor-pointer">Mediatypo Web Agency Venezia</span></p>
        </div>
      </div>
    </footer>
  );
}