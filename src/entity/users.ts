import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn} from "typeorm";

@Entity()
export class users{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    mailbox: string;
	

    @Column()
    pwd: string;
   
    @CreateDateColumn()
    RegistrationDate: Date = new Date();
  
}