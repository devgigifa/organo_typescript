import { useState } from 'react';
import './teamProfileModal.css';
import { ICollaborator, ITeam } from '../../types';

interface TeamProfileModalProps {
    team: ITeam;
    collaborators: ICollaborator[];
    onClose: () => void;
}

export default function TeamProfileModal({ team, collaborators, onClose }: TeamProfileModalProps) {
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

    const handleAvatarClick = (id: string) => {
        if (selectedAvatar === id) {
            setSelectedAvatar(null); // Uncheck
        } else {
            setSelectedAvatar(id); // Check
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <div style={{ '--total': collaborators.length } as React.CSSProperties} className="circle-wrapper">
                  <div className="center-element">{team.name}</div>
                  {collaborators.map((collaborator, index) => {
                      const i = index + 1;
                      const total = collaborators.length;
                      const d = i / total;
                      const rOffset = -0.15;
                      const rAmount = 1;
                      const r = (rAmount * d) + rOffset;
                      
                      return (
                          <div key={collaborator.id}>
                              <input 
                                  type="radio" 
                                  name="radio-avatar" 
                                  id={`radio-avatar-${i}`} 
                                  checked={selectedAvatar === collaborator.id}
                                  readOnly
                              />
                              <label 
                                  id={`avatar-${i}`} 
                                  htmlFor={`radio-avatar-${i}`} 
                                  className="avatar" 
                                  style={{ 
                                      transform: `rotate(${r}turn) translate(180px) rotate(${-r}turn)`
                                  }}
                                  onClick={(e) => { e.preventDefault(); handleAvatarClick(collaborator.id); }}
                              >
                                  <img src={collaborator.image} alt={collaborator.name} />
                                  <svg viewBox="0 0 300 300">
                                      <text fill="currentColor">
                                          <textPath xlinkHref="#circlePath">{collaborator.name} - {collaborator.role}</textPath>
                                      </text>
                                  </svg>
                              </label>
                          </div>
                      );
                  })}
                </div>

                {/* SVG template for dynamic text */}
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="0" height="0">
                  <defs>
                    <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0" />
                  </defs>
                </svg>
            </div>
        </div>
    );
}
