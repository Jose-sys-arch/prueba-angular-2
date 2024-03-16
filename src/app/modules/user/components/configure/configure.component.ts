import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfigureService } from '../../services/configure.service';

@Component({
  selector: 'app-configure',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './configure.component.html',
  styleUrl: './configure.component.css',
})
export class ConfigureComponent {
  userForm!: FormGroup;
  personForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private configureService: ConfigureService
  ) {
    this.userForm = this.formBuilder.group({
      mail: '',
      password: '',
    });
    this.personForm = this.formBuilder.group({
      nombres: '',
      apellidos: '',
      identificacion: '',
    });
  }

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.configureService.getInformation().subscribe((data: any) => {
      console.log(data);
      this.personForm.get('nombres')!.setValue(data.nombres);
      this.personForm.get('apellidos')!.setValue(data.apellidos);
      this.personForm.get('identificacion')!.setValue(data.identificacion);
      this.userForm.get('mail')!.setValue(data.mail);
      console.log(this.personForm)
    });
  }

  submitFormPerson() {
    this.configureService.updateData(this.personForm.value).subscribe((data) => {
      console.log(data);
      alert('Se actualizaron los datos');
    })
  }

  submitFormUser() {
    this.configureService.updateUser(this.userForm.value).subscribe((data) => {
      console.log(data);
      alert('Se actualizaron los datos');
    })
  }
}
