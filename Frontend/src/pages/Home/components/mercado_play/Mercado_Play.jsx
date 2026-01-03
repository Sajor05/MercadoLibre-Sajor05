import "./Mercado_Play.css";
import ReactPlayer from 'react-player'

export function MercadoPlay() {
  const trailer = "https://www.youtube.com/watch?v=1clWprLC5Ak"
  return (
    <section className="mercadoplay-container w-[73.75rem] h-[356px]">
      <div className="grid grid-cols-2 gap-4 justify-between text-white">
        <section className="mt-9">
          <div>
            <div className="mercadoplay-title-container">
              <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play-v3.png" alt="" className="w-[114px] h-[46px]" />
              <div className="mercadoplay-text-container text-white mt-9 flex flex-col">
                <span className="primary-title text-[28px] font-bold">¡Series y películas</span>
                <span className="secondary-title text-[28px] font-bold">también en TV!</span>
                <span className="pill">gratis</span>
              </div>
              <div className="mercadoplay-button-container mt-10">
                <button className="mercadoplay-button flex justify-center items-center">
                  <span className="mercadoplay-button-content text-white text-[11px]">Ir a Mercado Play</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ReactPlayer
            url={trailer}
            playing={false}
            volume={0.5}
          />
        </section>
      </div>
    </section>
  );
}

/*
    <section className="flex items-center justify-center">
      <div className="mercadoplay-container flex w-295 h-89">
        <section className="mercadoplay-container-left flex-col">
          <div>
            <div className="mercadoplay-title-container">
              <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play-v3.png" alt="" className="w-[114px] h-[46px]" />
              <div className="mercadoplay-text-container text-white">
                <span className="primary-title">¡Series y películas</span>
                <span className="secondary-title">también en TV!</span>
                <span className="pill">gratis</span>
              </div>
              <div className="mercadoplay-button-container">
                <button className="mercadoplay-button">
                  <span className="mercadoplay-button-content text-white">Ir a Mercado Play</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className=".mercadoplay-container-right flex-col">
        </section>
      </div>
    </section>
*/