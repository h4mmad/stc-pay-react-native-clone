import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
  Button,
} from "react-native";
import { customColors } from "../customColors";

import VirtualCard from "../components/VirtualCard";
import QuickActionsIcon from "../components/QuickActionsIcon";
import {
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const CardScreen = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const styles = StyleSheet.create({
    elevation: {
      elevation: 5,
    },
  });

  return (
    <View className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-12">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          >
            <View
              style={{
                width: SCREEN_WIDTH,

                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <VirtualCard backgroundColor={customColors.stcGreen} />
            </View>
            <View
              style={{
                width: SCREEN_WIDTH,

                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <VirtualCard backgroundColor={customColors.stcLightBlue} />
            </View>
          </ScrollView>

          <View className="mx-6">
            <View
              className="bg-white rounded-md w-100 h-100 mt-10 flex-row"
              style={styles.elevation}
            >
              <View className="flex-1">
                <Text className="mx-4 my-2 text-gray-500">Available limit</Text>
                <Text className="mx-4 my-2 text-lg">0.00 SAR</Text>
              </View>

              <View>
                <Text className="mx-4 my-2 text-gray-500">Cashback earned</Text>
                <Text className="mx-4 my-2 text-green-500 text-lg">
                  0.00 SAR
                </Text>
              </View>
            </View>

            <View
              className="bg-white w-100 h-100 rounded-md mt-5 mb-2 pb-2"
              style={styles.elevation}
            >
              <Text className="font-bold text-lg px-4 py-4 border-b-2 border-gray-100">
                Quick actions for this account
              </Text>

              <View className="flex-row flex-wrap justify-center items-center ">
                <QuickActionsIcon
                  icon={<Feather name="lock" size={24} color="purple" />}
                  text="Lock card"
                />

                <QuickActionsIcon
                  icon={<Feather name="info" size={24} color="purple" />}
                  text="Card info"
                />

                <QuickActionsIcon
                  icon={<Feather name="dollar-sign" size={24} color="purple" />}
                  text="My spendings"
                />

                <QuickActionsIcon
                  icon={<Feather name="credit-card" size={24} color="purple" />}
                  text="Card benefits"
                />
                <QuickActionsIcon
                  icon={<Feather name="settings" size={24} color="purple" />}
                  text="Card setting"
                />
                <QuickActionsIcon
                  icon={<Feather name="repeat" size={24} color="purple" />}
                  text="Pending transaction"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CardScreen;
