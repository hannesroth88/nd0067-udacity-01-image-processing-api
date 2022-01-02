// eslint-disable-next-line @typescript-eslint/no-empty-function
function Song() {
}

Song.prototype.persistFavoriteStatus = function() {
  // something complicated
  throw new Error("not yet implemented");
};

export {Song};