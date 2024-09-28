import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../Conf/Conf";

export class dataBaseService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(conf.appWriteUrl);
    this.client.setProject(conf.appWriteProject);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      this.databases.createDocument(
        conf.appWriteDataBase_ID,
        conf.appWrite_collection_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDataBase_ID,
        conf.appWrite_collection_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDataBase_ID,
        conf.appWrite_collection_ID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDataBase_ID,
        conf.appWrite_collection_ID,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDataBase_ID,
        conf.appWrite_collection_ID,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwritestorageId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwritestorageId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwritestorageId, fileId);
  }
}

const DataBaseService = new dataBaseService();

export default DataBaseService;
