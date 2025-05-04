package impl.mac.product;

import api.product.Checkbox;

public class MacCheckbox implements Checkbox {
    @Override
    public void paint() {
        System.out.println("Mac Checkbox rendered");
    }
}
