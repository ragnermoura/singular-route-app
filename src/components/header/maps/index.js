import React from "react";
import { Image } from "react-native";
import { Container, AreaView, TextSimple, TextSmall } from "./style";

const imagePath = require("../../../../assets/images/iconBack.png");

export default () => {
  return (
    <Container>
      <AreaView>
      <Image style={{width: 30, marginLeft: 20}} source={imagePath} />
      <TextSimple>Where do you want to go?</TextSimple>
      </AreaView>
     <TextSmall>Select a location on the map:</TextSmall>
      
    </Container>
  );
};
