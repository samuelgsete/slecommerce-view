import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'exibirTempo'
})
export class ExibirTempoPipe implements PipeTransform {

  public transform(value: string, ...args: any[]): string {
    const periodo = moment(value).locale('pt-br').fromNow();
    return periodo;
  }
}