"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211223140357 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211223140357 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20211223140357 = Migration20211223140357;
//# sourceMappingURL=Migration20211223140357.js.map