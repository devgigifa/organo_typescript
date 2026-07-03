import Collaborator from '../Collaborator';
import hexToRgba from 'hex-to-rgba';
import { AiFillCloseCircle } from 'react-icons/ai';
import './team.css';
import { ICollaborator, ITeam } from '../../types';

interface TeamProps {
    team: ITeam;
    collaborators: ICollaborator[];
    onDelete: (id: string) => void;
    onDeleteTeam: (id: string) => void;
    changeColor: (color: string, id: string) => void;
    onFavorite: (id: string) => void;
    onProfileClick: () => void;
}

const Team = ({ team, collaborators, onDelete, onDeleteTeam, changeColor, onFavorite, onProfileClick }: TeamProps) => {
    return (
        (collaborators.length > 0) ? (
            <section className="team" style={{ position: 'relative', backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
                <AiFillCloseCircle 
                    size={30} 
                    className="delete-team" 
                    onClick={() => onDeleteTeam(team.id)} 
                    style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer', color: '#fff' }}
                />
                <input 
                    type="color" 
                    className="color-input" 
                    value={team.color} 
                    onChange={event => {
                        changeColor(event.target.value, team.id);
                    }} 
                />
                <h3 style={{ borderColor: team.color, cursor: 'pointer' }} onClick={onProfileClick}>
                    {team.name}
                </h3>
                <div className="collaborators">
                    {collaborators.map((collaborator, index) => (
                        <Collaborator 
                            key={index} 
                            collaborator={collaborator} 
                            backgroundColor={team.color} 
                            onDelete={onDelete} 
                            onFavorite={onFavorite} 
                        />
                    ))}
                </div>
            </section>
        ) : null
    );
};

export default Team;
