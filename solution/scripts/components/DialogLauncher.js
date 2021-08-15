function DialogLauncher({}) {
  const [opened, setOpen] = React.useState(true);
  const [allExpanded, setAllExpanded] = React.useState(false);
  return (
    <span>
      <button onClick={(e) => setOpen(true)}>Show DOM Tree</button>
      <input
        id="allExpanded"
        type="checkbox"
        value={allExpanded}
        onChange={(e) => setAllExpanded(!allExpanded)}
      ></input>
      <label htmlFor="allExpanded">Open with all nodes expanded</label>

      <OpenAllExpandedContext.Provider value={allExpanded}>
        {opened ? (
          <Dialog opened={opened} onFinish={() => setOpen(false)} />
        ) : null}
      </OpenAllExpandedContext.Provider>
    </span>
  );
}
