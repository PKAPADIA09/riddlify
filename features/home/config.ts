import type { ComponentProps } from 'react';
import type { Ionicons } from '@expo/vector-icons';

type Icon = ComponentProps<typeof Ionicons>['name'];

export const APP_NAME = 'Riddlify';
export const GREETING = "Ready for today's challenge?";
export const GROUPS_TITLE = 'Groups';

export const HEADER_ACTIONS: { id: string; icon: Icon; label: string }[] = [
  { id: 'notifications', icon: 'notifications-outline', label: 'Notifications' },
  { id: 'settings', icon: 'settings-outline', label: 'Settings' },
  { id: 'profile', icon: 'person-circle-outline', label: 'Profile' },
];

export const STATS = [
  { label: 'Total Riddles solved', value: 0 },
  { label: 'Day Streak', value: 0 },
] as const;

export const GROUPS = [
  {
    id: 'create-group',
    title: 'Create Group',
    subtitle: 'Start a riddle circle with friends',
  },
  {
    id: 'join-group',
    title: 'Join Group',
    subtitle: 'Enter a code to join the fun',
  },
] as const;
