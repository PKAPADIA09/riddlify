import { useColorScheme } from '@/components/useColorScheme';
import { colors, type ThemeColors } from '@/theme';

export function useTheme(): { colors: ThemeColors; isDark: boolean } {
  const isDark = useColorScheme() === 'dark';
  return { colors: colors[isDark ? 'dark' : 'light'], isDark };
}
