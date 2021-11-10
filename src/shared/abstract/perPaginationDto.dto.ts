import { IsInt, IsString } from "class-validator";

export class PerPaginationDto{   

    @IsInt()
    skip: number;

    @IsInt()
    take: number;

}