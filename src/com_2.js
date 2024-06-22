import founder1 from  "./assets/362px-Ferdinand_Porsche.jpg"
import founder2 from  "./assets/214436119_1527697464_v16_9_1200.jpeg"
import founder3 from  "./assets/0x0.webp"
import RevealOnScroll from './RevealOnScroll';

function Com_2(){
    return(
    <>
        <div className="container com2">
            <RevealOnScroll>
                <div className="card">
                    <div className="card_up"><img src={founder1}></img></div>
                    <div className="card_main"><h1>Ferdinand Porsche</h1></div>
                    <div className="card_bottom"><a href="https://ar.wikipedia.org/wiki/%D9%81%D8%B1%D8%AF%D9%8A%D9%86%D8%A7%D9%86%D8%AF_%D8%A8%D9%88%D8%B1%D8%B4%D9%87">learn more <span>&#8594;</span>
                    </a></div>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="card">
                    <div className="card_up"><img src={founder2}></img></div>
                    <div className="card_main"><h1>Anton Piech</h1></div>
                    <div className="card_bottom"><a href="https://ar.wikipedia.org/wiki/%D9%81%D8%B1%D8%AF%D9%8A%D9%86%D8%A7%D9%86%D8%AF_%D8%A8%D9%88%D8%B1%D8%B4%D9%87">learn more <span>&#8594;</span>
                    </a></div>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="card">
                    <div className="card_up"><img src={founder3}></img></div>
                    <div className="card_main"><h1>Adolf Rosenberger</h1></div>
                    <div className="card_bottom"><a href="https://ar.wikipedia.org/wiki/%D9%81%D8%B1%D8%AF%D9%8A%D9%86%D8%A7%D9%86%D8%AF_%D8%A8%D9%88%D8%B1%D8%B4%D9%87">learn more <span>&#8594;</span>
                    </a></div>
                </div>
            </RevealOnScroll>
        </div>

    </>
    )
}

export default Com_2 ;