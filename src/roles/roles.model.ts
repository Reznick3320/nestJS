import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript"
import { User } from './../users/user.model';
import { UserRoles } from './user-roles.model';


interface RoleCreationAttr {
	value: string;
	description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttr> {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@ApiProperty({ example: 'ADMIN', description: 'Уникальное Значение роли ' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	value: string;

	@ApiProperty({ example: 'Администратор', description: 'Описание роли' })
	@Column({ type: DataType.STRING, allowNull: false })
	description: string;

	@BelongsToMany(() => User, () => UserRoles)
	users: User[];
}