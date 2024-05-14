var slug = require("slug");
var print = console.log.bind(console, ">");

print(slug("i love unicode"));
// > i-love-unicode

print(slug("i love unicode", "_")); // If you prefer something else than `-` as separator
// > i_love_unicode


