"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="container w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mt-20">Helder Barbosa</h1>

      <div className="grid grid-cols-2 gap-16 text-white h-fit bg-center bg-background bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b">
        <div className="flex justify-center items-center">
          <img
            src="/helder.jpg"
            className="w-[28rem] h-[30rem] object-cover rounded-lg shadow-sm border border-border/80"
          />
        </div>

        <div className="w-[30rem] h-[40rem] flex justify-center gap-8 flex-col">
          <p className="text-lg font-normal">
            Psicólogo Clínico e Psicanalista dedicado à prática clínica com
            adolescentes e adultos nas modalidades presencial e online, desde
            2011.
          </p>

          <p className="text-lg font-normal">
            Dedica-se também ao desenvolvimento de Grupos de Estudos e
            supervisões.
          </p>

          <p className="text-lg font-normal">
            Suas formações são por instituições reconhecidas e prestigiadas pelo
            MEC, Federação Brasileira de Psicanálise (FEBRAPSI) e Movimento
            Articulação das Entidades Psicanalíticas.
          </p>

          <div>
            <p className="text-lg font-normal">
              Inscrição Profissional <strong>CRP-06/176171</strong>
            </p>

            <p className="text-lg font-normal">
              CNPJ <strong>43.105.473/0001-66</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
