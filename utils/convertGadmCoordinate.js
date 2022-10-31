const convertGadmCoordinate = (gadmCoordStr) => {
  // eslint-disable-next-line no-useless-escape
  const tesReg1 = /[^\d ,.\-]/g;
  const newStr1 = gadmCoordStr.replaceAll(tesReg1, ';');
  const splitStr1 = newStr1.split(';').filter(Boolean);
  const strMap1 = splitStr1.reduce((longest, currStr) => (longest.length > currStr.length ? longest : currStr), '');
  const latLongResult = [...strMap1.split(' ')].map((str) => ({ lat: parseFloat(str.split(',')[1], 10), lng: parseFloat(str.split(',')[0], 10) }));
  return latLongResult;
};

export default convertGadmCoordinate;
