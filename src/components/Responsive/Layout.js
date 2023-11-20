export function Section({ css, classes, children, id }) {
  const style = css ? css : null;
  return (
    <div
      style={style}
      className={"section " + (classes ? classes.class : "")}
      id={id}
    >
      {children}
    </div>
  );
}

export function Container({ css, classes, children }) {
  const style = css ? css : null;
  return (
    <div
      style={style}
      className={"container " + (classes ? classes.class : "")}
    >
      {children}
    </div>
  );
}

export function Row({ css, classes, children }) {
  const style = css ? css : null;
  return (
    <div style={style} className={"row " + (classes ? classes.class : "")}>
      {children}
    </div>
  );
}

export function Col({ css, classes, children }) {
  const style = css ? css : null;
  const col = classes
    ? [
        classes.xs ? "col-" + classes.xs + "-xs " : "",
        classes.s ? "col-" + classes.s + "-s " : "",
        classes.m ? "col-" + classes.m + "-m " : "",
        classes.l ? "col-" + classes.l + "-l " : "",
        classes.xl ? "col-" + classes.xl + "-xl " : "",
        classes.xxl ? "col-" + classes.xxl + "-xxl " : "",
      ]
    : null;
  const all_classes = classes
    ? col[0] + col[1] + col[2] + col[3] + col[4] + col[5] + classes.class
    : null;

  return (
    <div style={style} className={all_classes}>
      {children}
    </div>
  );
}

export function Spacer(){
  return <div className="spacer"></div>;
}
