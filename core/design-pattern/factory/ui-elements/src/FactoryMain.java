import api.creator.Dialog;
import impl.creator.WindowsDialog;

public class FactoryMain {

    static Dialog dialog;

    public static void main(String[] args) {


        //Configure
//        dialog = new WebDialogCreator();
        dialog = new WindowsDialog();

        dialog.render();
    }
}
