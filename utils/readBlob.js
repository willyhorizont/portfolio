const readBlob = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onend = reject;
    reader.onabort = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(new Blob([blob], { type: blob.type }));
  });
};

export default readBlob;
