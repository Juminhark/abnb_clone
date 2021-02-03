# airbnb_clone

- [[adim_Savin - Build the Airbnb app in React Native_Tutorial for beginners](https://www.youtube.com/watch?v=ZxkmTsEYfg8)
- [Vadim_Savin - Build the Airbnb app in React Native [Advance UI]](https://www.youtube.com/watch?v=2zy2qX1eR6E)
- [Vadim_Savin - Build the Airbnb app in React Native & AWS Amplify](https://www.youtube.com/watch?v=ch2oOdnLkqw)
- [Catalin Miron - Beautiful React Native gallery view - Synced FlatLists - Animated API - Pexels API](https://www.youtube.com/watch?v=gjC2oUJhePE)

### GoogleAPIs : Places API

- get API KEY

### init

```sh
> npx react-native init Airbnb
```

### [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```sh
> yarn add react-native-vector-icons
```

- android

```ts
// android/app/build.gradle
...
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### Navigation

- React Navigation v5
- Stack Navigation
- Tab Navigation

```sh
> yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/material-top-tabs
```

### install other dependencies

```sh
> yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### Finish Navigation

```sh
> yarn add @react-navigation/material-top-tabs react-native-tab-view
```

### Places Autocomplete

- [install react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)

```sh
> yarn add react-native-google-places-autocomplete
```

- enable google api
- make sure billing is enabled
- get api key

### Maps

- [install react-native-maps](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md)

```sh
> yarn add react-native-maps -E
```

- "react-native": "0.63.4", Build configuration on Android

```sh
//! android/build.gradle
...
buildscript {
    ext {
        ...
        playServicesVersion = "17.0.0" // or find latest version
        androidMapsUtilsVersion = "2.2.0"
    }
}
...


//! android/app/src/main/AndroidManifest.xml
<application>
  ...

  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="Your Google maps API Key Here"/>

  <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

### Carousel Flatlist

- Render the Flatlist
- Snap Effect(Carousel)
- Sync with the Map

### gallery view

- animated API
- Pexels API

- **scroll index - scrollToOffset**

### [AWS Amplify && react-native](https://docs.amplify.aws/start/q/integration/react-native)

- [install and configure the Amplify CLI](https://www.youtube.com/watch?v=fWbM5DLh25U&feature=emb_title)

```sh
> npm install -g @aws-amplify/cli

> amplify configure
// region
// user name
// accessKeyId
// secretAccessKey
// Profile Name

> amplify init

> yarn add aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo
```

### Authentication

```sh
> amplify add auth

> amplify push
```

### GraphQL API

```sh
> amplify add api

> amplify push
```

- 이거 미쳤네
- api / airbnb / build / schema.graphql
- 위 루트에 명시된 모델에 따라 mutation / queries / subscriptions 자동 작성

### error

- 1. zIndex 미적용 문제 : android에서는 elevation로 대체

```ts
elevatedElement: {
  zIndex: 3, // works on ios
  elevation: 3, // works on android
}
```

- 2. Navigation 적용 단계에서 elevation으로는 button의 onPress가 실행되지 않는 문제

```ts
searchButton: {
  ...
  zIndex: 100,
},
```

- 3. current page index

```ts
// error : page skip
Math.floor(ev.nativeEvent.contentOffset.x) / width)

// use this
Math.floor((ev.nativeEvent.contentOffset.x + 10) / width)
```
