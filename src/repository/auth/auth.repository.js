import { dsn } from "../../infra/postgres.js";
import { NewInternalServerError, NewNotFound } from "../../pkg/errs/errorMessage.js"

export class UserRepository {
    async findByUsername(username) {
        try {
            const query = `SELECT * FROM users WHERE username = $1`;
            const { rows } = await dsn.query(query, [username]);

            if (rows.length === 0) {
                throw NewNotFound(`User with username '${username}' not found`);
            }

            return rows[0];
        } catch (error) {
            if (error.StatusCode) throw error;

            throw NewInternalServerError(error.message);
        }
    }

    async createUser(username, password) {
        try {
            const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
            const { rows } = await dsn.query(query, [username, password]);
            return rows[0];
        } catch (error) {
            throw NewInternalServerError(error.message);
        }
    }
}
