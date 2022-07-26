# react microbundle test

Repo for reproducing these React build errors:

 - `Uncaught TypeError: React__default.default is undefined` (uncompressed builds)
 - `Uncaught TypeError: r.default is undefined` (compressed builds)
 
## Usage

 1. Clone repo
 2. Run `npm install` 
 3. Run `npm run dev`
 4. Open `index.html` in your browser
 5. Check dev console for errors
 
If you open `src/index.js` and comment out the top two `import` statements, then the errors are gone.
