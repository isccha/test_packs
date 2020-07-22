import { Controller } from "stimulus"

class DataTable extends Controller {
  static targets = [ "table" ]

  connect(){
    console.log("dataTable connected");
    const table = this.tableTarget
    const columns = this.data.get("colums").split(",")
    const args = columns.map( x =>  {var m = {"data" : x}; return m} )
    $(table).dataTable({
      "processing": true,
      "serverSide": true,
      "iDisplayLength": 50,
      "aaSorting": [[0, 'desc']],
      "ajax": $(table).data('source'),
      "pagingType": "full_numbers",
      "columns": args
    });

  }

}

export {DataTable};
