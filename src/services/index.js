import client from "./client";

export const service = {
  async getUserProfile(token) {
    const {data} = await client.appApi("profile", {
      params: {
        token,
      },
    });
    return data;
  },
  async authenticate(token) {
    const {data} = await client.appApi("authenticate", {
      params: {
        token,
      },
    });
    return data;
  },
  async login(token) {
    const {data} = await client.appApi("login", {
      params: {
        token,
      },
    });
    return data;
  }
}
