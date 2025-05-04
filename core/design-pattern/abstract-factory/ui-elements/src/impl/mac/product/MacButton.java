package impl.mac.product;

import api.product.Button;

public class MacButton implements Button {
    @Override
    public void paint() {
        System.out.println("Mac Button rendered");
    }
}
