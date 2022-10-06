import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCartDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly color?: string;
}