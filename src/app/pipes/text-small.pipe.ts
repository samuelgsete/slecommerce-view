import { Pipe, PipeTransform } from "@angular/core";

// Pipe que diminui o tamanho de textos muito longos
@Pipe({
    name: 'textsmall'
})
export class TextSmallPipe implements PipeTransform {
    public transform(texto: string, ...args: any[]): string {
        const tamanho = parseInt(args[0]);
        return texto.substring(0, tamanho).concat('.....')
    }
}