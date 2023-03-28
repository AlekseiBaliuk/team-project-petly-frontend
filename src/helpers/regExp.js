const pwd = /^[\S]{7,32}$/;
// const location =
//   /^$|^([A-Za-zА-Яа-яІіЇїЄєҐґ]+),\s([A-Za-zА-Яа-яІіЇїЄєҐґ\s]+)?$/;
const location =
  /^(([А-Я+ІіЇїЄєҐґ][а-яА+ІіЇїЄєҐґ]+),\s([А-Я+ІіЇїЄєҐґ][а-яА+ІіЇїЄєҐґ\s]+))$|^(([A-Z][a-zA]+),\s([A-Z][a-zA\s]+))$/;
const mobile = /^\+380\d{9}$/;
const email = /^(?=.{10,63}$)([A-Za-z0-9._-]{2,}@[A-Za-z0-9._-]{2,})$/;
const bdayRegexp = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;
const nameRegexp = /^([A-Za-zА-Яа-яІіЇїЄєҐґ\s])+$/;

export const regExp = {
  pwd,
  location,
  mobile,
  email,
  bdayRegexp,
  nameRegexp,
};
