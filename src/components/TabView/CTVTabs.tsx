import React, { useEffect, useRef, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import CTVIndicator from "./CTVIndicator";
import CTVTab from "./CTVTab";

const CTVTabs = (props) => {
  const { routes, scrollX, onTabPress } = props;
  const containerRef = useRef();
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    const tempMeasures = [];
    routes.forEach((item) => {
      item.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
        tempMeasures.push({ x, y, width, height });
        if (tempMeasures.length == routes.length) {
          setMeasures(tempMeasures);
        }
      });
    });
  }, []);

  return (
    <View>
      <View
        ref={containerRef}
        // style={{
        //   flexDirection: "row",
        //   justifyContent: "flex-start",
        // }}
      >
        {/* {routes?.map((item, index) => (
          <Pressable key={index} onPress={() => onTabPress(index)}>
            <DenemeTab ref={item.ref} item={item} />
          </Pressable>
        ))} */}
        <FlatList
          data={routes}
          keyExtractor={(item) => item?.key}
          horizontal={true}
          scrollEnabled={true}
          contentContainerStyle={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          renderItem={({ item, index }) => (
            <Pressable key={index} onPress={() => onTabPress(index)}>
              <CTVTab ref={item.ref} item={item} />
            </Pressable>
          )}
        />
      </View>
      {measures?.length > 0 && <CTVIndicator measures={measures} scrollX={scrollX} />}
    </View>
  );
};

export default CTVTabs;
