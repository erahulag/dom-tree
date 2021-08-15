function Node({
  id,
  locked = false,
  hasChild = false,
  content,
  type = FILE,
  expanded,
  toggleExpand,
  height,
  selectedId = 0,
  onSelect,
  canCollapse = true,
}) {
  const handleToggle = (e) => {
    // e.stopPropagation();
    toggleExpand();
  };
  const handleSelection = (e) => {
    e.stopPropagation();
    onSelect(id);
  };
  const iconType = type === FILE ? "file" : locked ? "lock-folder" : "folder";
  return (
    <div
      className={cList({ node: true, leaf: true, selected: id === selectedId })}
      onClick={handleSelection}
      style={{
        paddingLeft: `calc(${height * 14}px + ${height * 0.75 + 1}rem)`,
      }}
    >
      <Icon
        hidden={type !== FOLDER || !hasChild}
        type={expanded ? "expand" : "collapse"}
        disable={!canCollapse || locked}
        iconClassName={cList({ selected: id === selectedId })}
        onClick={toggleExpand}/>
      <Icon type={iconType}/>
      <div
        title={content}
        className="content text-node"
        style={{ width: `auto` }}
      >
        {content}
      </div>
    </div>
  );
}
