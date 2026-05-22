import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components/Text';
import { ActionCard } from '@/features/home/ActionCard';
import { GROUPS, GROUPS_TITLE, STATS } from '@/features/home/config';
import { HomeHeader } from '@/features/home/HomeHeader';
import { StatCard } from '@/features/home/StatCard';
import { spacing } from '@/theme';
import { useTheme } from '@/theme/useTheme';

export function HomeScreen() {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />

        <View style={styles.stats}>
          {STATS.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </View>

        <View style={styles.section}>
          <Text variant="title" style={styles.sectionTitle}>
            {GROUPS_TITLE}
          </Text>
          <View style={styles.groups}>
            {GROUPS.map((group) => (
              <ActionCard
                key={group.id}
                title={group.title}
                subtitle={group.subtitle}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.huge,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xxl,
  },
  section: {
    marginTop: spacing.xxl,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  groups: {
    flexDirection: 'row',
    gap: spacing.md,
  },
});
