import { getEntries } from '../../src/services/dictionary';

describe('Dictionary tests', () => {
  const entries = getEntries();
  const noMarkupEntries = getEntries(true);

  describe('Default with markup', () => {
    test('Dictionary contains correct amount of entries (29 951)', () => {
      expect(entries.length).toBe(29951);
    });

    test('Dictionary has added startsWith properties to source', () => {
      entries.forEach((entry) => {
        expect(Object.keys(entry)).toContain('startsWith');
      });
    });

    test('Dictionary has added url slugs to source', () => {
      entries.forEach((entry) => {
        expect(Object.keys(entry)).toContain('slug');
      });
    });

    test('Dictionary slugs are unique', () => {
      const slugs = new Set();

      entries.forEach((entry) => {
        slugs.add(entry.slug);
      });

      expect(slugs.size).toEqual(entries.length);
    });

    test('Dictionary slugs do not start with dashes', () => {
      entries.forEach((entry) => {
        expect(entry.slug.charAt(0)).not.toEqual('-');
      });
    });

    test('Dictionary contains expected content', () => {
      expect(entries[25000].word).toBe('undanhald');
      expect(entries[25000].slug).toBe('undanhald');
      expect(entries[25000].definitions[0]).toBe('n. <i>flight</i>.');
      expect(entries[25000].startsWith).toBe('U');
    });
  });

  describe('With noMarkup setting.', () => {
    test('Dictionary contains correct amount of entries (29 951)', () => {
      expect(noMarkupEntries.length).toBe(29951);
    });

    test('Dictionary has added startsWith properties to source', () => {
      noMarkupEntries.forEach((entry) => {
        expect(Object.keys(entry)).toContain('startsWith');
      });
    });

    test('Dictionary has added url slugs to source', () => {
      noMarkupEntries.forEach((entry) => {
        expect(Object.keys(entry)).toContain('slug');
      });
    });

    test('Dictionary slugs are unique', () => {
      const slugs = new Set();

      noMarkupEntries.forEach((entry) => {
        slugs.add(entry.slug);
      });

      expect(slugs.size).toEqual(noMarkupEntries.length);
    });

    test('Dictionary slugs do not start with dashes', () => {
      noMarkupEntries.forEach((entry) => {
        expect(entry.slug.charAt(0)).not.toEqual('-');
      });
    });

    test('Dictionary contains expected content', () => {
      expect(noMarkupEntries[25000].word).toBe('undanhald');
      expect(noMarkupEntries[25000].slug).toBe('undanhald');
      expect(noMarkupEntries[25000].definitions[0]).toBe('n. flight.');
      expect(noMarkupEntries[25000].startsWith).toBe('U');
    });
  });
});
