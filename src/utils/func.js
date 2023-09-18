const Func = {
  Arrays() {
    return [];
  },
  Objects() {
    return {};
  },
  isObjEmpty(obj) {
    if (obj === undefined) {
      return true;
    }
    if (typeof obj === 'object') {
      return Object.keys(obj).length === 0 ? true : false;
    } else true;
  },
};
export default Func;
