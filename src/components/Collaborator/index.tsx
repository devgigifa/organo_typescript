import './collaborator.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { ICollaborator } from '../../types';

interface CollaboratorProps {
    collaborator: ICollaborator;
    backgroundColor: string;
    onDelete: (id: string) => void;
    onFavorite: (id: string) => void;
}

const Collaborator = ({ collaborator, backgroundColor, onDelete, onFavorite }: CollaboratorProps) => {
    function favorite() {
        onFavorite(collaborator.id);
    }

    return (
        <div className="collaborator">
            <AiFillCloseCircle size={25} className="delete" onClick={() => onDelete(collaborator.id)} />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className="collaborator-footer">
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.role}</h5>
                <div className="favorite">
                    {collaborator.favorite ? (
                        <AiFillHeart color="#ff0000" size={25} onClick={favorite} />
                    ) : (
                        <AiOutlineHeart size={25} onClick={favorite} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collaborator;
