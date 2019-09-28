import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ITest } from "src/interfaces/ITest";


@Entity('testings')
export class Test extends BaseEntity implements ITest {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;


}