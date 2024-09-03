import "./aboutUs.css"

const AboutUsData={
    "title": "About Us",
    "image": "https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg",
    "description": "We are a team of passionate individuals who are dedicated to providing the best possible Set the scene by introducing the characters and status quo. Introduce the problem that caused you to act. Explain how you found a solution and the challenges you faced.Set the scene by introducing the characters and status quo. Introduce the problem that caused you to act. Explain how you found a solution and the challenges you faced.",
}




const AboutUs = () => {
    return(
        <div className="about">
            <h1>{AboutUsData.title}</h1>
            <div className="img_div">
                <img src={AboutUsData.image} alt="About Us Image"/>
                <p>{AboutUsData.description}</p>
            </div>
        </div>
    )
}

export default AboutUs