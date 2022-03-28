const Node = () => {
  return {
    char: null,
    children: {},
    frequency: 0,
    hasChildren: function () {
      return Object.keys(this.children).length > 0;
    },
    isWord: function () {
      return this.frequency > 0;
    },
    contains: function (char) {
      return Object.keys(this.children).includes(char);
    },
    getWord: function (prefix, dictionary = {}) {
      if (this.isWord()) {
        dictionary = {
          ...dictionary,
          [prefix]: this.frequency,
        };
      }

      for (const char of Object.keys(this.children)) {
        const newNode = this.children[char];
        return newNode.getWord(`${prefix}${newNode.char}`, dictionary);
      }

      return dictionary;
    },
    getWords: function (prefix) {
      return Object.keys(this.children).reduce((acc, currentChar) => {
        const newNode = this.children[currentChar];
        const word = newNode.getWord(`${prefix}${newNode.char}`);

        return {
          ...acc,
          ...word,
        };
      }, {});
    },
    increaseFrequency: function () {
      this.frequency = this.frequency + 1;
    },
    insert: function (word) {
      const [firstChar, ...rest] = word;
      if (firstChar) {
        const isLast = rest.length === 0;
        if (this.contains(firstChar)) {
          const node = this.children[firstChar];
          node.char = firstChar;
          if (isLast) node.increaseFrequency();

          return node.insert(rest);
        } else {
          const node = this.insertNode(firstChar, isLast);
          return node.insert(rest);
        }
      }
    },
    insertNode: function (char, isLast = false) {
      const newNode = Node();
      if (isLast) newNode.increaseFrequency();
      newNode.char = char;
      this.children = {
        ...this.children,
        [char]: newNode,
      };
      return newNode;
    },
  };
};

const Trie = () => {
  const rootNode = Node();

  return {
    insert: function (word = "") {
      rootNode.insert(word);
      return rootNode;
    },
    search: function (prefix = "") {
      let node = rootNode;
      prefix.split("").forEach((character) => {
        node = node.children[character];
      });

      return node.getWords(prefix);
    },
  };
};

module.exports = {
  Trie,
};
