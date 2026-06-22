import { SectionWrapper } from '../components/shared/SectionWrapper';

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-violet-50 to-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 text-center">
            За нас
          </h1>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-violet-400 to-rose-400 rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/0-02-05-48b72279c93247ee725810e007a1805bed2fd56788edf37720f613dc35259e1c_9d0853cab2788b96.jpg"
              alt="Глобъл Баланс — нашият офис"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-6">Нашата история</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                В нашия център следваме холистичен подход към здравето и благосъстоянието.
              </p>
              <p>
                Съчетавайки професионален опит, специализирани знания и съвременни технологии,
                предлагаме индивидуален подход, съобразен с потребностите на всеки клиент.
                Нашата цел е да подпомогнем постигането на по-добър баланс, хармония и цялостно благополучие.
              </p>
              <p>
                При нас можете да преминете през цялостен процес – от анализ и диагностика до
                подбрани холистични терапии, насочени към подкрепа на вашето физическо,
                емоционално и енергийно състояние.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
