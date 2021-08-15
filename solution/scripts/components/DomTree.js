function DomeTree() {
  const [filteredTree, setFilteredTree] = React.useState(null);
  const [tree, setTree] = React.useState(null);
  const [headTree, setHeadTree] = React.useState(null);
  const [selectedId, onSelect] = React.useState(0);
  const [searching, setSearching] = React.useState(false);
  React.useEffect(() => {
    const tree = getDocumentTree(document.body);
    const headTree = getDocumentTree(document.head);
    setFilteredTree(tree);
    setHeadTree(headTree);
    setTree(tree);
    onSelect(tree.id);
  }, []);

  const searchTree = (searchText) => {
    if (!searchText) {
      setFilteredTree(tree);
      setSearching(false);
    } else {
      let filteredTree = filterTreeNodesWithText(searchText, tree);
      onSelect(filteredTree ? filteredTree.id : null);
      setFilteredTree(filteredTree);
      setSearching(true);
    }
  };

  return (
    <React.Fragment>
      <SearchText onSearch={searchTree} />
      <div className="dom-trees">
        {headTree ? (
          <ParentNode
            element={headTree}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        ) : null}
        <SearchingContext.Provider value={searching}>
          {filteredTree ? (
            <ParentNode
              element={filteredTree}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ) : null}
        </SearchingContext.Provider>
      </div>
    </React.Fragment>
  );
}
