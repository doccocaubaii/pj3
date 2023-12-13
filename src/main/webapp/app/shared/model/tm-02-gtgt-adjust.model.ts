import { Moment } from 'moment';

export interface ITM02GTGTAdjust {
  id?: number;
  tM02GTGTID?: number;
  code?: string;
  name?: string;
  declaredAmount?: number;
  adjustAmount?: number;
  differAmount?: number;
  lateDays?: number;
  lateAmount?: number;
  explainAmount?: number;
  commandNo?: string;
  commandDate?: Moment | any;
  taxCompanyName?: string;
  taxCompanyDecisionName?: string;
  receiveDays?: number;
  explainLateAmount?: number;
  differReason?: string;
  orderPriority?: number;
}

export class TM02GTGTAdjust implements ITM02GTGTAdjust {
  constructor(
    public id?: number,
    public tM02GTGTID?: number,
    public code?: string,
    public name?: string,
    public declaredAmount?: number,
    public adjustAmount?: number,
    public differAmount?: number,
    public lateDays?: number,
    public lateAmount?: number,
    public explainAmount?: number,
    public commandNo?: string,
    public commandDate?: Moment | any,
    public taxCompanyName?: string,
    public taxCompanyDecisionName?: string,
    public receiveDays?: number,
    public explainLateAmount?: number,
    public differReason?: string,
    public orderPriority?: number
  ) {}
}