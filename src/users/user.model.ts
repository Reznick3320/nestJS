import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript"
import { Role } from './../roles/roles.model';
import { UserRoles } from './../roles/user-roles.model';


interface UserCreationAttr {
	email: string;
	password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
	@ApiProperty({ example: '1', description: 'Иникальний индетефикатор' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адрес' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string;

	@ApiProperty({ example: '12345678', description: 'Пароль' })
	@Column({ type: DataType.STRING, allowNull: false })
	password: string;

	@ApiProperty({ example: 'true', description: 'Забанин или нет' })
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	banned: boolean;

	@ApiProperty({ example: 'За хулиганство', description: 'Причина блокировки' })
	@Column({ type: DataType.STRING, allowNull: true })
	banReason: string;

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[];
}