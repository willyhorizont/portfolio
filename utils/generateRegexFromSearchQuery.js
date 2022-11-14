const generateRegexFromSearchQuery = (searchQuery) => {
  const searchQueryLow = searchQuery.toLowerCase();
  const searchQueryNoSpecial = searchQueryLow.replace(/[^\w ]/g, '');
  const searchQuerySingleWhiteSpace = searchQueryNoSpecial.replace(/\s\s+/g, ' ');
  const searchQuerySplitted = searchQuerySingleWhiteSpace.split(' ');
  const searchQueryReduced = searchQuerySplitted.reduce((rslt, str, curIndex, arr) => {
    const strCopy = [...str];
    const strNoDup = [...new Set(strCopy)].join('');

    const strCopyMap = strCopy.map((stritem, strindex) => {
      const addSpace = strCopy.length > 4 && strindex === 4 ? ' ?' : '';
      if (/[bw]/gi.test(stritem)) return `${addSpace}[bw]+`;
      if (/[fh]/gi.test(stritem)) return `${addSpace}[fh]+`;
      if (/[pfv]/gi.test(stritem)) return `${addSpace}[pfv]+`;
      if (/[iy]/gi.test(stritem)) return `${addSpace}[iy]*e*`;
      if (/[ckqx]/gi.test(stritem)) return `${addSpace}[ckqx]+h*`;
      if (/[sczx]/gi.test(stritem)) return `${addSpace}[scz]+h*`;
      if (/[uo]/gi.test(stritem)) return `${addSpace}[uo]*[oe]*`;
      if (/[ae]/gi.test(stritem)) return `${addSpace}[ae]*`;
      return `${stritem}+`;
    });
    const strTypo = strCopyMap.join('');
    const digitReg = /^\d+$/gi;
    const isDigit = digitReg.test(strNoDup);
    const isLastItem = Boolean(arr.length > 1 && arr.length === curIndex + 1);

    const rsltCurCopy = [...rslt];
    const curRsltCopyLastItem = Array.isArray(rsltCurCopy) && rsltCurCopy.length > 1 ? rsltCurCopy?.[rsltCurCopy.length - 1] : '';
    const isPrevContainDigit = curRsltCopyLastItem?.split?.(' ?')?.[1];
    const isPrevOnlyDigit = curRsltCopyLastItem?.match?.(digitReg);

    if (isLastItem && isPrevOnlyDigit) return [`${curRsltCopyLastItem} ?[${strNoDup}]{${strNoDup.length},}|`, `[${strNoDup}]{${strNoDup.length},}`];
    if (isLastItem && isPrevContainDigit) return [...rslt, `${isPrevContainDigit} ?[${strNoDup}]{${strNoDup.length},}|`, `[${strNoDup}]{${strNoDup.length},}`];
    if (isLastItem && isDigit && curRsltCopyLastItem) return [...rslt, `${curRsltCopyLastItem?.substring?.(0, curRsltCopyLastItem.length - 1)} ?${strNoDup} ?`];
    if (isLastItem) { return [...rslt, `${strTypo}|`, `[${strNoDup}]{${strNoDup.length},}`]; }
    if (isDigit && curRsltCopyLastItem) return [...rslt, `${curRsltCopyLastItem?.substring?.(0, curRsltCopyLastItem.length - 1)} ?${strNoDup} ?|`];
    if (isDigit) return [...rslt, strNoDup];
    if (isPrevOnlyDigit) return [`${curRsltCopyLastItem} ?[${strNoDup}]{${strNoDup.length},}|`, `[${strNoDup}]{${strNoDup.length},}|`];
    if (isPrevContainDigit) return [...rslt, `${isPrevContainDigit} ?[${strNoDup}]{${strNoDup.length},}|`, `[${strNoDup}]{${strNoDup.length},}|`];
    if (arr.length === 1) { return [...rslt, `${strTypo}|`, `[${strNoDup}]{${strNoDup.length},}`]; }
    return [...rslt, `${strTypo}|`, `[${strNoDup}]{${strNoDup.length},}|`];
  }, []);
  return searchQueryReduced.join('');
};

export default generateRegexFromSearchQuery;
