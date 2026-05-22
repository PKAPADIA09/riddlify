import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/Text';
import { useTheme } from '@/theme/useTheme';
import { cardShadow, radii, spacing } from '@/theme';

interface Props {
  label: string;
  value: number;
}

export function StatCard({ label, value }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.borderSubtle },
        cardShadow('sm', colors.shadow),
      ]}
    >
      <Text variant="heading" style={styles.value}>
        {value}
      </Text>
      <Text variant="caption" tone="secondary" numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: radii.lg,
    borderWidth: 1,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    minHeight: 88,
    justifyContent: 'center',
  },
  value: {
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 2,
  },
});
