function showKeyWords(cards) {
  const newdata = cards.map((item) => item.keyword);
  if (newdata.length === 1) {
    <span className="saved__bold">{newdata[0]}</span>;
  }
  if (newdata.length === 2) {
    return (
      <>
        <span className="saved__bold">{newdata[0]}</span>
        <span className="saved__bold">{newdata[1]}</span>
      </>
    );
  }
  if (newdata.length === 3) {
    return (
      <>
        <span className="saved__bold">{newdata[0]}</span>
        <span className="saved__bold">{newdata[1]}</span>
        <span className="saved__bold">{newdata[2]}</span>
      </>
    );
  }
  return (
    <>
      <span className="saved__bold">
        {newdata[0]}, {newdata[1]}
      </span>
      &nbsp;и&nbsp;
      <span className="saved__bold">{newdata.length - 2}-м другим</span>
    </>
  );
}
export default showKeyWords;
