async function getConstantValues() {
  const url = '/constants.json';
  let constants;
  try {
    const response = await fetch(url).then((resp) => resp.json());
    if (!response.ok) {
      constants = response;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error with constants file', error);
  }
  return constants;
}

export const formatValues = (values) => {
  const obj = {};
  /* eslint-disable-next-line */
  if (values) values.forEach(({ name, value }) => obj[name] = value);
  return obj;
};

const {
  fgrep,
} = await getConstantValues();

const FGREP_VALUES = formatValues(fgrep?.data);
export default FGREP_VALUES;
