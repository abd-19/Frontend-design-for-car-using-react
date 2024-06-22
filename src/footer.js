import video from "./assets/oItSFLYmYcNjTHfUEtLIAfGRJUAWwuUEIeeE8R.mp4"


function Footer(){
    return(
        <>
        <div class="video-container">
        <video  muted autoPlay loop>
            <source src={video} type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="text">
           
        </div> 
    </div>  
        </>
    )
}

export default Footer ;