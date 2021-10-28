/**
 * Zoega dictionary does not have typescript definitions.
 * However, it shares 100% of interfaces with Cleasby & Vigfusson dictionary.
 * This interface is picked from there:
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/cleasby-vigfusson-dictionary/index.d.ts
 */
export interface DictionaryEntry {
    word: string;
    definitions: string[];
}

/**
 * Extended "gatsby" version of DictionaryEntry.
 * Added data that is commonly needed for frontend routing & queries.
 */
export interface GatsbyDictionaryEntry extends DictionaryEntry {
  slug: string;
  startsWith: string;
}

/**
 * Nodified version of entry with internal Gatsby fields.
 */
export interface DictionaryEntryNode extends GatsbyDictionaryEntry {
  id: string,
  parent: string | null,
  children: string[],
  internal: {
    type: string,
    contentDigest: string,
  }

}

export interface PluginOptions {
  noMarkup: boolean,
}
