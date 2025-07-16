import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
        }}
      />
      <Tabs.Screen
        name="archive"
        options={{
          title: "보관",
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "통계",
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "설정",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
