import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Props = {
  children: any;
  onPress: Function;
};

export default function Button(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.button}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    marginVertical: 5,
  },
});
