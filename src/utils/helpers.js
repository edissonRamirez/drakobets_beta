module.exports = {
  isEmpty: async (col) => {
    return (await col.countDocuments()) === 0;
  }
};
