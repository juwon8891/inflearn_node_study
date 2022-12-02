import { Entity } from 'typeorm';

@Entity()
export class Member {
  name: string;
  age: number;
  number: number;
  constructor(params: Member) {
    this.name = params.name;
    this.age = params.age;
    this.number = params.number;
  }
}
