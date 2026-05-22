import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { radii } from '@/theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface Props {
  icon: IconName;
  label: string;
  onPress?: () => void;
}

export function IconButton({ icon, label, onPress }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.wrap, { backgroundColor: colors.overlay }]}>
        <Ionicons name={icon} size={22} color={colors.text} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
  wrap: {
    width: 40,
    height: 40,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
