import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kindergarden } from '../../models/kindergarden.model';
import { Child } from '../../models/child.model';

enum Nationality {
  DE = 'Deutschland',
  AT = 'Österreich',
  CH = 'Schweiz',
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent {
  @Input() kindergardens: Kindergarden[] = [];
  @Output() emittedChild: EventEmitter<Child> = new EventEmitter<Child>();
  @ViewChild('popover') popover: any;
  childForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.childForm = this.fb.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      nationality: ['', Validators.required],
      kindergarden: ['', Validators.required],
      parent: this.fb.group({
        name: ['', Validators.required],
        mail: ['', Validators.email],
      }),
    });
  }

  onSubmit() {
    const child: Child = {
      name: this.childForm.get('name')?.value,
      birthDate: this.childForm.get('birthDate')?.value,
      kindergartenId: this.childForm.get('kindergarden')?.value,
    };
    this.emittedChild.emit(child);
    this.childForm.reset();
  }

  protected readonly Nationality = Nationality;

  showPopup() {
    return HTMLElement.prototype.hasOwnProperty('popover');
  }
}
