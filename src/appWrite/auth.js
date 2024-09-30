import conf from "../Conf/Conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl) // Your API Endpoint
      .setProject(conf.appWriteProject);

    this.account = new Account(this.client);
  }

  async createAccount({ email, passWord, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        passWord,
        name
      );

      if (userAccount) {
        loginUser();
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, passWord }) {
    try {
      const loggedUser = this.account.createEmailPasswordSession(
        email,
        passWord
      );

      return loggedUser;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
