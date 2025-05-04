package impl.creator;

import api.creator.Dialog;
import api.product.WindowsButton;

public class WindowsDialog extends Dialog {

    @Override
    public WindowsButton createButton() {
        return new WindowsButton();
    }

}
