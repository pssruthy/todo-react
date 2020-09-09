const getHeading = () => {
  return fetch('/api/getHeading')
    .then((res) => res.json())
    .then(({ heading }) => heading);
};

export default { getHeading };
