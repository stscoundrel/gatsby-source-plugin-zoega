import { GatsbyDictionaryEntry, DictionaryEntryNode } from '../models';

export function parseGatsbyNodes(
  dictionary: GatsbyDictionaryEntry[],
  createNodeId,
  createContentDigest,
): DictionaryEntryNode[] {
  const nodes: DictionaryEntryNode[] = [];

  dictionary.forEach((dictionaryEntry) => {
    const node: DictionaryEntryNode = {
      id: createNodeId(dictionaryEntry.slug),
      parent: null,
      children: [],
      internal: {
        type: 'DictionaryEntry',
        contentDigest: createContentDigest(dictionaryEntry),
      },
      ...dictionaryEntry,
    };

    nodes.push(node);
  });

  return nodes;
}

export default {
  parseGatsbyNodes,
};
