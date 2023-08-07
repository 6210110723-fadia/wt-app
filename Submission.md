# Lab 3SA04 - ReactNative

# สร้างไฟล์ออกมา 6 ไฟล์ เพื่อแยกจังหวัดตามภาคต่างๆ
  * `Northern.js`
  * `Northeastern.js`
  * `Central.js`
  * `Eastern.js`
  * `Western.js`
  * `Southern.js`
  - สร้างเพื่อแบ่งจังหวัดทั้ง 77 จังหวัดออกเป็น 6 ภาคโดยแต่ละภาคนั้น ใช้ code เหมือนกับ ZipCodeScreen.js ตามที่อาจารย์สอนมา

# App.js
* จะ import ตัว file จาก ข้อ 1 เข้ามาใน `App.js` ดังนี้
  ```js
  import Northern from './screen/Northern';
  import Northeastern from './screen/Northeastern';
  import Central from './screen/Central';
  import Eastern from './screen/Eastern'
  import Western from './screen/Western'
  import Southern from './screen/Southern'
  ```
* `Dimensions` : เป็นการกำหนดความกว้างของหน้าจอตามที่เราต้องการ 
  * โดย ` Dimensions` นี้มีการ import เข้าด้วยดังนี้
    ```js
    import { Dimensions } from 'react-native';
    ```
  * และเพิ่ม ตัวแปร `fullScreenWidth` เข้าไปเพื่อกำหนดความกว้างของหน้าจอให้เป็นแบบ fullscreen 
    ```js
    const fullScreenWidth = Dimensions.get('window').width;
    ````
  * `Stack` คือ Tab ด้านบนของจอ ซึ่งจะมีการกำหนดให้ใีการ import ตัวด้านล่างนี้ที่แสดง มาก่อน ก่อนที่จะไปสร้างได้
    ```js
    import { createStackNavigator } from '@react-navigation/stack'
    ```

    - สร้างตัวแปร `Stack` 
      ```js
      const Stack = createStackNavigator()
      ```
    - สร้างฟังชันมา 6 ฟังชัน เพราะว่าเราจะสร้าง BottomTab 6 tabs ในขั้นตอนต่อไป 
      1. โดยสร้างชื่อฟังชันของ Stack ว่า `(..ภาค..)StackScreen` 
      2. ภายใน function จะมีการเขียน code ดังนี้(เพิ่ม 6 function)
        ```js
        function NorthernStackScreen( ) {
          return (
            <Stack.Navigator>
              <Stack.Screen name="Northern" component={Northern} />
              <!-- บรรทัดนี้จะเป็นการกำหนดว่าแต่ละหน้านั้นต้องการที่จะโยงไปใน componant ไหน -->
              <Stack.Screen name="Weather" component={WeatherScreen} />
              <!-- บรรทันนี้จะเป็นการที่เรากดเนื้อหาในบรรก่อนหน้านั้น แล้วโยงเข้ามาในหน้านี้ -->
            </Stack.Navigator>
          );
        }
        ```
      ```
    * เราจะสร้าง bottom tab ไว่ใน function ของ App ดังนี้
      * สร้างชื่อไอคอน แล้วชื่อไอคอน ของbottom tab นั้นต้องการให้โยงไปที่ส่วนไหน ซึ่งที่นี้เราจะโยงไปที่ function ของ Stack 
        ```js
        return (
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Northern" component={NorthernStackScreen} />
              <Tab.Screen name="Northeastern" component={NortheasternStackScreen} />
              <Tab.Screen name="Central" component={CentralStackScreen} />
              <Tab.Screen name="Eastern" component={EasternStackScreen} />
              <Tab.Screen name="Western" component={WesternStackScreen} />
              <Tab.Screen name="Southern" component={SouthernStackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        );
        ```
# Forecast.js
* ในส่วนนี้จะเพิ่ม ให้รายละเอียดต่างๆ ระเอียดขึ้นกว่าเดิมโดยกำกับว่าข้อความนี้ที่ได้มานั้น คืออะไร
  ```js
  import React  from "react";
  import { Text, View } from "react-native";

  export default function Forecast(props) {
    return (
      <View style={{alignItems: "center"}}>
        <Text style={{ fontSize: 20 }}>Province : {props.name}</Text>
        <Text style={{ fontSize: 20 }}>Weather : {props.main}</Text>
        <Text style={{ fontSize: 20 }}>Description : {props.description}</Text>
        <Text style={{ fontSize: 20 }}>temp : {props.temp} °C</Text>
      </View>
    );
  }
  ```



# ชื่อ - สกุล

> นางสาวฟาเดีย หวังหลิ่ม

> รหัศนักศึกษา 6210110723

> Section : 01

          
      