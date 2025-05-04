package impl.creator;

import api.creator.Dialog;
import api.product.HTMLButton;

public class WebDialog extends Dialog {

    @Override
    public HTMLButton createButton() {
        return new HTMLButton();
    }
}
