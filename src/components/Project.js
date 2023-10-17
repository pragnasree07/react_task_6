import { Power, GraphUp, House } from "react-bootstrap-icons";
import { Linkedin, Instagram, Github } from "react-bootstrap-icons";
import "./Projectspage.css";
function Project() {
    return (
        <div id="Projects">
           
            <h2 class="text-primary text-center mt-5">Projects</h2>
            <div class="row mx-5 mt-5">
                <div class=" col-md-4  col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2"><Power size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Advanced Footstep Power Generation</h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">Developed a project on
generating the electrical energy from mechanical energy
using piezo electric sensors .</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2 fa-solid fa-leaf"><House size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Building a user interface for a travel agency app </h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">I have build user interface prototype of a moblie application for a travel agency to book their hotels/trains/flights/buses.</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2"><GraphUp size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Stock prediction using machine learning</h3>

                            <br></br>
                            <br></br>

                            <p className="card-text">I have built a model to predict the stock exchanges using machine learning techniques</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-primary text-center mt-5">Contact</h2>
            <br></br>
            <center>
                <a href="www.linkedin.com/in/pragna-sree-3a9008159" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35}  color = "black" className="rounded mx-4" />
                </a>
                <a href="https://www.instagram.com/pragnasree_05/" target="_blank" rel="noopener noreferrer">
                    <Instagram size={35} color="black" className="rounded mx-4" />
                </a>
                <a href="https://github.com/pragnasree07" target="_blank" rel="noopener noreferrer">
                    <Github size={35} color = "black" className="rounded mx-4" />
                </a>
                
                
            </center>
            <br></br>
            <p class="text-center">@2023</p>
        </div>
    )
}

export default Project;