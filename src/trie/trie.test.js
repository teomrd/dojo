const { Trie } = require("./trie");

describe("trie data structure", () => {
  describe("insertion of a word", () => {
    it("insert a new word into trie", () => {
      const t = Trie();
      t.insert("was");
      t.insert("was");
      t.insert("where");
    });
  });

  describe("search with prefix", () => {
    it("should return all the words matching the given prefix", () => {
      const t = Trie();
      t.insert("watch");
      t.insert("watcher");
      t.insert("watching");
      t.insert("watching");
      t.insert("where");
      t.insert("where");
      t.insert("was");

      expect(t.search("wa")).toEqual({
        watching: 2,
        watcher: 1,
        watch: 1,
        was: 1,
      });
    });
  });
});
