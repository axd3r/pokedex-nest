export const EnvConfiguration = () => {
    return{
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGO_DB,
    port: process.env.PORT}
}