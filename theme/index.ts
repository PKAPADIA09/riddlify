import { Platform, TextStyle, ViewStyle } from 'react-native';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 9999,
} as const;

export const fontSize = {
  xs: 11,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 24,
  display: 32,
} as const;

export const fontWeight = {
  medium: '500' as TextStyle['fontWeight'],
  semibold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
  extrabold: '800' as TextStyle['fontWeight'],
};

export type ThemeColors = {
  background: string;
  surface: string;
  borderSubtle: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  shadow: string;
  overlay: string;
};

const light: ThemeColors = {
  background: '#F4F6FB',
  surface: '#FFFFFF',
  borderSubtle: '#E8ECF4',
  text: '#12141C',
  textSecondary: '#4B5563',
  textMuted: '#9CA3AF',
  shadow: 'rgba(17, 24, 39, 0.08)',
  overlay: 'rgba(17, 24, 39, 0.04)',
};

const dark: ThemeColors = {
  background: '#0C0E14',
  surface: '#171B26',
  borderSubtle: '#222836',
  text: '#F3F4F8',
  textSecondary: '#A1A8B8',
  textMuted: '#6B7289',
  shadow: 'rgba(0, 0, 0, 0.35)',
  overlay: 'rgba(255, 255, 255, 0.04)',
};

export const colors = { light, dark };

export function cardShadow(level: 'sm' | 'md', shadowColor: string): ViewStyle {
  const sizes = {
    sm: { offset: 2, radius: 6, opacity: 0.06, elevation: 2 },
    md: { offset: 4, radius: 12, opacity: 0.1, elevation: 4 },
  };
  const s = sizes[level];

  return {
    shadowColor,
    shadowOffset: { width: 0, height: s.offset },
    shadowOpacity: Platform.OS === 'ios' ? s.opacity : s.opacity * 1.5,
    shadowRadius: s.radius,
    elevation: s.elevation,
  };
}
