import React from "react";
import { Grid, Cell, List, ListItemContent, ListItem } from "react-mdl";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Bartlomiej Sworzen</h2>
            <img
              src="http://www.camarad.cz/wp-content/uploads/2018/11/avarar.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Zapraszam serdecznie na strone poswiecona portfolio :)
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr />
            <div className="contact-list">
              <List>
                  {/*Telephone*/}
                <ListItem>
                  <ListItemContent style={{fontSize:'25px'}}>
                   <i className="fa fa-phone-square"/>
                    (48) 321-556-234
                  </ListItemContent>
                </ListItem>
                {/*Telephone*/}
                <ListItem>
                  <ListItemContent style={{fontSize:'25px'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  b.sworzen@gmail.com
                  </ListItemContent>
                </ListItem>
                {/*Telephone*/}
                <ListItem>
                  <ListItemContent style={{fontSize:'25px'}}>
                  <i className="fa fa-skype" aria-hidden="true"/>
                  ZadzwonDoMnie
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
