import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany } from "sequelize";
import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript"
import { User } from './../users/user.model';
import { Role } from './roles.model';


@Table({ tableName: 'user_roles', createdAt: true, updatedAt: true })
export class UserRoles extends Model<UserRoles> {

	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@ForeignKey(() => Role)
	@Column({ type: DataType.NUMBER })
	roleId: number;

	@ForeignKey(() => User)
	@Column({ type: DataType.NUMBER })
	userId: number;


}