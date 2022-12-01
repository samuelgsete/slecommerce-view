import { EventEmitter } from "@angular/core";

export abstract class RecursoBase<T> {

    protected readonly estaConcluido: EventEmitter<T> = new EventEmitter<T>();

    public ok(): EventEmitter<T> { return this.estaConcluido }
}