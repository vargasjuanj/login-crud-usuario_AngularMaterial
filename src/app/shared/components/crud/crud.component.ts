import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: 'crud.component.html'
})
export class CrudComponent {

  @Input() title = 'Management';
  @Input() createAction = true;
  @Input() readAction = true;
  @Input() updateAction = true;
  @Input() deleteAction = true;
  @Output() create = new EventEmitter<any>();
  @Output() read = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  dataSource: MatTableDataSource<any> | undefined 
  columns: Array<string> = [''] //Esto no estaba inicializado cualquier cosa fijarse que onda aca
  columnsHeader: Array<string> | undefined 

  @Input()
  set data(data: Observable<any[]>) {
    data.subscribe(dataValue => {
      const columnsSet: Set<string> = new Set();
      this.dataSource = new MatTableDataSource<any>(dataValue);
      if (dataValue) {
        dataValue.forEach(obj => Object.getOwnPropertyNames(obj)
          .forEach(column => columnsSet.add(column))
        );
        this.columns = Array.from(columnsSet);
      } else {
        this.columns = [];
      }
      columnsSet.add('actions');
      this.columnsHeader = Array.from(columnsSet);
    });
  }

  onRead(item: any): void {
    this.read.emit(item);
  }

  onCreate(): void {
    this.create.emit();
  }

  onUpdate(item: any): void {
    this.update.emit(item);
  }

  onDelete(item: any): void {
    this.delete.emit(item);
  }
}
