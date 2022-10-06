import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Heading from '../Heading';
import ProjectCard from '../ProjectCard';

const Projects = () => {
    const projects = [
        {
            "imgUrl": "/assets/img/fashionista1.png",
            "title": "Fashionista",
            "description": "Projeto em equipe feito em React e NodeJS com banco de dados em PostgreSQL.",
            "responsabilities": "Liderança de equipe e desenvolvimento.",
            "projectUrl": "https://fashionista-hackadev.netlify.app/",
            "gitHubUrl": "https://github.com/LukSantana/fashionista2"
        },
        {
            "imgUrl": "/assets/img/nlw-esports.png",
            "title": "NLW-eSports",
            "description": "Projeto feito em React, React Native e NodeJS pela Next Level Week da Rocketseat.",
            "projectUrl": "https://nlw-esports-luk.netlify.app/",
            "gitHubUrl": "https://github.com/LukSantana/NLW-eSports"
        },
        {
            "imgUrl": "/assets/img/geradorSenha.png",
            "title": "Gerador de Senhas",
            "description": "Gerador de senhas feito com HTML, CSS e Javascript.",
            "projectUrl": "https://luksantana.github.io/geradorSenha/",
            "gitHubUrl": "https://github.com/LukSantana/geradorSenha"
        },
        {
            "imgUrl": "/assets/img/validador.png",
            "title": "Validador de CPF",
            "description": "Validador de CPF feito em NodeJS.",
            "projectUrl": "https://luksantana.github.io/verificador-cpf/",
            "gitHubUrl": "https://github.com/LukSantana/verificador-cpf"
        },
        {
            "imgUrl": "/assets/img/relogio.png",
            "title": "Relógio",
            "description": "Relógio feito HTML, CSS e Javascript.",
            "projectUrl": "https://luksantana.github.io/relogio/",
            "gitHubUrl": "https://github.com/LukSantana/relogio"
        },
        {
            "imgUrl": "/assets/img/calculadora.png",
            "title": "Calculadora",
            "description": "Calculadora feita em HTML, CSS e Javascript.",
            "projectUrl": "https://luksantana.github.io/calculadora/",
            "gitHubUrl": "https://github.com/LukSantana/calculadora"
        }
    ]

    const isMobile = window.innerWidth <= 1024

    return (
        <div className='flex flex-col justify-center items-center gap-12' id='projects'>
            <Heading>Projetos</Heading>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container"
                draggable
                focusOnSelect={false}
                infinite={false}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide={isMobile ? 1 : 2}
                swipeable
            >
                {projects.map(project => <ProjectCard
                    key={project.title}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    description={project.description}
                    projectUrl={project.projectUrl}
                    gitHubUrl={project.gitHubUrl}
                />)}
            </Carousel>
        </div>
    )
}

export default Projects