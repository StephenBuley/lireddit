import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entities/Post"
import MikroOrmConfig from "./mikro-orm.config"

async function main() {
    const orm = await MikroORM.init(MikroOrmConfig)
    await orm.getMigrator().up()
    // const post = orm.em.create(Post, {title: "My first Post"})
    // await orm.em.persistAndFlush(post)

    const posts = await orm.em.find(Post, {})
    console.log(posts)
}

main()