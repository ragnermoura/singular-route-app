import React from "react";
import styled from "styled-components/native";
import Portugal from "../../../assets/images/portugal.svg";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const MapaConfig = styled(Portugal)`
  width: 100px;
  height: 100px;
`;

export const ViewAreaImage = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;

`;

export const ViewAreButton = styled.View`
  padding: 30px;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const TextButton = styled.Text`
  font-size: 30px;
  color: #fff;
  z-index: 99;
`;


export const Click = styled.TouchableOpacity`
background-color: #878787 !important;
`;
