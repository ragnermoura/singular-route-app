import React from "react";
import { View } from "react-native";
import MapaConfig from "./mapaConfig";
import ButtonNext from "../buttons/ButtonPrimary";
import { TextButton, ViewAreButton, ViewAreaImage } from "./styles";

const MapaPortugal = () => {
  return (
    <View style={{ flex: 1 }}>
      <ViewAreaImage>
        <MapaConfig />
      </ViewAreaImage>
      <ViewAreButton>
        <ButtonNext title={"Next"} colorText={"#FFF"} />
      </ViewAreButton>
    </View>
  );
};

export default MapaPortugal;
