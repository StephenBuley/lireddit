import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import MikroOrmConfig from "./mikro-orm.config"
import express from "express"
import {ApolloServer} from "apollo-server-express"
import {buildSchema} from "type-graphql"
import { HelloResolver } from "./resolvers/hello"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

async function main() {
    const orm = await MikroORM.init(MikroOrmConfig)
    await orm.getMigrator().up()

    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log("server started on localhost:4000")
    })
}

main()