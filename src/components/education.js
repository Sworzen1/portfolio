import React from 'react';
import {Grid, Cell} from "react-mdl"
class Education extends React.Component{
    render(){
        return(
            <div>

                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>


                    <Cell col={8}>
                        <h4 style={{marginTop:'8px'}}>{this.props.schoolName}</h4>
                        <p>{this.props.schoolDesc}</p>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Education