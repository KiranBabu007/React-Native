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
        animationType="fade"
        onRequestClose={() =>
          isVisible ? setIsVisible(false) : setIsVisible(true)
        }
      >
        <View
          style={{ flex: 1, backgroundColor: "cornflowerblue", padding: 60 }}
        >
          <Button
            title="Back"
            onPress={() =>
              isVisible ? setIsVisible(false) : setIsVisible(true)
            }
            color="palevioletred"
          />
        </View>
      </Modal>
    </View>
  );
}
