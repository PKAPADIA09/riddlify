import { Pressable, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Text';
import { useTheme } from '@/theme/useTheme';
import { cardShadow, radii, spacing } from '@/theme';

interface Props {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export function ActionCard({ title, subtitle, onPress }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.wrap, pressed && styles.pressed]}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderColor: colors.borderSubtle },
          cardShadow('md', colors.shadow),
        ]}
      >
        <Text variant="subtitle" style={styles.title}>
          {title}
        </Text>
        <Text variant="caption" tone="secondary" numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  pressed: { opacity: 0.92, transform: [{ scale: 0.98 }] },
  card: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: spacing.lg,
    minHeight: 120,
  },
  title: { marginBottom: spacing.xs },
});
