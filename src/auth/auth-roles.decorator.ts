import { SetMetadata } from "@nestjs/common";

export const SET_ROLES_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(SET_ROLES_KEY, roles);