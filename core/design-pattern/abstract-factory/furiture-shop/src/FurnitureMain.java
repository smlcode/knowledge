import client.FurnitureApplication;
import api.factory.FurnitureFactory;
import api.factory.impl.ModernFurnitureFactory;
import api.factory.impl.VictorianFurnitureFactory;

public class FurnitureMain {

    static FurnitureFactory factory;

    public static void main(String[] args) {

        //Configurable
//        String factoryTypeConfig = "victorian";
        String factoryTypeConfig = "modern";

        if (factoryTypeConfig.equals("modern")) {
            factory = new ModernFurnitureFactory();
        } else if (factoryTypeConfig.equals("victorian")) {
            factory = new VictorianFurnitureFactory();
        }

        FurnitureApplication app = new FurnitureApplication(factory);
        app.initShop();

        app.showSofaDetails();
        app.showChairDetails();
    }
}