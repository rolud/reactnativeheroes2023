import * as React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import talks from '../../data/talks.json';
import TalkItem from './TalkItem';

const ScheduleScreen = (): JSX.Element => {
  const renderItem: ListRenderItem<Talk> = React.useCallback(({ item }) => {
    return <TalkItem talk={item} />;
  }, []);

  const renderItemSeparator = React.useCallback(
    () => <View style={styles.itemSeparator} />,
    [],
  );

  return (
    <View style={styles.layout}>
      <FlatList
        data={talks}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingHorizontal: 24,
  },
  listContent: {
    paddingVertical: 24,
  },
  itemSeparator: {
    height: 12,
  },
});

export default ScheduleScreen;
