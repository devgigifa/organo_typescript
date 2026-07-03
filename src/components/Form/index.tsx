import { useState } from 'react';
import Button from '../Button';
import Field from '../Field';
import Dropdown from '../Dropdown';
import './form.css';
import { ICollaborator } from '../../types';

interface FormProps {
    onRegister: (collaborator: Omit<ICollaborator, 'id'>) => void;
    teams: string[];
    onCreateTeam: (team: { name: string; color: string }) => void;
}

const Form = ({ onRegister, teams, onCreateTeam }: FormProps) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onRegister({
            name,
            role,
            image,
            team
        });
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    };

    const onSubmitTeam = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCreateTeam({ name: teamName, color: teamColor });
        setTeamName('');
        setTeamColor('');
    };

    return (
        <section className="form-container">
            <form className="form" onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <Field
                    required={true}
                    label="Cargo"
                    placeholder="Digite o cargo"
                    value={role}
                    onChange={value => setRole(value)}
                />
                <Field
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    onChange={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Times"
                    items={teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
            <form className="form" onSubmit={onSubmitTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChange={value => setTeamName(value)}
                />
                <Field
                    required={true}
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    onChange={value => setTeamColor(value)}
                />
                <Button>Criar Time</Button>
            </form>
        </section>
    );
};

export default Form;
