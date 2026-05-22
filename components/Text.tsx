import { Text as RNText, type TextProps, type TextStyle } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { fontSize, fontWeight } from '@/theme';

type Variant = 'caption' | 'body' | 'bodyMedium' | 'subtitle' | 'title' | 'heading' | 'display';
type Tone = 'primary' | 'secondary' | 'muted';

interface Props extends TextProps {
  variant?: Variant;
  tone?: Tone;
}

const variants: Record<Variant, TextStyle> = {
  caption: { fontSize: fontSize.xs, lineHeight: 16 },
  body: { fontSize: fontSize.md, lineHeight: 22 },
  bodyMedium: { fontSize: fontSize.md, lineHeight: 22, fontWeight: fontWeight.medium },
  subtitle: { fontSize: fontSize.lg, lineHeight: 24, fontWeight: fontWeight.semibold },
  title: { fontSize: fontSize.xl, lineHeight: 28, fontWeight: fontWeight.bold },
  heading: { fontSize: fontSize.xxl, lineHeight: 32, fontWeight: fontWeight.bold },
  display: { fontSize: fontSize.display, lineHeight: 38, fontWeight: fontWeight.extrabold },
};

export function Text({ variant = 'body', tone = 'primary', style, ...props }: Props) {
  const { colors } = useTheme();
  const toneColor = { primary: colors.text, secondary: colors.textSecondary, muted: colors.textMuted };

  return <RNText style={[variants[variant], { color: toneColor[tone] }, style]} {...props} />;
}
