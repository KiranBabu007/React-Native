import { View, Button, Modal } from "react-native";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
        color="midnightblue"
      />

      <Modal
        visible={isVisible}
        style={{ flex: 1, backgroundColor: "plum", padding: 60 }}
        animation="slide"
      >
        <Button
          title="Back"
          onPress={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
          color="palevioletred"
        />
      </Modal>
    </View>
  );
}
