package impl.win.product;

import api.product.Checkbox;

public class WinCheckbox implements Checkbox {
    @Override
    public void paint() {
        System.out.println("Windows Checkbox rendered");
    }
}
