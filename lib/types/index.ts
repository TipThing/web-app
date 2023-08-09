export enum Visibility {
  Public = 'Public',
  Private = 'Private',
  Hidden = 'Hidden',
  Blocked = 'Blocked',
}

export enum Role {
  Viewer = 'Viewer',
  Contributor = 'Contributor',
  Administrator = 'Administrator',
  Owner = 'Owner',
}

export enum Color {
  Red = 'bg-red-600',
  Yellow = 'bg-yellow-500',
  Green = 'bg-green-500',
  LightBlue = 'bg-cyan-500',
  DarkBlue = 'bg-blue-600',
  Pink = 'bg-pink-500',
}

export type Dashboard = {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  members: Member[];
  visibility: Visibility;
  handle: string;
};

export type Member = {
  id: number;
  username: string;
  handle: string;
  role: Role;
};

export type Tag = {
  id: number;
  label: string;
};

export type Space = {
  id: number;
  title: string;
  description?: string;
  handle: string;
  color?: Color;
  dashboards?: Dashboard[];
  tags?: Tag[];
  members?: Member[];
  visibility: Visibility;
};
