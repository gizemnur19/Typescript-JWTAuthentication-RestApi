const keys = {
  port: process.env.PORT || 3000,
  secret_key: process.env.SECRET_KEY || 'gizemkaf-secretkey',
  mongodb_uri: process.env.MONGO_DB || 'mongodb://127.0.0.1:27017/nodejsbootcamp_typescript_db',
};

export default keys;
