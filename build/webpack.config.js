module.exports = {
  vendorName: 'vendor/vendor',
  devPort: 8082,
  appEntries: './modules/**/index.js',
  entry:["babel-polyfill","./modules/**/index.js"],
  htmlWebpackOptions: {
    hash: 6,
    minify: false
  }
};
