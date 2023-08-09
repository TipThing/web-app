import { Color, Role, Space, Visibility } from '@/lib/types';

export const mockSpaces: Space[] = [
  {
    id: 1,
    title: 'Public Space',
    description: 'This is a public space',
    handle: 'public-space',
    color: Color.LightBlue,
    dashboards: [
      {
        id: 101,
        title: 'Public Dashboard',
        description: 'This is a public dashboard',
        tags: [],
        members: [
          {
            id: 201,
            username: 'viewer1',
            handle: 'viewer1',
            role: Role.Viewer,
          },
          {
            id: 202,
            username: 'contributor1',
            handle: 'contributor1',
            role: Role.Contributor,
          },
        ],
        visibility: Visibility.Public,
        handle: 'public-dashboard',
      },
    ],
    tags: [
      { id: 301, label: 'Tag 1' },
      { id: 302, label: 'Tag 2' },
    ],
    members: [
      {
        id: 401,
        username: 'user1',
        handle: 'user1',
        role: Role.Administrator,
      },
      {
        id: 402,
        username: 'user2',
        handle: 'user2',
        role: Role.Owner,
      },
    ],
    visibility: Visibility.Public,
  },
  {
    id: 2,
    title: 'Private Space',
    description: '',
    handle: 'private-space',
    color: Color.Red,
    dashboards: [
      {
        id: 102,
        title: 'Private Dashboard',
        description: 'This is a private dashboard',
        tags: [
          { id: 303, label: 'Important' },
          { id: 304, label: 'Urgent' },
        ],
        members: [
          {
            id: 203,
            username: 'contributor2',
            handle: 'contributor2',
            role: Role.Contributor,
          },
        ],
        visibility: Visibility.Private,
        handle: 'private-dashboard',
      },
    ],
    tags: [],
    members: [
      {
        id: 403,
        username: 'user3',
        handle: 'user3',
        role: Role.Viewer,
      },
    ],
    visibility: Visibility.Private,
  },
  {
    id: 3,
    title: 'Empty Space',
    description: 'This space has no dashboards, tags, and members.',
    handle: 'empty-space',
    color: Color.Pink,
    dashboards: [],
    tags: [],
    members: [],
    visibility: Visibility.Hidden,
  },
];
