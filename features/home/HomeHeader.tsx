import { StyleSheet, View } from 'react-native';

import { IconButton } from '@/components/IconButton';
import { Text } from '@/components/Text';
import { APP_NAME, GREETING, HEADER_ACTIONS } from '@/features/home/config';

interface Props {
  displayName?: string;
}

export function HomeHeader({ displayName }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.text}>
        <Text variant="display" style={styles.title}>
          {APP_NAME}
        </Text>
        {displayName ? (
          <Text variant="body" tone="secondary">
            Welcome back, {displayName}
          </Text>
        ) : null}
        <Text variant="bodyMedium" tone="muted" style={styles.greeting}>
          {GREETING}
        </Text>
      </View>

      <View style={styles.actions}>
        {HEADER_ACTIONS.map((action) => (
          <IconButton key={action.id} icon={action.icon} label={action.label} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  greeting: {
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 4,
  },
});
