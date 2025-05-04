package impl.win.product;

import api.product.Button;

public class WinButton implements Button {
    @Override
    public void paint() {
        System.out.println("Windows Button rendered");
    }
}
