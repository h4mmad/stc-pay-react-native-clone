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
