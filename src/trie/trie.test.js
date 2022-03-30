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

    it("should return all the words matching the given prefix", () => {
      const t = Trie();
      t.insert("awe");
      t.insert("words");
      t.insert("watch");
      t.insert("watcher");
      t.insert("awake");
      t.insert("watching");
      t.insert("watching");
      t.insert("watching");
      t.insert("words");
      t.insert("where");
      t.insert("where");
      t.insert("was");

      expect(t.search("w")).toEqual({
        watching: 3,
        watcher: 1,
        watch: 1,
        where: 2,
        was: 1,
        words: 2,
      });

      expect(t.search("a")).toEqual({
        awake: 1,
        awe: 1,
      });
    });
  });
});
