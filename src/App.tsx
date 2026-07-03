import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';
import TeamProfileModal from './components/TeamProfileModal';
import { v4 as uuidv4 } from 'uuid';
import { ICollaborator, ITeam } from './types';

function App() {
  const [teams, setTeams] = useState<ITeam[]>([
    { id: uuidv4(), name: 'Programação', color: '#57C278' },
    { id: uuidv4(), name: 'Front-End', color: '#82CFFA' },
    { id: uuidv4(), name: 'Data Science', color: '#A6D157' },
    { id: uuidv4(), name: 'Devops', color: '#E06B69' },
    { id: uuidv4(), name: 'UX e Design', color: '#DB6EBF' },
    { id: uuidv4(), name: 'Mobile', color: '#FFBA05' },
    { id: uuidv4(), name: 'Inovação e Gestão', color: '#FF8A29' },
  ]);

  const initial: ICollaborator[] = [
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    }
  ];

  const [collaborators, setCollaborators] = useState<ICollaborator[]>(initial);
  const [selectedTeam, setSelectedTeam] = useState<ITeam | null>(null);

  function deleteCollaborator(id: string) {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
  }

  function deleteTeam(id: string) {
    setTeams(teams.filter(team => team.id !== id));
  }

  function changeTeamColor(color: string, id: string) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function registerTeam({ name, color }: { name: string; color: string }) {
    setTeams([...teams, { name, color, id: uuidv4() }]);
  }

  function toggleFavorite(id: string) {
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) collaborator.favorite = !collaborator.favorite;
      return collaborator;
    }));
  }

  return (
    <div>
      <Banner />
      <Form 
        onCreateTeam={registerTeam} 
        teams={teams.map(team => team.name)} 
        onRegister={collaborator => setCollaborators([...collaborators, { ...collaborator, id: uuidv4() }])} 
      />
      <section className="teams">
        <h1 style={{ textAlign: 'center', padding: '32px 0' }}>Minha organização</h1>
        {teams.map((team, index) => (
          <Team 
            changeColor={changeTeamColor} 
            key={index} 
            team={team} 
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} 
            onDelete={deleteCollaborator} 
            onDeleteTeam={deleteTeam}
            onFavorite={toggleFavorite} 
            onProfileClick={() => setSelectedTeam(team)}
          />
        ))}
      </section>
      <Footer />
      
      {selectedTeam && (
        <TeamProfileModal 
           team={selectedTeam} 
           collaborators={collaborators.filter(c => c.team === selectedTeam.name)} 
           onClose={() => setSelectedTeam(null)} 
        />
      )}
    </div>
  );
}

export default App;
