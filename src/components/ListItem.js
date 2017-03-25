/* @flow */

import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-vertical: 5;
`;

const Image = styled.Image`
  height: 24;
  width: 24;
`;

const Text = styled.Text`
  font-size: 16;
  margin-left: 10;
`;

type Props = {
  imageUrl: string,
  songName: string,
}

export default function ListItem(props: Props) {
  const { imageUrl, songName } = props;
  return (
    <Container>
      <Image source={{ uri: imageUrl }} />
      <Text>{songName}</Text>
    </Container>
  );
}
