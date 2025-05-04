package api.factory.impl;

import api.factory.FurnitureFactory;
import api.product.impl.VictorianChair;
import api.product.impl.VictorianSofa;

public class VictorianFurnitureFactory implements FurnitureFactory {

    @Override
    public VictorianChair createChair() {
        return new VictorianChair();
    }

    @Override
    public VictorianSofa createSofa() {
        return new VictorianSofa();
    }
}
