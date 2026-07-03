export interface ICollaborator {
    id: string;
    name: string;
    role: string;
    image: string;
    team?: string;
    favorite?: boolean;
}

export interface ITeam {
    id: string;
    name: string;
    color: string;
}
