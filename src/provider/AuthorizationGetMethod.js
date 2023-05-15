const authorizationGetMethod = {
  method: "GET",
  headers: {
    authorization: `berar ${localStorage.getItem("car-token")}`,
  },
};

export default authorizationGetMethod;
