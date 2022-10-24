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
        where: 2,
        words: 2,
        was: 1,
        watch: 1,
        watcher: 1,
      });

      expect(t.getMatchingWords("w")).toEqual([
        "watching",
        "where",
        "words",
        "was",
        "watch",
        "watcher",
      ]);

      expect(t.search("a")).toEqual({
        awake: 1,
        awe: 1,
      });

      expect(t.getMatchingWords("a")).toEqual(["awake", "awe"]);
    });
  });

  describe("Total number of Words", () => {
    const t = Trie();
    t.insert("was");
    t.insert("was");
    t.insert("where");

    it("should return the number of words it contains", () => {
      expect(t.getNumberOfWords()).toEqual(2);
    });

    it("should return the number of words", () => {
      t.insert("in");
      t.insert("in");
      t.insert("international");
      t.insert("intern");

      expect(t.getNumberOfWords()).toEqual(5);
    });
  });

  describe("Find all words stored in Trie", () => {
    const t = Trie();
    t.insert("was");
    t.insert("was");
    t.insert("where");

    it("should return the list of words it contains", () => {
      expect(t.getWords()).toEqual(["was", "where"]);
    });

    it("should return the updated list of words", () => {
      t.insert("in");
      t.insert("in");
      t.insert("international");
      t.insert("intern");

      expect(t.getWords()).toEqual([
        "was",
        "where",
        "in",
        "intern",
        "international",
      ]);
    });
  });
});
