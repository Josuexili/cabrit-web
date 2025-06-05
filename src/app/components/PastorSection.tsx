// components/PastorSection.tsx
import React from 'react';

const PastorSection: React.FC = () => {
  return (
    <section
      id="pastor"
      className="bg-white py-20 px-6 md:px-0 max-w-6xl mx-auto font-mochiy text-black"
      aria-labelledby="pastor-title"
    >
      <h2
        id="pastor-title"
        className="text-4xl font-semibold mb-12 text-center tracking-wide"
      >
        El pastor
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 px-4 md:px-0">
        {/* Imatge fixa a l'esquerra */}
        <div className="w-full md:w-1/2">
          <img
            src="/imatges/roc1.jpg"
            alt="El pastor Roc González cuidant les seves cabres al Parc Rural de Montserrat"
            className="rounded-md shadow-md object-cover w-full h-64 md:h-[28rem]"
            width={640}
            height={448}
          />
        </div>

        {/* Text a la dreta */}
        <div className="text-base leading-relaxed font-light max-w-xl w-full md:w-1/2">
          <p className="mb-6">
            Em dic Roc i sóc el pastor que cuida les cabres del Parc Rural de Montserrat.
          </p>
          <p className="mb-6">
            Les meves cabres pasturen lliurement, seguint el ritme de la natura i alimentant-se de manera diversa i natural.
          </p>
          <p className="mb-6">
            Aquesta forma de cria respectuosa fa que la carn sigui autèntica, saborosa i saludable, amb un gust que només s’aconsegueix quan els animals viuen en llibertat i ben cuidats.
          </p>
          <p className="mb-6">
            Crec fermament que la qualitat de la carn ve de respectar els cicles naturals i garantir el benestar dels animals.
          </p>
          <p className="mb-6">
            Cada dia m’encarrego de les cabres amb paciència i dedicació, perquè tu puguis gaudir d’un producte que és fruit d’una feina honesta i una connexió profunda amb el medi ambient.
          </p>

          {/* Enllaços */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-10">
            <a
              href="https://www.youtube.com/watch?v=I1Rfkk8J8sU"
              className="text-black hover:text-green-800 font-medium underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Veure el Roc a TV3, caçadors de bolets"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              El roc a TV3, caçadors de bolets!
            </a>
            <a
              href="https://www.parcruraldelmontserrat.cat/ca/informacio/noticies/pln293/roc-gonzalez-les-meves-cabres-pasturen-lliurement-i-aixo-fa-que-la-carn-sigui-mes-autentica-i-saludable"
              className="text-black hover:text-green-800 font-medium underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Entrevista a Roc González al Parc Rural de Montserrat"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Entrevista a Roc González al Parc Rural de Montserrat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
