
import { DatePipe } from '@angular/common'
import { Injectable } from '@angular/core';
import { AppConstant } from '../services/app/app.constant';

@Injectable()
export default class CommonUtils {
    
    constructor(private datepipe: DatePipe){}

    format(date:Date){
        return this.datepipe.transform(date, AppConstant.DATETIME_VN);
    }

    static format(date:Date, dp: DatePipe){
        return dp.transform(date, AppConstant.DATETIME_VN);
    }
}
  