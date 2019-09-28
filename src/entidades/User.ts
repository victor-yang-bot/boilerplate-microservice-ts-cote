import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


@Entity('users')
export class User extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    email: string;

    @Column("int", { default: 0 })
    tokenVersion: number;

    @Column()
    password: string;

}