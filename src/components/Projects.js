import React from "react";
import {Tabs,Tab, Grid, Cell, Card,CardText, CardTitle, CardActions, Button, CardMenu,IconButton} from "react-mdl";


class Projects extends React.Component {
    constructor(props){
        super (props);
        this.state = {activeTab: 0}
    }
    toggleCategories() {
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
            {/*Projekt1*/}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{ color:'#fff', height:'175px', background:'url(https://frederiknielsen.com/wp-content/uploads/2019/04/como-funciona-reactjs.png) center / cover'}}>
                React Project #1
                </CardTitle>
                <CardText>
                    Projekt React 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{ color:'#fff'}}>
                <IconButton name="shared" />
                </CardMenu>
            </Card>
             {/*Projekt2*/}
             <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
             <CardTitle style={{ color:'#fff', height:'175px', background:'url(https://frederiknielsen.com/wp-content/uploads/2019/04/como-funciona-reactjs.png) center / cover'}}>
             React Project #2
             </CardTitle>
             <CardText>
                 Projekt React 
             </CardText>
             <CardActions border>
                 <Button colored>GitHub</Button>
             </CardActions>
             <CardMenu style={{ color:'#fff'}}>
             <IconButton name="shared" />
             </CardMenu>
         </Card>

          {/*Projekt3*/}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{ color:'#fff', height:'175px', background:'url(https://frederiknielsen.com/wp-content/uploads/2019/04/como-funciona-reactjs.png) center / cover'}}>
          React Project #3
          </CardTitle>
          <CardText>
              Projekt React 
          </CardText>
          <CardActions border>
              <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color:'#fff'}}>
          <IconButton name="shared" />
          </CardMenu>
      </Card>
      </div>
        )
    }
    else if(this.state.activeTab ===1){
        return(
        <div><h1>This is Angular</h1></div>
        )
    }
    else if(this.state.activeTab ===2){
        return(
        <div><h1>This is NodeJS</h1></div>
        )
    }
    else if(this.state.activeTab ===3){
        return(
        <div><h1>This is Mongo</h1></div>
        )
    }
}

    render(){
        return (
            <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>NodeJs</Tab>
            <Tab>Mongo</Tab>
            </Tabs>

           
            <Grid>
            <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>

            </Cell>

            </Grid>
            
            </div>

        )
    }
}
export default Projects