import React from "react"
import "./sectionTratarCancer.css"
import { LogoRadioterapia, LogoCirugia, LogoQuimioterapia } from "./icons.js"

class SectionTratarCancer extends React.Component {
  render() {
    return (
      <div className="TratarCancer">
        <div className="TrataCancerHeader">
          <h2 className="SectionTitle">
            ¿Cómo se <a>trata</a> el cáncer de piel?
          </h2>
          <p className="SectionInfo">
            Estas son las tres maneras de tratar el cáncer de piel.
          </p>
        </div>
        <div className="TratarCancerBody">
          <div className="TratarCancerContent">
            <div className="TratarCancerItems">
              <div className="TratarCancerItem">
                <div className="TratarCancerText">
                  <h4>Radioterapia</h4>
                  <p>
                    Usando rayos X de alta energía y otros tipos de radiación,
                    se destruyen las células cancerosas impidiendo que se
                    reproduzcan. Para el tratamiento del cáncer de piel se
                    utiliza la radioterapia externa con máquinas especializadas
                    se especializa en optimizar la dosis precisa para dirigirla
                    hacia el tumor minimizando los efectos en los tejidos que lo
                    rodean.
                  </p>
                </div>
                <div className="TratarCancerImage">
                  <LogoRadioterapia />
                </div>
              </div>
              <div className="TratarCancerItem">
                <div className="TratarCancerText">
                  <h4>Cirugía</h4>
                  <p>
                    Se hace una escisión simple para extirpar el tumor y un poco
                    del tejido circundante. También puede extirparse en capas
                    delgadas a través de la cirugía micrográfica de Mohs.
                  </p>
                  <p>
                    Hay otras opciones quirúrgicas como la crioterapia en el
                    cual se utiliza un instrumento para congelar y destruir el
                    tejido de un tumor, o la cirugía láser en la cual se usa un
                    rayo de luz intensa que funciona como un bisturí para
                    remover lesiones superficiales sin sangrado.
                  </p>
                  <p>
                    Para la extracción de lesiones en la capa superior de la
                    piel puede utilizarse un disco giratorio o pequeña
                    partículas en movimiento que desprenden las células de la
                    piel en lo que se conoce como dermoabrasión.
                  </p>
                </div>
                <div className="TratarCancerImage">
                  <LogoCirugia />
                </div>
              </div>
              <div className="TratarCancerItem">
                <div className="TratarCancerText">
                  <h4>Quimioterapia</h4>
                  <p>
                    El tipo de quimioterapia prescrita dependerá del tipo de
                    cáncer de piel. Para tratar el carcinoma de células basales
                    y el de células escamosas se puede utilizar una
                    quimioterapia tópica, aplicando en la piel una crema o
                    loción con los medicamentos que actuarán sobre la lesión.
                    <br />
                    En el caso del melanoma, se utiliza la quimioterapia
                    tradicional como tratamiento sólo en los casos en los cuales
                    no pueda extirparse mediante cirugía y el cáncer se haya
                    propagado a los ganglios linfáticos.
                  </p>
                </div>
                <div className="TratarCancerImage">
                  <LogoQuimioterapia />
                </div>
              </div>
            </div>
            <div className="BoxImage" />
          </div>
        </div>
      </div>
    )
  }
}

export default SectionTratarCancer
