package vn.hust.easypos.constants;

public interface UserConstants {
    interface Status {
        Integer ACTIVATE = 1;
        Integer INACTIVE = 0;
    }

    interface Manager {
        Boolean IS_MANAGER_TRUE = true;
        Boolean IS_MANAGER_FALSE = false;
    }

    String LANGKEY = "vi";
}