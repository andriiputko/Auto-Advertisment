import React from "react";
import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/selectors";
import AdItem from "../AdItem/AdItem";
import { nanoid } from "nanoid";
import { List, Section } from "./AdList.styled";

const AdList = () => {
  const adverts = useSelector(getAdverts);

  return (
    <Section>
        <List>
          {adverts.map((advert) => (
            <AdItem advert={advert} key={nanoid()} />
          ))}
        </List>

    </Section>
  );
};

export default AdList;