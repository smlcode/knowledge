package api.factory.impl;

import api.factory.FurnitureFactory;
import api.product.impl.ModernChair;
import api.product.impl.ModernSofa;

//Concrete factory provides the concreate products.
public class ModernFurnitureFactory implements FurnitureFactory {
    @Override
    public ModernChair createChair() {
        return new ModernChair();
    }
    @Override
    public ModernSofa createSofa() {
        return new ModernSofa();
    }

}
