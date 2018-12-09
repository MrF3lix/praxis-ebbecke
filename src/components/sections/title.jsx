import React from 'react'
import Button from '../_shared/button'
import TitleImage from '../../assets/gfx/background-title.jpg'

const TitleSection = () => (
    <section className="title">
        <div className="inner">
            <div className="image__container">
                <img src={TitleImage} />
            </div>
            <div className="content__container">
                <h1>Praxis für Naturheilverfahren, Osteopathie & Physiotherapie</h1>
                <p>
                    Sie haben hier die Möglichkeit sich über die unterschiedlichen Therapie- und Behandlungskonzepte zu informieren.
                    Am Herzen liegt uns, dass Sie sich in unserer Praxis in angenehmer, entspannter Atmosphäre professionell beraten und behandelt, und natürlich gut aufgehoben fühlen.

                    Wir würden uns freuen, Sie in unserer Praxis begrüßen zu dürfen.
                    </p>
                <Button>Kontakt</Button>
            </div>
        </div>
        <div className="background__div"></div>
    </section>
)

export default TitleSection