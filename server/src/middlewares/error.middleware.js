export default (err, req, res, next) => {
  console.error(err?.message);
  res.status(500).json(err?.message || "Something failed");
};
