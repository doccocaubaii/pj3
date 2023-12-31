import { Location } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderResponse } from '../../model/orderResponse.model';
import { BaseComponent } from '../../../../shared/base/base.component';
import { last_print_config } from '../../../../object-stores.constants';
import * as QRCode from 'qrcode';
import { ConfigService } from '../../../../layouts/config/service/config.service';
import { PrintService } from '../../service/print.service';
import { Router } from '@angular/router';
import {ICON_CANCEL} from "../../../../shared/other/icon";

@Component({
  selector: 'jhi-pos-invoice-table',
  templateUrl: './pos-invoice-table.component.html',
  styleUrls: ['./pos-invoice-table.component.scss'],
})
export class PosInvoiceTableComponent extends BaseComponent implements OnInit {
  @Input() orderSelected?: any = {};
  @Input() isHide?: boolean = false;
  @Input() type: number = 0;
  statusPrint = false;
  @Input() printConfigs: any;
  printConfigMap: Map<any, any>;
  urlQR: any;
  lastCompany: any;

  constructor(
    public activeModal: NgbActiveModal,
    protected modalService: NgbModal,
    private configService: ConfigService,
    public printService: PrintService,
    private router: Router,
    private location: Location
  ) {
    super();
    this.location.subscribe(() => {
      this.activeModal.dismiss();
    });
  }
  printStyles = `
    <style>
      @page {
        margin: 2cm; /* Set margin to 2cm */
        @top-center {
          content: "Header content"; /* Set header content */
        }
      }

      #printableContent {
        /* CSS for the printable content */
      }
    </style>
  `;
  printWindow: any;
  async ngOnInit() {
    window.addEventListener('beforeprint', () => {
      this.closeModal();
    });

    window.addEventListener('afterprint', () => {
      this.closeModal();
    });
    if (!this.orderSelected) {
      this.orderSelected = {
        id: 8368,
        code: 'DH358',
        code2: null,
        comId: 1432,
        status: 1,
        customerId: 1719,
        customerName: 'Khách lẻ',
        creatorId: 1411,
        creatorName: 'Ngô Công',
        createTime: '2023-05-19 14:23:19',
        deliveryType: 2,
        quantity: 1,
        amount: 50000000,
        discountAmount: 0,
        totalPreTax: 50000000,
        vatRate: 0,
        vatAmount: 0,
        totalAmount: 50000000,
        areaUnitId: null,
        areaName: null,
        areaUnitName: null,
        taxAuthorityCode: 'M1-23-NRCE6-00184480974',
        reservationId: null,
        typeInv: 2,
        productDiscountAmount: 0,
        description: '',
        billDate: '2023-05-19 14:22:50',
        payment: {
          paymentMethod: 'Tiền mặt',
          amount: 50000000,
          refund: 0,
          debtType: 0,
          debt: 0,
        },
        products: [
          {
            productProductUnitId: 7387,
            productName: 'Dopamine Addict',
            productCode: 'SP56',
            quantity: 1,
            unitId: 8347,
            unit: 'Bộ',
            unitPrice: 50000000,
            amount: 50000000,
            discountAmount: 0,
            totalPreTax: 50000000,
            vatRate: 0,
            vatAmount: 0,
            totalAmount: 50000000,
            feature: 1,
            position: 1,
            imageUrl:
              'http://14.225.17.199:8080/client/file/product/1432/20230519142303_CUsersADMINAppDataLocalTemplibCachedImageDataeb9d63e0f61511eda1a25f70a607b62e.png',
            isTopping: false,
            parentProductId: null,
          },
        ],
      };
    }
    this.lastCompany = await this.getCompany();
    if (!this.printConfigs || !this.printConfigs.length) {
      this.printConfigs = [];
      this.getAllPrintConfig();
    } else {
      this.printConfigMap = new Map<string, any>();
      this.printConfigs = this.printConfigs.filter(item => item.type === this.type);
      this.printConfigs.forEach(item => {
        item.value.isBoldItem = item.value.isBold;
        item.value.isPrintItem = item.value.isPrint;
        this.printConfigMap.set(item.value.code, item);
      });
    }
  }
  getAllPrintConfig() {
    this.configService.getAllPrintConfig(this.lastCompany.id).subscribe(res => {
      this.printConfigMap = new Map<string, any>();
      this.printConfigs = res.data;
      this.printConfigs.forEach(item => {
        item.value.isBoldItem = item.value.isBold;
        item.value.isPrintItem = item.value.isPrint;
        this.printConfigMap.set(item.value.code, item);
      });
    });
  }
  closeModal() {
    this.activeModal.close();
  }

  printInvoid() {
    this.statusPrint = !this.statusPrint;
    let printContents = document.getElementById('print');

    this.printService.print(printContents);
  }

  @HostListener('window:afterprint')
  onafterprint() {
    this.statusPrint = !this.statusPrint;
  }

  getValue(code: string) {
    let value =
      this.printConfigMap && this.printConfigMap.get(code) && this.printConfigMap.get(code).value
        ? this.printConfigMap.get(code).value
        : '';
    if (code === 'PortalLink') {
      this.genQrCode(value.content);
    }
    return value;
  }

  genQrCode(value: string) {
    if (value) {
      QRCode.toDataURL(value, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }
        this.urlQR = url;
        // In ra URL của mã QR (có thể sử dụng để hiển thị hoặc tải xuống)
      });
    }
  }

    protected readonly ICON_CANCEL = ICON_CANCEL;
}
