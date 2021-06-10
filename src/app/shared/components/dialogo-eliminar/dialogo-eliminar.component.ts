import { Component,  Inject,  OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-eliminar',
  templateUrl: './dialogo-eliminar.component.html',
  styleUrls: ['./dialogo-eliminar.component.css']
})
export class DialogoEliminarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogoEliminarComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    

  ngOnInit(): void {
  }

borrar(){
  this.dialogRef.close(true)

}

cerrar(){
this.dialogRef.close()
}


}
