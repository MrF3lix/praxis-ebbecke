import React from 'react'
import TitleImage from '../../assets/gfx/background-praxis.jpg'

const MotivationSection = () => (
    <section className="motivation">
        <div className="content__container">
            <h2>
                Unser Anliegen:<br />
                Der Mensch steht im Mittelpunkt
            </h2>
            <p>
                Mit unserer therapeutischen Arbeit und ganzheitlichen Betrachtungsweise möchten wir unseren Patienten in ihrem Wunsch nach Gesundheit und Wohlbefinden begleiten und unterstützen.
                Jede Gesundheitsstörung oder Erkrankung erfordert ein individuelles Therapiekonzept.
                Im Mittelpunkt steht dabei immer der Mensch als Ganzes, als Einheit zwischen Körper, Geist und Seele.
                Wir Therapeuten arbeiten seit 15 Jahren Hand in Hand und bemühen uns so möglichst umfassend behandeln und beraten zu können, um eine fürsorgliche und qualifizierte Betreuung zu ermöglichen.
                Stoßen wir dabei an unsere Grenzen, empfehlen wir Ärzte oder Therapeuten mit anderen Schwerpunkten.
            </p>
        </div>
        <div className="image__container">
            <img src={TitleImage} />
        </div>
    </section>
)

export default MotivationSection