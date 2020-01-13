import React from "react";
import {Grid, Cell} from "react-mdl"

class Landing extends React.Component {
    render(){
        return (
            <div style={{width:'100%',margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f8830f0-679a-4974-977c-bd5802617c82/d8s8wpd-d947e6b0-308d-45d2-95d0-682724f72e10.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmODgzMGYwLTY3OWEtNDk3NC05NzdjLWJkNTgwMjYxN2M4MlwvZDhzOHdwZC1kOTQ3ZTZiMC0zMDhkLTQ1ZDItOTVkMC02ODI3MjRmNzJlMTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.brTQNPkNVMZ68lEJS8WY-troUqtIROc2bKOPtdTPx50" 
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML | CSS | React | JavaScript | Java</p>
                    

                    <div className="social-links">


                        <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-google"  aria-hidden="true" />
                        </a>


                        <a href="http://github.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>


                        <a href="http://freecodecamp.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-free-code-camp"  aria-hidden="true" />
                        </a>


                        <a href="http://youtube.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-youtube-square"  aria-hidden="true" />
                        </a>


                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}
export default Landing