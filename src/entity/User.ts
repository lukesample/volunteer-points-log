import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * This entity is for demonstration purposes only.
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
