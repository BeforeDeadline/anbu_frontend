import React from "react";
import { Text } from "react-native";

import RightArrowIcon from "../../atomic/atoms/Icons/RightArrowIcon";
import ChocolateStickIcon from "../../atomic/atoms/Icons/ChocolateStickIcon";
import MapleIcon from "../../atomic/atoms/Icons/MapleIcon";

import {
  Container,
  EventItemContainer,
  EventItemInnerContents,
  InnerText,
} from "./style";

const EventBox = () => {
  return (
    <Container>
      <EventItemContainer backgroundColor="#E7B97E">
        <EventItemInnerContents>
          <ChocolateStickIcon />
          <InnerText fontColor="#74361B">
            11월, 초코과자 챙기는 건 어때요?
          </InnerText>
          <RightArrowIcon />
        </EventItemInnerContents>
      </EventItemContainer>
      <EventItemContainer backgroundColor="#FFEEC1">
        <EventItemInnerContents>
          <MapleIcon />
          <InnerText fontColor="#AF6B13">추석맞이 안부를 전해보세요</InnerText>
          <RightArrowIcon />
        </EventItemInnerContents>
      </EventItemContainer>
    </Container>
  );
};

export default EventBox;
