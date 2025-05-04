package client;

import api.factory.FurnitureFactory;
import api.product.Chair;
import api.product.Sofa;

//Core logic
public class FurnitureApplication {
    private final FurnitureFactory factory;
    private Chair chair;
    private Sofa sofa;

    public FurnitureApplication(FurnitureFactory factory) {
        this.factory = factory;
    }

    public void initShop() {
        chair = factory.createChair();
        sofa = factory.createSofa();
    }

    public void showChairDetails() {
        System.out.println("Chair has legs: " + chair.hasLegs());
    }

    public void showSofaDetails() {
        System.out.println("Sofa seats: " + sofa.seats());
    }

}
