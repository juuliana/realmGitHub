import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '~/components/Repository';

import { Container, Title, Form, Input, Submit, List } from './styles';

function Main() {
  return(
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF"/>
        </Submit>
      </Form>

      <List
        keyboardShuldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: "unform",
            description: "React Native",
            stars: 1234,
            forks: 122
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={ item }/>
        )}
      />
    </Container>
  );
}

export default Main;