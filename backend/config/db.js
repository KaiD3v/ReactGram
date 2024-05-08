const mongoose = require('mongoose')
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS

// connection
const conn = async() => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.q7gcgr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )

        console.log('Conectado ao banco de dados!')

        return dbConn
    } catch (error) {
        console.log("Houve erro ao conetctar-se ao banco de dados:", error)
    }
}

conn()

module.exports = conn