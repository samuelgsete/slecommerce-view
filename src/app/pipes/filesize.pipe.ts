import { Pipe, PipeTransform } from '@angular/core';

const Kb = 1024
const Mb = 1048576
const Gb = 1073741824
const Tb = 1099511627776

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  public transform(value: number, ...args: any[]): string {
    let result = '';
    if(value <= Kb) {
      result = value.toFixed(1).concat('bytes')
      return result;
    }
    else if(value > Kb && value <= Mb) {
      result = (value/Kb).toFixed(1).concat('Kb')
      return result;
    }
    else if(value > Mb && value <= Gb) {
      result = (value/Mb).toFixed(1).concat('Mb')
      return result;
    }
    else if(value > Gb && value <= Tb) {
      result = (value/Gb).toFixed(1).concat('Gb')
      return result;
    }
    else {
      return '..'
    }
  }
}