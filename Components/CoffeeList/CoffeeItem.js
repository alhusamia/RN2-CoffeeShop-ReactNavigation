import React from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CoffeeItem = ({ coffeeshop,navigation }) => (
  <ImageBackground source={coffeeshop.background} style={styles.background}>
    <View style={styles.overlay} />
    <ListItem button onPress={() =>navigation.navigate("CoffeeDetail",{coffeeshop})} style={styles.listitem}>
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Left>
            <Thumbnail
              bordered
              source={coffeeshop.img}
              style={styles.thumbnail}
            />
            <Text style={styles.text}>{coffeeshop.name}</Text>
            <Text note style={styles.text}>
              {coffeeshop.distance}
            </Text>
          </Left>
        </CardItem>
      </Card>
    </ListItem>
  </ImageBackground>
);

export default CoffeeItem;
