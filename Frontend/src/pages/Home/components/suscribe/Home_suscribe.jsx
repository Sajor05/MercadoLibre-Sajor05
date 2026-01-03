import "./Home_suscribe.css";

const Suscribe_header = () =>{
  return(
          <header className="home-suscribe-header-container flex justify-between text-white bg-[#f5f5f5] h-20">
            <div className="home-suscribe-header-subcontainer flex gap-[12px]">
              <div>
                <img 
                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/vdp/pill-meliplus.png"
                className="w-[73px] h-[30px]"
                />                
              </div>
              <div className="home-suscribe-header-container-title flex justify-center mt-1">
                <h2 className="home-suscribe-header-title text-black uppercase text-1xl">Viví mercado libre como un experto</h2>                 
              </div>
            </div>
            <div className="home-suscribe-button-container mt-3 bg-[#3483fa] cursor-pointer w-[192.25px] h-[32px]">
              <a className="home-suscribe-button">
                <span className="home-suscribe-button-content-container">
                  <span className="home-suscribe-button-content text-sm">Suscribirme desde $ 3.490</span>
                </span>
              </a>              
            </div>

          </header>
        );
}

const EnviosGratisProductos = () => {
  return(
          <section className="benefit flex flex-col gap-[8px]">
            <div>
              <img 
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/melimas/widget_home/benefits/box_desktop@2x.png"
              className="benefit-img"
              />
            </div>
            <div className="text-center">
                <p className="benefit-parragraph font-bold">Envíos gratis en millones de productos desde $15.000</p>
            </div>
          </section>
        );
}

const Plataformas = () => {
  return(
          <section className="benefit flex flex-col gap-[8px]">
            <div>
              <img 
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/melimas/widget_home/benefits/partners-desktop@2x.png"
              className="benefit-img"
              />
            </div>
            <div className="text-center">
                <p className="benefit-parragraph font-bold">Las mejores plataformas de entretenimiento</p>
            </div>
          </section>
        );
}


const CuotasExtras = () => {
  return(
          <section className="benefit flex flex-col gap-[8px]">
            <div>
              <img 
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/melimas/widget_home/benefits/mla_cuotas_installments_desktop@2x.png"
              className="benefit-img"
              />
            </div>
            <div className="text-center">
                <p className="benefit-parragraph font-bold">Hasta 3 cuotas extra en tus compras</p>
            </div>
          </section>
        );
}

const EnviosGratisDelivery = () => {
  return(
          <section className="benefit flex flex-col gap-[8px]">
            <div>
              <img 
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/partners/melimas/widget_home/benefits/delivery-desktop@2x.png"
              className="benefit-img"
              />
            </div>
            <div className="text-center">
              <p className="benefit-parragraph font-bold">Envíos gratis en pedidos de "Restaurantes"</p>              
            </div>
          </section>
        );
}


export const Suscribe = () => {
  return (
      <div className="flex justify-center">
        <section className="home-suscribe-container bg-white h-[335px] w-[1180px]">
          <Suscribe_header/>
          <main className="p-5">
            <div className="benefit-list flex mt-[10px] grid-cols-4 flex-nowrap">
              <EnviosGratisProductos/>
              <Plataformas/>
              <CuotasExtras/>
              <EnviosGratisDelivery/>
            </div>
          </main>
        </section>
      </div>
  );
}
