import { Player } from "./Player";
import { players } from "../players";

//Le but de ce composant est d'afficher la liste des cartes de joueurs 
export function PlayerList(){
    return(
            <> 
                {players.map(player=><Player name={player.name} team={player.team} nationality={player.nationality} jerseyNumber={player.jerseyNumber} age={player.age} position={player.position} profil={player.profil} />)};
            </>
    )
}