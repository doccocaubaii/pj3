package vn.hust.easypos.service.dto.bill;

import java.math.BigDecimal;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.*;
import vn.hust.easypos.web.rest.errors.ExceptionConstants;

public class BillCreateRequest {

    private Integer id;

    @NotNull(message = ExceptionConstants.COMPANY_ID_NOT_NULL)
    private Integer comId;

    @NotBlank(message = ExceptionConstants.CUSTOMER_NAME_NOT_NULL)
    private String customerName;

    @NotBlank(message = ExceptionConstants.BILL_DATE_NOT_NULL)
    private String billDate;

    @NotNull(message = ExceptionConstants.DELIVERY_TYPE_INVALID)
    @Min(value = 1, message = ExceptionConstants.DELIVERY_TYPE_INVALID)
    @Max(value = 3, message = ExceptionConstants.DELIVERY_TYPE_INVALID)
    private Integer deliveryType;

    @NotNull(message = ExceptionConstants.QUANTITY_INVALID)
    @Min(value = 0, message = ExceptionConstants.QUANTITY_INVALID)
    @Digits(integer = 21, fraction = 6, message = ExceptionConstants.QUANTITY_PRODUCT_INVALID)
    private BigDecimal quantity;

    @NotNull(message = ExceptionConstants.AMOUNT_NOT_NULL)
    @Digits(integer = 21, fraction = 6)
    private BigDecimal amount;

    @NotNull(message = ExceptionConstants.TOTAL_AMOUNT_NOT_NULL)
    @Digits(integer = 21, fraction = 6, message = ExceptionConstants.AMOUNT_INVALID)
    private BigDecimal totalAmount;

    @NotNull(message = ExceptionConstants.BILL_STATUS_IN_VALID)
    @Min(value = 0, message = ExceptionConstants.BILL_STATUS_IN_VALID)
    @Max(value = 1, message = ExceptionConstants.BILL_STATUS_IN_VALID)
    private Integer status;

    @Size(max = 512, message = ExceptionConstants.DESCRIPTION_MAX_LENGTH)
    private String description;

    @Valid
    private BillPaymentRequest payment;

    @NotNull(message = ExceptionConstants.PRODUCTS_NOT_NULL)
    @Valid
    private List<BillProductRequest> products;

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Integer getComId() {
        return comId;
    }

    public void setComId(Integer comId) {
        this.comId = comId;
    }

    public BillCreateRequest() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String messageException(String errorKey, String value) {
        return "code: " + errorKey + ", value: " + value;
    }

    public String getBillDate() {
        return billDate;
    }

    public void setBillDate(String billDate) {
        this.billDate = billDate;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Integer getDeliveryType() {
        return deliveryType;
    }

    public void setDeliveryType(Integer deliveryType) {
        this.deliveryType = deliveryType;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<BillProductRequest> getProducts() {
        return products;
    }

    public void setProducts(List<BillProductRequest> products) {
        this.products = products;
    }

    public BillPaymentRequest getPayment() {
        return payment;
    }

    public void setPayment(BillPaymentRequest payment) {
        this.payment = payment;
    }
}