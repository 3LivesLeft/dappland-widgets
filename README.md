# Dappland Widgets

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Using the widget 
```
<a href="https://www.dappland.com/YOUR_DAPP_NAME" style="display:inline-block;position:relative">
  <div style="position:absolute;top:0;right:0;bottom:0;left:0;"></div>
  <iframe src="http://localhost:3000/?dappname=YOUR_DAPP_NAME" width="260" height="176" frameBorder="0" title="Dappland Widget"></iframe>
</a>
```

1. Copy and paste the snippet above
2. In `<a href="…">` change `YOUR_DAPP_NAME` to exactly the same as the name of your dapp as shown in your Dappland url.
3. Also change `YOUR_DAPP_NAME` in the `<iframe src="…">`
4. That's it!

## Example
briq on Dappland is `https://www.dappland.com/briq`, so would be 

```
<a href="https://www.dappland.com/briq" style="display:inline-block;position:relative">
  <div style="position:absolute;top:0;right:0;bottom:0;left:0;"></div>
  <iframe src="http://localhost:3000/?dappname=briq" width="260" height="176" frameBorder="0" title="Dappland Widget"></iframe>
</a>
```
