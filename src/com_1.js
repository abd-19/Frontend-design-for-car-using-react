import image from "./assets/porsche-model.png"
import logo from "./assets/channels4_profile-removebg-preview.png"

function Com_1(){
    return(
        <>
        <div className="container com1">
            <div className="left">
               <h1>Porsche</h1> 
                <p> a German company specialized in manufacturing luxury, high-performance sports cars. The company was founded in 1931 by Austrian engineer Ferdinand Porsche, who designed the first Volkswagen cars, and is headquartered in Stuttgart, Baden-Württemberg, Germany. It was founded by Ferdinand Porsche</p>
            </div>
            <div className="main_com1">
            <svg id="visual" viewBox="0 0 900 600" width="900" height="600" version="1.1"><g transform="translate(421.4488155472177 305.9526430420938)"><path d="M120.7 -111.7C170.7 -70.7 235.4 -35.4 247.8 12.5C260.3 60.3 220.7 120.7 170.7 154C120.7 187.3 60.3 193.7 0 193.7C-60.3 193.7 -120.7 187.3 -155 154C-189.3 120.7 -197.7 60.3 -190.8 6.8C-184 -46.7 -162 -93.3 -127.7 -134.3C-93.3 -175.3 -46.7 -210.7 -5.7 -205C35.4 -199.4 70.7 -152.7 120.7 -111.7" fill="#751616"></path></g></svg>
            </div>
            
            <img src={image} id="com1_image"></img>
            <div className="right">
                <img src={logo}></img>
            </div>
        </div>

        </>
    )
}

export default Com_1 ;