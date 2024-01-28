import "react-bootstrap";
import "./Player.css";
import { Card } from "react-bootstrap";

//Fonction qui construit une carte individuelle pour chaque joueur

export function Player(props) {
  return (
    <>
      <Card style={{ width: "14.5rem",backgroundColor:"#a1893f",margin:'0 auto',borderRadius:"25px 0 25px 0"}}>
        <div className="infos">
            <p style={{fontSize:35,paddingLeft:10,fontFamily:"Roboto"}}>{props.jerseyNumber}</p>
            <p><img src={props.team} alt="club" style={{width:60}}/></p>
            <p><img src={props.nationality} alt="club" style={{width:60}}/></p>
        </div>
        <Card.Img variant="top" src={props.profil} style={{paddingLeft:40}} />
        <Card.Body>
          <Card.Title style={{ fontSize:15,paddingLeft:40,marginTop:20}}>{props.name}</Card.Title>
          <Card.Text style={{color:"white",textAlign:"center"}}>
                    <p>{props.age} ANS</p>
                    <p>{props.position}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

//Voici les proprietes par defaut
Player.defaultProps ={
    name : "SADIO MANE",
    team :"/Al_Nassr.webp",
    nationality:"/Flag_of_Senegal.png",
    jerseyNumber : 10,
    age :31,
    profil : "/sadio.webp",
    position:"Ailier"
};