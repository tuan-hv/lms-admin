import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IPaginationComponent } from 'src/app/utils/pagination.interface';
import { TPaginationPosition } from '../../models/pagitiontion';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() pageNumber: number = 0;
  @Input() pageSize: number = 10;
  @Input() total: number = 10;
  clientPage: number = 1;

  @Input() position: TPaginationPosition = 'center';
  @Output() onSizeChange = new EventEmitter();
  @Output() onPageChange = new EventEmitter();
  @Output() onPaginationChange = new EventEmitter();

  records = [5, 10, 20];

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.pageNumber?.currentValue){
      this.clientPage = changes.pageNumber?.currentValue + 1;
    }
  }

  ngOnInit(): void {}

  sizeChange($event: string) {
    this.cdRef.detectChanges();
    this.onSizeChange.emit(this.pageSize);

    if (this.clientPage === 1) {
      this.setPage();
    } else {
      this.clientPage = 1;
    }
  }

  pageChange( { page } ) {
    this.clientPage = page;
    this.onPageChange.emit(page);
    this.setPage();
  }

  setPage() {
    this.pageNumber = this.clientPage - 1;

    console.log('setPage', {
      pageNumber: this.pageNumber,
      itemsPerPage: this.pageSize,
      clientPage: this.clientPage,
    });

    this.onPaginationChange.emit({
      serverPage: this.pageNumber,
      itemsPerPage: this.pageSize,
    } as IPaginationComponent);
  }
}
