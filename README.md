# airbnb_clone

- [[adim_Savin - Build the Airbnb app in React Native_Tutorial for beginners](https://www.youtube.com/watch?v=ZxkmTsEYfg8)
- [Vadim_Savin - Build the Airbnb app in React Native](https://www.youtube.com/watch?v=2zy2qX1eR6E)
- [Vadim_Savin - Build the Airbnb app in React Native & AWS Amplify](https://www.youtube.com/watch?v=ch2oOdnLkqw)

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```sh
> yarn add @react-native-community/masked-view @react-native-community/netinfo amazon-cognito-identity-js aws-amplify aws-amplify-react-native react-native-gesture-handler react-native-google-places-autocomplete react-native-maps react-native-reanimated react-native-safe-area-context react-native-screens react-native-tab-view
```

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

### Home Screen

### Post Component

### Post Component Props

### Navigation

- React Navigation v5
- Stack Navigation
- Tab Navigation

```sh
> yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/material-top-tabs
```

### error

- 1. zIndex 미적용 문제 : android에서는 elevation로 대체

```ts
elevatedElement: {
  zIndex: 3, // works on ios
  elevation: 3, // works on android
}
```
