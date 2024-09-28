
const envFile = import.meta.env;
const  conf = {
    appWriteUrl : String(envFile.VITE_APPWRITE_URL),
    appWriteProject : String(envFile.VITE_APPWRITE_PROJECT_ID),
    appWriteDataBase_ID : String(envFile.VITE_APPWRITE_DATABASE_ID),
    appWrite_collection_ID : String(envFile.VITE_APPWRITE_COLLECTION_ID),
    appWrite_bucket_ID : String(envFile.VITE_APPWRITE_BUCKET_ID )
} 


export default conf


