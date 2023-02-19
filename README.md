## Things to do

1. Make transfer to contact button open without tabbar
2. Add transfer to contact header and a chevron to close the screen

## Learnings

Feb 18, 2023

1. Had to import contacts, for that FlatList is much better than ScrollView as it renders lazily and does memory management
2. The memo function memorises the components and does not re-render them if their props do not change even if the parent changes.
3. Had to color code each group of contacts that started with the same letter, used a javascript object with each key as an alphabet, and a repeated color scheme.

Feb 19, 2023

1. Learnt about nested navigation
2. Learnt how to combine stack navigation with bottom tab navigation
3. Learnt how to have some screen with and without the bottom tab navigator
4. Implemented debouncing during contact search
