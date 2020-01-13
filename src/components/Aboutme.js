import React from "react";
import {Grid, Cell} from "react-mdl";
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"

class About extends React.Component {
    render(){
        return (
            <div>
                <Grid>

                    <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img
                        src="http://chittagongit.com/download/316595"
                        alt="avatar"
                        style={{height:"200px"}}
                        />

                    </div>

                    <h2 style={{paddingTop:'2em'}}>Bartlomiej Sworzen</h2>
                    <h4 style={{color:'grey'}}>Programer</h4>
                    <hr style={{borderTop:'3px solid green', width:'50%'}}/>
                    <p>Jakis tekst</p>
                    <hr style={{borderTop:'3px solid green', width:'50%'}}/>
                    <h5>Adress</h5>
                    <p>Swietojanska 51/ Gdynia 52-921</p>
                    <h5>Phone</h5>
                    <p>(48) 421 412 421</p>
                    <h5>Website</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop:'3px solid green', width:'50%'}}/>


                    </Cell>
                    <Cell col={8} className="about-right">
                        <h2>Education</h2>

                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="School 1"
                            schoolDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."

                        />
                        <Education
                            startYear={2017}
                            endYear={2021}
                            schoolName="School 2"
                            schoolDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."

                        />
                        <hr style={{borderTop:'3px solid green'}} />

                        <h2>Experience</h2>
                        <Experience
                        startYear={2013}
                        endYear={2017}
                        jobName="CosTam #1"
                        jobDesc="Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum"
                        />
                        <Experience
                        startYear={2017}
                        endYear={2024}
                        jobName="CosTam #2"
                        jobDesc="Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum"
                        />
                         <hr style={{borderTop:'3px solid green'}} />

                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}

                        />
                        <Skills
                            skill="react"
                            progress={70}

                        />
                        <Skills
                            skill="java"
                            progress={50}
                        />


                    </Cell>

                </Grid>
            </div>

        )
    }
}
export default About