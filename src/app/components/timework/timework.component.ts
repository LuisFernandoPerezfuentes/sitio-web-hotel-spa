import { Component, OnInit } from '@angular/core';


import { TimeworkService } from '../../services/timework.service';
import { NgForm } from '@angular/forms';
import { Timework } from '../../models/timework';
import { Tipohabitacion, Costos } from '../../models/tipohabitacion.model';
declare var M: any;

@Component({
  selector: 'app-timework',
  templateUrl: './timework.component.html',
  styleUrls: ['./timework.component.css'],
  providers: [ TimeworkService ]
})
export class TimeworkComponent implements OnInit {

  Tipohabitacion: Tipohabitacion[] = [
    {id: 1, name: 'Habitacion Doble'},
    {id: 2, name: 'Habitacion King Size'}
  ];
  Costos: Costos[] = [
    {precio: 400}
  ];
  constructor(private timeworkService: TimeworkService) { }

  ngOnInit() {
    this.getTimeworks();
  }

  addTimework(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.timeworkService.putTimework(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTimeworks();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.timeworkService.postTimework(form.value)
      .subscribe(res => {
        this.getTimeworks();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }
  getTimeworks() {
    this.timeworkService.getTimeworks()
      .subscribe(res => {
        this.timeworkService.timeworks = res as Timework[];
      });
  }

  editTimework(timework: Timework) {
    this.timeworkService.selectedTimework = timework;
  }

  deleteTimework(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.timeworkService.deleteTimework(_id)
        .subscribe(res => {
          this.getTimeworks();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.timeworkService.selectedTimework = new Timework();
    }
  }
}
