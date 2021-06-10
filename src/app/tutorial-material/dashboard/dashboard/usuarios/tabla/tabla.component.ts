import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit, OnInit {

  usuarios: Usuario[] = []

  displayedColumns = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  textosDelDialog = ['Esta seguro?', 'Si, eliminar', 'cancelar']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicioDeUsuario: UsuarioService, private snackbar: MatSnackBar, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.cargarUsuarios()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarUsuarios() {
    this.usuarios = this.servicioDeUsuario.cargarUsuarios()
    this.dataSource = new MatTableDataSource(this.usuarios)
  }




  eliminar(index: number) {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: "250px",
      data: { ...this.textosDelDialog } 
    })
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.eliminarUsuario(index)
      }


    }, err => console.error('Error al eliminar usuario, tablacomponent', err))
  }


  
  eliminarUsuario(index: number) {
    this.servicioDeUsuario.eliminar(index)
    this.cargarUsuarios()
    this.snackbar.open('Usuario eliminado correctamente', 'Ok!', {
      duration: 1500
    })

  }
}
