import client.Application;
import api.factory.GUIFactory;
import impl.win.factory.WinFactory;

public class AbstractFactoryMain {

    static GUIFactory factory;

    public static void main(String[] args) {

        factory = new WinFactory();
//        factory = new MacFactory();

        Application app = new Application(factory);

        app.createUI();
        app.paint();
    }
}
