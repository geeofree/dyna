import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import {
  format,
  startOfWeek,
  lastDayOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { Layout } from "../components";
import { getSpacing } from "../utils/style";
import { useMemo, useState } from "react";

const DAY_OF_WEEK_FORMAT = "eeeeee";
const START_DAY_INDEX = 1; // monday

export function Tasks() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const daysOfWeek = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(today, { weekStartsOn: START_DAY_INDEX }),
        end: lastDayOfWeek(today, { weekStartsOn: START_DAY_INDEX }),
      }).map((date) => ({
        date,
        nameOfDay: format(date, DAY_OF_WEEK_FORMAT),
        isToday:
          format(today, DAY_OF_WEEK_FORMAT) ===
          format(date, DAY_OF_WEEK_FORMAT),
        isCurrentDate:
          format(currentDate, DAY_OF_WEEK_FORMAT) ===
          format(date, DAY_OF_WEEK_FORMAT),
      })),
    [format(currentDate, DAY_OF_WEEK_FORMAT)]
  );

  return (
    <Layout title="Tasks">
      <View style={styles.container}>
        {daysOfWeek.map((day) => (
          <Pressable
            key={day.nameOfDay}
            style={[
              styles.day,
              {
                borderColor: day.isCurrentDate ? "blue" : "gray",
                backgroundColor: day.isToday ? "#e7e7e7" : "white",
              },
            ]}
            onPress={() => {
              setCurrentDate(day.date);
            }}
          >
            <Text style={{ color: day.isCurrentDate ? "blue" : "gray" }}>
              {day.nameOfDay}
            </Text>
          </Pressable>
        ))}
      </View>
    </Layout>
  );
}

const dayDimension = Dimensions.get("window").width / 7 - getSpacing(3);

const styles = StyleSheet.create({
  container: {
    marginVertical: getSpacing(4),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  day: {
    width: dayDimension,
    height: dayDimension,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
});
