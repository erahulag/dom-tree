function ParentNode({ element, height = 0, selectedId, onSelect }) {
  const { id, locked, content, type, children } = element;

  const [isExpanded, setExpanded] = React.useState(false);
  const allExpanded = React.useContext(OpenAllExpandedContext);
  const inSearchMode = React.useContext(SearchingContext);

  React.useEffect(() => {
    if (height < 1 || allExpanded) setExpanded(true && !locked);
  }, []);
  const toggleExpand = (e) => setExpanded(element.locked ? false : !isExpanded);
  return (
    <div className="parent-node container">
      <Node
        locked={locked}
        content={content}
        type={type}
        id={id}
        hasChild={children.length}
        toggleExpand={toggleExpand}
        expanded={isExpanded || inSearchMode}
        canCollapse={!inSearchMode}
        height={height}
        selectedId={selectedId}
        onSelect={onSelect}
      />
      {children.length ? (
        <div
          className={cList({
            children: true,
            expanded: isExpanded || inSearchMode,
          })}
        >
          {element.children.map((c) => {
            return c.type === 1 ? (
              <ParentNode
                key={c.id}
                element={c}
                height={height + 1}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            ) : (
              <Node
                key={c.id}
                id={c.id}
                content={c.content}
                height={height + 1}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
