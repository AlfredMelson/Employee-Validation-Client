const timeout = (_req, _res, next) => {
    setTimeout(() => next(), 500);
}
  
export default timeout;
  