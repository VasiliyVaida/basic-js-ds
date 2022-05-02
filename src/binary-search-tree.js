const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (Node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchData(this.rootNode, data);

    function searchData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootNode, data);
    function findData(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return findData(node.left, data);
      } else if (data > node.data) {
        return findData(node.right, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.root = deleteNode(this.rootNode, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.right) {
          node = node.right;
          return node;
        }

        let rightMin = node.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }

        node.data = rightMin.data;

        node.right = deleteNode(node.right, rightMin.data);

        return node;
      }
    }
  }

  min(data) {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max(data) {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
