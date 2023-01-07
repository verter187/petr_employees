export const getEmployees = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/router/employees")
    .then((data) => data.json(), reject)
    .then(resolve);
};

export const createEmployee = async (data) => {
  let res = await fetch("http://localhost:5000/api/router/createEmployee", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });

  if (res.status === 200) {
    return true;
  }
  throw new HttpError(res);
};

export const deleteEmployee = async (data) => {
  let res = await fetch("http://localhost:5000/api/router/deleteEmployee", {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: data,
  });

  if (res.status === 200) {
    return true;
  }
  throw new HttpError(res);
};

export const updateEmployee = async (data) => {
  let res = await fetch("http://localhost:5000/api/router/updateEmployee", {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: data,
  });

  if (res.status === 200) {
    return true;
  }
  throw new HttpError(res);
};

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
