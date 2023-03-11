<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/222962375-0e8b71a2-4d96-461e-92a7-972a05274098.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/224020666-4930b0a1-582a-492f-a265-4cc37ec0977c.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/222961692-def1dcef-9c4e-4721-823c-b5c7f75c7e68.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/222961696-d39a8cee-a3a5-439d-8349-808169c07f08.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/224503860-4f58dcc7-9842-42e8-a7ce-23df1112227d.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/222961699-ed885627-1e3f-4a87-922d-b380a181dcfe.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/222961708-a09d4019-eb12-41be-ad14-9181f32e48d7.jpg"></img>
<img height="100%" width="300" src="https://user-images.githubusercontent.com/55020862/222961709-01208d11-09cd-444f-ab22-a4d45d3960a3.jpg"></img>


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
