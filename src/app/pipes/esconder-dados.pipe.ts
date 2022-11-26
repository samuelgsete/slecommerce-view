import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'esconderdados'
})
export class EsconderDadosPipe implements PipeTransform {
    public transform(texto: string, ...args: any[]): string {
        return texto.replace(texto.substring(0, 12), '**** **** **** ');
    }
}