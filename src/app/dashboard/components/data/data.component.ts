import { Component, Input } from '@angular/core';
import { Child } from '../../models/child.model';
import { Kindergarden } from '../../models/kindergarden.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  @Input() children?: Child[];
  @Input() kindergardens?: Kindergarden[];

  getKindergardenFromChild(id: string): Kindergarden | undefined {
    return this.kindergardens?.find((kindergarden) => kindergarden.id === id);
  }
}
