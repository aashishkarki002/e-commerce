const endpoints = {
  getProducts: {
    method: "GET",
    url: "/products",
  },
  deleteProduct: {
    method: "DELETE",
    url: "/products/",
  },
  getSingleProduct: {
    method: "GET",
    url: "/products/ ",
  },
  updateProduct: {
    method: "PUT",
    url: "/products/",
  },
  getUser: {
    method: "GET",
    url: "/users/",
  },
  getSingleUser: {
    method: "GET",
    url: "/users/",
  },
  deleteUsers: {
    method: "DELETE",
    url: "/users/",
  },
  updateUser: {
    method: "PUT",
    url: "/users/",
  },
  login: {
    method: "POST",
    url: "/auth/login/",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export function getApiDetails(apiKey: keyof typeof endpoints) {
  const api = endpoints[apiKey];

  const fullUrl = `${baseUrl}${api.url}`;

  return {
    method: api.method,
    url: fullUrl,
  };
}
