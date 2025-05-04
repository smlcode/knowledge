package api.factory;

import api.product.Chair;
import api.product.Sofa;

//Abstract factory provides factory/creation functions for a group of products.
public interface FurnitureFactory {
    Chair createChair();

    Sofa createSofa();
}
