
function showKeyWords(keywords) {
  if (keywords.length === 1) {
    <span className="saved__bold">{keywords[0]}</span>;
  }
  if (keywords.length === 2) {
    return (
      <>
        <span className="saved__bold">{keywords[0]},&nbsp;</span>
        <span className="saved__bold">{keywords[1]}</span>
      </>
    );
  }
  if (keywords.length === 3) {
    return (
      <>
        <span className="saved__bold">{keywords[0]},&nbsp;</span>
        <span className="saved__bold">{keywords[1]},&nbsp;</span>
        <span className="saved__bold">{keywords[2]}</span>
      </>
    );
  }
  return (
    <>
      <span className="saved__bold">
        {keywords[0]}, {keywords[1]}
      </span>
      &nbsp;и&nbsp;
      <span className="saved__bold">{keywords.length - 2}-м другим</span>
    </>
  );
}
export default showKeyWords;
