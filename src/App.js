import React from 'react';
import './App.css';
import {Layout,Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from "./components/Main"
import {Link} from "react-router-dom";

class App extends React.Component {
  render(){
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Home</Link>} scroll>
            <Navigation>
                <Link to="/Aboutme">Aboutme</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link>}>
            <Navigation>
              <Link to="/Aboutme">Aboutme</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
              <Main />
        </Content>
    </Layout>
</div>
  );
}
}
export default App;
