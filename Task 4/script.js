function getUserProfileFromObj(object) {
  if (typeof(object) === "object" && object != null) {
    if ((typeof object['username'] !== "undefined") && (typeof object['email'] !== "undefined")) {
        return {
          username: object.username,
          email: object.email,
        };
    }
  }
  return null;
}
