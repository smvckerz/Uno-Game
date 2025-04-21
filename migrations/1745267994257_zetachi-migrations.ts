import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable("zetachi_migrations", {
        id: "id",
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("now()"),
        },
        zetachi_string: {
            type: "varchar(1000)",
            notNull: true,
            default: "",
        },
    });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable("zetachi_migrations");
}

