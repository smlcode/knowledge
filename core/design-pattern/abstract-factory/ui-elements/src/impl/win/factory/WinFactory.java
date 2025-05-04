package impl.win.factory;

import api.factory.GUIFactory;
import impl.win.product.WinButton;
import impl.win.product.WinCheckbox;

public class WinFactory implements GUIFactory {

    @Override
    public WinButton createButton() {
        return new WinButton();
    }

    @Override
    public WinCheckbox createCheckBox() {
        return new WinCheckbox();
    }
}
