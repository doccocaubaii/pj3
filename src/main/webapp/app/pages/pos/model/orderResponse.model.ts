import dayjs from 'dayjs/esm';

export class OrderResponse {
  id!: number;
  code!: string;
  code2!: string;
  status!: number;
  totalAmount!: number;
  createTime!: dayjs.Dayjs;
  customerId!: number;
  customerName!: string;
  paymentMethod!: string;
  debt!: number;
  refund!: number;
  statusName?: string;
  paymentMethodName?: string;
}
