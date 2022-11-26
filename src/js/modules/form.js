const form = () => {

  const orderElems = {
    phoneField: document.querySelector('#orderPhone'),
    addressField: document.querySelector('#orderShipping'),
    payField: document.querySelector('#orderPayment'),
    btn: document.querySelectorAll('.entered-info__btn'),
  };

  const serialize = (form) => {
    if (form.nodeName !== 'FORM') throw new Error('Not a form');
    const data = {};
    let elem;
    for (elem of form.elements) {
      if (elem.type === 'radio' || elem.type === 'checkbox') {
        elem.checked ? elem.value = 'Yes' : elem.value = 'No';
      }
      if (elem.nodeName === 'BUTTON') elem.value = false;
      if (elem.value !== 'false' && elem.value !== '') {
        data[elem.name] = elem.value;
      }
    }
    return data;
  };

  const insertData = (data, orderElems) => {
    const { phone, address1, address2, firstName, shipping, payment } = data;
    const { phoneField, addressField, payField } = orderElems;
    if (phoneField) phoneField.innerHTML = phone;
    if (addressField) {
      addressField.innerHTML = `${firstName} ${address1} ${address2}`;
      if (shipping) addressField.innerHTML += `${shipping}`;
    }
    if (payField && payment) payField.innerHTML = payment;
  };

  const getData = (name) => {
    let data;
    const oldItem = localStorage.getItem(name);
    if (oldItem === null) data = [];
    else data = JSON.parse(localStorage.getItem(name));
    return data;
  };

  const form = document.querySelector('#checkoutForm');
  if (form) {
    form.addEventListener('submit', () => {
      const formData = serialize(form);
      if (formData) {
        const data = {};
        const oldData = getData('orderData');
        oldData.push(formData);

        for (const object of oldData) {
          for (const item in object) {
            data[item] = object[item];
          }
        }
        oldData.push(data);
        localStorage.setItem('orderData', JSON.stringify(oldData));
      }
    });
  }

  if (orderElems.phoneField) {
    const data = getData('orderData');
    for (const item of data) insertData(item, orderElems);
  }
};

export default form;
