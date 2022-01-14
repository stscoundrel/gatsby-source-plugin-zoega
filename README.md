# Gatsby Source Plugin Zoega

Gatsby Source plugin for Old Icelandic dictionary by Geir Zoëga. Exposes 29 000+ Old Icelandic words into Gatsby datalayer.

Based on the "A Concise Dictionary of Old Icelandic" by Geir Zoëga. Depends on [Node.js version](https://github.com/stscoundrel/old-icelandic-zoega) of the dictionary.

### Install

`yarn add gatsby-source-plugin-zoega`

##### Usage

The plugin adds new `dictionaryEntry` type into datalayer. Individual entries are in format of:

```javascript
{
    word: String
    definitions: [String]
    slug: String (=slugified, unique headword)
    startsWith: String (=one uppercase letter)
}
```


To use the plugin in your Gatsby project, just add it to plugins config:

```javascript
// gatsby-config.js
module.exports {
  // Your other configs.
  plugins: [
    "gatsby-source-plugin-zoega"
  ]
}
```

If you're using default settings, dictionary entries will contain HTML markup like `<strong>` and `<i>` tags. If you wish to get dictionary data without any markup, you can register the plugin with custom settings.

```javascript
// gatsby-config.js
module.exports {
  // Your other configs.
  plugins: [
    {
      resolve: "gatsby-source-plugin-zoega",
      options: {
        noMarkup: true,
      }
    }
  ]
}
```

### About "A Concise Dictionary of Old Icelandic"

"A Concise Dictionary of Old Icelandic" dictionary was published in 1910 by Geir Zoëga, which leads to there being many public domain versions of the book available. Zoëgas attempt was to made easier-to-approach version of the more full Cleasby - Vigfusson dictionary, specifically for beginners and those interested in Old Icelandic prose writing.
