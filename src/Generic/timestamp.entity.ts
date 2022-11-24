import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class TimestampEntity {
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}