import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
    FadeInUp,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

export default function Personagen({ item }: { item: any }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.88))}
      onPressOut={() => (scale.value = withSpring(1))}
    >
      <Animated.View
        entering={FadeInUp.duration(500)}
        style={[s.wrap2, animatedStyle]}
      >
        <View style={s.wrap3}>
          <Text style={s.name}>{item.name}</Text>
        </View>

        <View style={s.imageConteiner}>
          <Image style={s.image} source={{ uri: item.image }} />
        </View>
      </Animated.View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  wrap2: {
    backgroundColor: "#cac5c59f",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    borderRadius: 50,
    borderWidth: 5,
    gap: 5,
    marginTop: 50,
  },
  wrap3: { padding: 5, borderRadius: 10, borderWidth: 2, color: "#000000" },
  name: {},
  imageConteiner: {
    height: 400,
    width: 177,
  },
  image: {
    height: 400,
    width: 177,
  },
});
