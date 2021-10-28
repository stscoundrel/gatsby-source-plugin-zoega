import { sourceNodes } from '../src/gatsby-node';

const createNodeId = jest.fn((slug) => `unique-${slug}`);
const createContentDigest = jest.fn((entry) => `content-digest-for-${entry.slug}`);
const createNodeMock = jest.fn();
const actions = {
  createNode: createNodeMock,
};

describe('Gatsby Node hook tests', () => {
  test('Hook calls createNode for all dictionary entries (29 951 times)', () => {
    sourceNodes({ actions, createNodeId, createContentDigest }, { noMarkup: false });

    // Main create action.
    expect(createNodeMock.mock.calls.length).toBe(29951);

    // Related digest & ID methods that should receive same amount of calls.
    expect(createNodeId.mock.calls.length).toBe(29951);
    expect(createContentDigest.mock.calls.length).toBe(29951);
  });
});
