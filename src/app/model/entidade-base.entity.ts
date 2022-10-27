export abstract class EntidadeBase {

    public id: number = 0

    public constructor(values: Object = {}) { Object.assign(this, values) }
}