//Liste des imports pour le composant principal
import 'bootstrap/dist/css/bootstrap.min.css';

import{Row} from 'react-bootstrap';
import { PlayerList } from './components/PlayerList';
import './App.css';

function App() {
  return (
  
    <div className="App" style={{fontFamily:"Roboto"}}>
      <h1><img src='/icons8-ballon-50.png' style={{width:30}}alt='ball'/>CAN 2023<img src='/icons8-ballon-50.png' style={{width:30}}alt='ball'/></h1>
      <Row>
          <PlayerList/>
      </Row>
      <p style={{fontFamily:'cursive',color:'white',textAlign:'center',marginTop:'80px',fontSize:35}}><span style={{color:'green'}}>MANKOO</span> <span style={{color:'yellow'}}>WUTI WAAT</span> <span style={{color:'red'}}>NDAM LI !!!</span><img src='/etoile.png' alt='etoile'/></p>
    </div>
    
  );
}

export default App;
