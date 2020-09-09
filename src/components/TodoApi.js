const postRequest = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

const getHeading = () =>
  fetch('/api/getHeading')
    .then((res) => res.json())
    .then(({ heading }) => heading);

const getAllItems = () =>
  fetch('/api/getAllItems')
    .then((res) => res.json())
    .then(({ items }) => items);

const updateHeading = (heading) =>
  postRequest('/api/updateHeading', { heading });

const addItem = (item) => postRequest('/api/addItem', { item });

const toggleItemStatus = (itemId) =>
  postRequest('/api/toggleItemStatus', { itemId });

const removeItem = (itemId) => postRequest('/api/removeItem', { itemId });

const removeTodo = () => postRequest('/api/removeTodo', {});

export default {
  getHeading,
  getAllItems,
  updateHeading,
  addItem,
  removeItem,
  removeTodo,
  toggleItemStatus,
};
