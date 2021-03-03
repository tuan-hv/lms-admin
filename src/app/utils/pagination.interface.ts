export interface IPaging {
  //Server return
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
}

export interface IPaginationComponent {
  serverPage: number;
  itemsPerPage: number;
}

