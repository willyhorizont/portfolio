import { useEffect, useState } from 'react';
import generateRegexFromSearchQuery from '../../utils/generateRegexFromSearchQuery';

const initialSearchState = 'jamu sido muncul';
const initialExampleItemName = 'jamoe sidoe moencoel';

const PartialTextSearchUsingRegex = () => {
  const [search, setSearch] = useState(initialSearchState);
  const [exampleItemName, setExampleItemName] = useState(
    initialExampleItemName
  );
  const [regexLiteral, setRegexLiteral] = useState(initialSearchState);
  const [regexTest, setRegexTest] = useState(false);
  const [regexMatch, setRegexMatch] = useState(null);

  useEffect(() => {
    const regexLiteralResult = generateRegexFromSearchQuery(search);
    console.log('regexLiteralResult', regexLiteralResult);
    setRegexLiteral(regexLiteralResult);
  }, [search]);

  useEffect(() => {
    const searchRegex = new RegExp(regexLiteral, 'gi');
    console.log('searchRegex', searchRegex);
    const regexTestResult = searchRegex.test(exampleItemName);
    console.log('regexTestResult', regexTestResult);
    setRegexTest(regexTestResult);
    const regexMatchResult = exampleItemName.match(searchRegex);
    console.log('regexMatchResult', regexMatchResult);
    setRegexMatch(regexMatchResult);
  }, [regexLiteral, exampleItemName]);

  const handleChangeSearch = (evt) => setSearch(evt.target.value);
  const handleChangeItemName = (evt) => setExampleItemName(evt.target.value);

  return (
    <div className="App">
      <h1>Partial Text Search Regex</h1>
      <h3>(Indonesian Pronounciation)</h3>
      <h2>Enter Search Query</h2>
      <input
        type="text"
        value={search}
        onChange={handleChangeSearch}
        spellCheck="false"
      />
      <h2>Enter Mock Item Name In Db To Search</h2>
      <input
        type="text"
        value={exampleItemName}
        onChange={handleChangeItemName}
        spellCheck="false"
      />
      <h2>Partial Text Search Regex Result</h2>
      <h5>{`/${regexLiteral}/gi`}</h5>
      <h2>Regex Match</h2>
      {regexMatch && <h2>{'[' + regexMatch.join(', ') + ']'}</h2>}
      <h2>Regex Test</h2>
      {regexTest ? <h2>true</h2> : <h2>false</h2>}
    </div>
  );
};

export default PartialTextSearchUsingRegex;
