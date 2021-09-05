This was coded in a few hours by myself and [@Risafj](https://github.com/risafj). We used Visual Studio Code Liveshare to get it done. Even though all of the commits are in my name because we shared my command line, she did most of the work.

This project was made because Figma will often output files that are off by a single pixel when batch importing.
They also all need to have their alpha channels removed manually. This was a huge waste of time.

# How to use

Put your iOS 5.5-inch screenshots in the inputs/ios5 folder. Repeat for iOS6 and iPad.

Install imagemagick on your system (mac: `brew install imagemagick`).

Install dependencies (`yarn`).

Run program with `yarn start`.

Observe as they are all magically made compliant with app store standards.

Bonus: Android will accept the iOS6 screenshots for phones, and iPad for tablets.
