import React from "react";
import { View } from "react-native";
import { Container } from "./styles";
import Header from "../../components/header/maps/index";
import MapaPortugal from '../../components/map/index'

export default () => {
  return (
    <Container>
      <Header />
      <View style={{ flex: 1 }}>
        <MapaPortugal />
      </View>
    </Container>
  );
};
