import moment from 'moment';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  talk: Talk;
}

const TalkItem = ({ talk }: Props): JSX.Element => {
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.textTitle}>{talk.title}</Text>
        <Text style={styles.textAbstract} numberOfLines={3}>
          {talk.abstract}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.textTime}>
          {moment(talk.start).format('hh:mm A')}
        </Text>
        <Text style={styles.textDuration}>
          {moment(talk.end).diff(talk.start, 'minutes')} min
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    overflow: 'hidden',
  },
  textTime: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  textDuration: {
    fontSize: 12,
    color: '#E4E4E4',
  },
  timeContainer: {
    backgroundColor: '#9334FF',
    padding: 8,
  },
  contentContainer: {
    padding: 8,
  },
  textTitle: {
    fontWeight: '600',
    color: '#252525',
  },
  textAbstract: {
    color: '#A6A6A6',
    fontSize: 12,
  },
});
export default TalkItem;
