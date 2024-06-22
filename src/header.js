import video from './assets/oIgJXLV6fEBzF7GeQeIzskuAI5eSYVpBkljAWT.mp4';

function Header() {
return(

    <div class="video-container">
        <video  muted autoPlay loop>
            <source src={video} type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="text">
            <h1>PORSCHE</h1>
            <p>BEST CAR EVER MADE</p>
            <button>get to know us</button>
        </div> 
    </div>  
)
}

export default Header;