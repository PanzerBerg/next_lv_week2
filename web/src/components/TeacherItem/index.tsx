import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/42724637?s=460&u=cdd72e4fcb664d17ecaa8efce4289a6de1e06d7d&v=4" alt="Matheus Santos" />
                <div>
                    <strong>Matheus Santos</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Whatsapp" />
                                    Entrar em contato
                    </button>
            </footer>
        </article>
    )
}

export default TeacherItem