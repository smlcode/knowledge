package api.factory;

import api.product.Button;
import api.product.Checkbox;

public interface GUIFactory {

    Button createButton();

    Checkbox createCheckBox();
}
