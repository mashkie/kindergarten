import { Pipe, PipeTransform } from '@angular/core';
import { Kindergarden } from '../models/kindergarden.model';

@Pipe({
  name: 'kindergarden',
})
export class KindergardenPipe implements PipeTransform {
  transform(id: string, args: Kindergarden[]): Kindergarden | undefined {
    const kindergardens: Kindergarden[] = args;
    console.log(kindergardens);
    return kindergardens?.find((kindergarden) => kindergarden.id === id);
  }
}
