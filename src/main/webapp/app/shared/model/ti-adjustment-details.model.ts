export interface ITIAdjustmentDetails {
  toolsName?: any;
  id?: string;
  toolsITem?: any;
  tiAdjustmentID?: string;
  toolsID?: string;
  description?: string;
  quantity?: number;
  remainingAmount?: number;
  newRemainingAmount?: number;
  diffRemainingAmount?: number;
  remainAllocationTimes?: number;
  newRemainingAllocationTime?: number;
  differAllocationTime?: number;
  allocatedAmount?: number;
  orderPriority?: number;
  toolsItem?: any;
  toolsCode?: any;
  checkDuplicate?: boolean;
  customField1?: any;
  customField2?: any;
  customField3?: any;
  customField4?: any;
  customField5?: any;
}

export class TIAdjustmentDetails implements ITIAdjustmentDetails {
  constructor(
    public toolsName?: any,
    public id?: string,
    public toolsITem?: any,
    public tiAdjustmentID?: string,
    public toolsID?: string,
    public description?: string,
    public quantity?: number,
    public remainingAmount?: number,
    public newRemainingAmount?: number,
    public diffRemainingAmount?: number,
    public remainAllocationTimes?: number,
    public newRemainingAllocationTime?: number,
    public differAllocationTime?: number,
    public allocatedAmount?: number,
    public orderPriority?: number,
    public toolsItem?: any,
    public toolsCode?: any,
    public checkDuplicate?: boolean,
    public customField1?: any,
    public customField2?: any,
    public customField3?: any,
    public customField4?: any,
    public customField5?: any
  ) {}
}
