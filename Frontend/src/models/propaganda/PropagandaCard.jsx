import "./PropagandaCard.css"

export function PropagandaCard ({img, header_text, oferta, button_text, color}){

  return (
    <a className="propagancaCard-target">
      <main className="propadangaCard-container rounded-2xl">
        <section className="propagandaCard-left" style={{backgroundColor: color}}>
          <div className="propagandaCard-info-container">
            <div className="propagandaCard-info-text">
              <header>
                {header_text}
              </header>
              <main>
                {oferta}
              </main>
              <footer>
                {button_text}
              </footer> 
            </div>
          </div>
        </section>
        <section className="propagandaCard-right">
          <div className="propagandaCard-img-container">
            <img src={img} alt="#" className="w-90"/>
          </div>
        </section>
      </main>
    </a>
  )
}
