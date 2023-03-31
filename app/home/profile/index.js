import { Link } from "expo-router";
import { View, Text } from "react-native";

const Profile = () => {
  return (
    <View>
        <Text>Profile Home Screen</Text>
        <Link href="/home/profile/developerInfo">Who developer ?</Link>
    </View>
  );
}

export default Profile;