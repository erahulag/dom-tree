let TheWorstCounter=0;

function cList(obj) {
  let ret = "";
  for (let k in obj) {
    if (k && obj[k]) ret += " " + k;
  }
  return ret;
}

function hasChildren() {
  return true;
}

function isValidNodeType(n) {
  return n.nodeType === FILE || n.nodeType === FOLDER;
}

function isNonEmptyTextNode(n) {
  return n.nodeType === FILE && !/^\s+$/.test(n.textContent);
}

function getDocumentTree(e) { 

  let ret = {
    type: e.nodeType,
    content: e.nodeType === FOLDER ? e.tagName : e.textContent,
    contentLower: e.textContent.toLowerCase(),
    locked: e.tagName === LOCKED_NODE_TYPE,
    id: TheWorstCounter++,
    children: [],
  };

  for (let n of e.childNodes) {
    if (!isValidNodeType(n)) continue;
    if (n.nodeType === FILE && /^\s+$/.test(n.textContent)) continue;

    ret.children.push(getDocumentTree(n));
  }
  return ret;
}

function filterTreeNodesWithText(searchText, tree){
     const srch=searchText.toLowerCase();
     if( tree.contentLower.includes(srch)){
         return {
             ...tree, 
             children: tree.children
                        .filter(c=>c.contentLower.includes(srch))
                        .map(c=> filterTreeNodesWithText(searchText, c))
                        .filter(c=> c)
        }
     }
     return null;
} 
