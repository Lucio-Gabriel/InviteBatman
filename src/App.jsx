function BatmanInvitation() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fundo com textura */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10,5 L5,10 L10,15 L15,10 Z" fill="%23FFD700" /></svg>\')',
          }}
        ></div>
      </div>

      {/* Card principal */}
      <div className="max-w-3xl w-full bg-gradient-to-b from-gray-900 to-gray-800 border-4 border-yellow-500 rounded-lg shadow-2xl overflow-hidden relative z-10">
        {/* Decoração de morcegos */}
        <div className="absolute top-5 left-4">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-yellow-500 opacity-70"
          >
            <path
              fill="currentColor"
              d="M12,1C12,1 9,3 6,7C3,11 2,20 2,20C2,20 6,22 12,22C18,22 22,20 22,20C22,20 21,11 18,7C15,3 12,1 12,1M12,5.5C13.57,5.5 14.5,5.1 15.54,4.5C16.5,7 17.5,11 17.5,11C17.5,11 15,12 12,12C9,12 6.5,11 6.5,11C6.5,11 7.5,7 8.46,4.5C9.5,5.1 10.43,5.5 12,5.5M12,7.5C11.5,7.5 11,7.4 10.56,7.23C9.47,9.05 9,11 9,11C9,11 10.5,11.5 12,11.5C13.5,11.5 15,11 15,11C15,11 14.53,9.05 13.44,7.23C13,7.4 12.5,7.5 12,7.5Z"
            />
          </svg>
        </div>
        <div className="absolute top-5 right-4">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-yellow-500 opacity-70"
          >
            <path
              fill="currentColor"
              d="M12,1C12,1 9,3 6,7C3,11 2,20 2,20C2,20 6,22 12,22C18,22 22,20 22,20C22,20 21,11 18,7C15,3 12,1 12,1M12,5.5C13.57,5.5 14.5,5.1 15.54,4.5C16.5,7 17.5,11 17.5,11C17.5,11 15,12 12,12C9,12 6.5,11 6.5,11C6.5,11 7.5,7 8.46,4.5C9.5,5.1 10.43,5.5 12,5.5M12,7.5C11.5,7.5 11,7.4 10.56,7.23C9.47,9.05 9,11 9,11C9,11 10.5,11.5 12,11.5C13.5,11.5 15,11 15,11C15,11 14.53,9.05 13.44,7.23C13,7.4 12.5,7.5 12,7.5Z"
            />
          </svg>
        </div>

        {/* Cabeçalho */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-4 px-6 text-black text-center relative">
          <div className="absolute inset-0 bg-yellow-500 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 to-transparent"></div>
          <h1 className="text-4xl font-bold tracking-wider drop-shadow-md">
            CONVITE DE ANIVERSÁRIO DO GAB
          </h1>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row p-8 gap-8 relative">
          {/* Fundo de gotham city silhueta */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10 z-0">
            <svg
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,200 L0,150 L50,140 L60,100 L80,120 L100,80 L120,110 L140,90 L150,120 L170,100 L190,130 L200,70 L220,90 L240,60 L260,100 L280,75 L300,120 L320,80 L340,110 L360,70 L380,100 L400,60 L420,90 L440,70 L460,110 L480,80 L500,130 L520,90 L540,110 L560,70 L580,100 L600,80 L620,110 L640,90 L660,120 L680,80 L700,100 L720,70 L740,110 L760,90 L780,120 L800,70 L820,100 L840,80 L860,120 L880,70 L900,90 L920,60 L940,100 L960,80 L980,110 L1000,90 L1000,200 Z"
                fill="#FFD700"
              />
            </svg>
          </div>

          {/* Foto */}
          <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500 blur-md opacity-20 rounded-full transform scale-110"></div>
              <div className="w-56 h-56 rounded-full bg-gray-800 border-4 border-yellow-500 overflow-hidden mb-4 flex items-center justify-center shadow-lg relative z-10">
                <img
                  src="/Gab.jpg"
                  alt="Aniversariante"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decoração Batman */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <svg viewBox="0 0 50 20" className="w-12 h-8">
                  <path d="M10,15 L20,5 L30,5 L40,15 L25,20 Z" fill="#FFD700" />
                </svg>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-center shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-400 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 to-transparent"></div>
              <span className="relative z-10 text-xl tracking-wide">
                O CAVALEIRO DAS FESTAS
              </span>
            </div>
          </div>

          {/* Informações */}
          <div className="md:w-2/3 md:pl-6 relative z-10">
            <div className="italic text-yellow-500 text-center text-2xl mb-8 font-semibold border-b-2 border-yellow-500 border-opacity-30 pb-4">
              "Eu sou a vingança. Eu sou a noite. Eu sou... o ANIVERSARIANTE!" –
              Batman
            </div>

            <div className="mb-6">
              <p className="text-xl mb-4">
                A Bat-sinal foi acesa, e você foi escolhido para se juntar à
                celebração mais sombria (e épica) de todas!
              </p>
            </div>

            <div className="mb-6 bg-gray-800 bg-opacity-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-yellow-500 text-2xl font-bold mb-2 flex items-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                  <path
                    fill="currentColor"
                    d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                  />
                </svg>
                LOCAL: BATCAVERNA SECRETA (OU QUASE)
              </h2>
              <p className="text-lg ml-8">
                Passagem Severa Romana, nº 30 – Bairro: Sacramenta
              </p>
            </div>

            <div className="mb-6 bg-gray-800 bg-opacity-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-yellow-500 text-2xl font-bold mb-2 flex items-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2">
                  <path
                    fill="currentColor"
                    d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                  />
                </svg>
                DATA E HORA
              </h2>
              <p className="text-lg ml-8">
                Missão começa às 19:45 – não se atrase, o Coringa pode aparecer!
              </p>
            </div>

            <div className="bg-gray-800 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md">
              <p className="text-xl">
                Vista sua capa, prepare seu melhor traje (ou não) e venha curtir
                uma noite cheia de mistérios, risadas e, claro, bolo!
              </p>
            </div>
          </div>
        </div>

        {/* Botão RSVP */}
        <div className="bg-gray-900 py-6 px-4 text-center border-t-2 border-yellow-500 border-opacity-50 relative">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">
            CONFIRME SUA PRESENÇA
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5591982534512&text=Opa%21+Confirmo+minha+presen%C3%A7a+no+seu+anivers%C3%A1rio+do+Batman%2C+Ops+Gabriel+...%21+%EF%BF%BD%EF%BF%BD&type=phone_number&app_absent=0"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center w-64"
            >
              CONFIRMAR PRESENÇA
            </a>
          </div>
        </div>

        {/* Rodapé */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-3 px-4 text-black text-center relative">
          <div className="absolute inset-0 bg-yellow-500 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 to-transparent"></div>
          <p className="font-bold text-xl tracking-wide relative z-10">
            RSVP PARA O GAB – O CAVALEIRO DAS FESTAS
          </p>
        </div>

        {/* Silhueta de Batman */}
        <div className="w-full flex justify-center md:justify-end relative -mt-6 mx-6 z-20">
          <svg viewBox="0 0 100 50" className="w-40 h-24 drop-shadow-lg">
            <path
              d="M20,10 L30,0 L70,0 L80,10 L90,5 L90,15 L80,20 L80,40 L70,50 L30,50 L20,40 L20,20 L10,15 L10,5 L20,10"
              fill="black"
              stroke="#FFD700"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Morcegos voando */}
      <div className="absolute top-10 left-10 animate-bounce opacity-30 z-0">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-500">
          <path
            fill="currentColor"
            d="M2,2L8,7L14,2L20,7L22,5V11H20V13H22V19H20V21H10V19H8V21H2V19H0V13H2V11H0V5L2,7L8,2M20,13H16V15H20V13M4,13H8V15H4V13Z"
          />
        </svg>
      </div>
      <div
        className="absolute top-20 right-20 animate-bounce opacity-20 z-0"
        style={{ animationDelay: "0.5s" }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
          <path
            fill="currentColor"
            d="M2,2L8,7L14,2L20,7L22,5V11H20V13H22V19H20V21H10V19H8V21H2V19H0V13H2V11H0V5L2,7L8,2M20,13H16V15H20V13M4,13H8V15H4V13Z"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-10 left-1/4 animate-bounce opacity-20 z-0"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
          <path
            fill="currentColor"
            d="M2,2L8,7L14,2L20,7L22,5V11H20V13H22V19H20V21H10V19H8V21H2V19H0V13H2V11H0V5L2,7L8,2M20,13H16V15H20V13M4,13H8V15H4V13Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default BatmanInvitation;
