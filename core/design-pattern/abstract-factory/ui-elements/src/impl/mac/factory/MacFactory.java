package impl.mac.factory;

import api.factory.GUIFactory;
import impl.mac.product.MacButton;
import impl.mac.product.MacCheckbox;

public class MacFactory implements GUIFactory {

    @Override
    public MacButton createButton() {
        return new MacButton();
    }

    @Override
    public MacCheckbox createCheckBox() {
        return new MacCheckbox();
    }
}
