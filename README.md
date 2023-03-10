# Things to do

- [x] Make transfer to contact button open without tabbar
- [x] Add transfer to contact header and a chevron to close the screen
- [x] Adjust the HomeSliderNav so that each group appears alone
- [x] complete the add money modal
- [x] fix quick actions account screen
- [ ] learn react-reanimated
- [ ] learn react-native-gesture-handler
- [x] rename BottomHomeView to Bottom Sheet
- [x] animate bottom sheet chevron
- [ ] Learn to interpolate using Reanimated
- [ ] Make menu grid responsive to device width
- [x] Make custom bottom sheet
- [ ] Make Spending analytics navigation

# Learnings

### Feb 18, 2023

- Had to import contacts, for that FlatList is much better than ScrollView as it renders lazily and does memory management
- The memo function memorises the components and does not re-render them if their props do not change even if the parent changes.
- Had to color code each group of contacts that started with the same letter, used a javascript object with each key as an alphabet, and a repeated color scheme.

### Feb 19, 2023

- Learnt about nested navigation
- Learnt how to combine stack navigation with bottom tab navigation
- Learnt how to have some screen with and without the bottom tab navigator
- Implemented debouncing during contact search

### Feb 23, 2023

- Learnt that the bottom view on the homepage slides up, it's a view component that takes gestures and is animated

### Feb 25. 2023

- Learnt about BottomSheet, and how using scroll view from React-Native-Gesture-Handler solves the problem of nested scrollView within the BottomSheet

### Feb 26, 2023

- Finally animates the bottom sheet arrow using RN Reanimated library that runs animations on the UI thread, (better than JS thread).
- Asynchronous is good but suffers when something synchronous occurs such as scrolling while fetching data and animations when you want that instant and snappy feel.

### Feb 28, 2023

- On Android the when using the Dimension's API of react native, using Dimensions.get('window') gives us the density independent width and height(excluding the soft navbar), Dimensions.get('screen') gives us the density independent width and height(including the soft navbar). To get the screen resolution or number of pixels, multiply the dp width and height by the scale factor.

The phone I'm using for development is the Samsung Galaxy A52s (1080 x 2400 pixels is the screen resolution),
this is what I got when used the Dimensions API:

```
 LOG  window dimensions on android are:  {"fontScale": 0.8999999761581421, "height": 774.0444444444445, "scale": 2.8125, "width": 384}
 LOG  screen dimensions on android are:  {"fontScale": 0.8999999761581421, "height": 853.3333333333334, "scale": 2.8125, "width": 384}
```

Notice the difference in height, also when you multiply the screen width and height by the scale factor, you get:

```
384 * 2.8125 = 1080
853.333 * 2.8125 = ~2400
```
