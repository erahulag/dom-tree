function DialogLauncher({}) {
  const [opened, setOpen] = React.useState(true);
  const [allExpanded, setAllExpanded] = React.useState(false);
  React.useEffect(()=> onOpen(), []);

  const onOpen = (e) => {
    document.body.style.position = "fixed";
    setOpen(true);
  };

  const onClose = (e) => {
    document.body.style.position = "relative";
    setOpen(false);
  };
  return (
    <span>
      <button onClick={onOpen}>Show DOM Tree</button>
      <input
        id="allExpanded"
        type="checkbox"
        value={allExpanded}
        onChange={(e) => setAllExpanded(!allExpanded)}
      ></input>
      <label htmlFor="allExpanded">Open with all nodes expanded</label>

      <OpenAllExpandedContext.Provider value={allExpanded}>
        {opened ? (
          <Dialog opened={opened} onFinish={onClose}>
            <DomTree />
          </Dialog>
        ) : null}
      </OpenAllExpandedContext.Provider>
    </span>
  );
}
