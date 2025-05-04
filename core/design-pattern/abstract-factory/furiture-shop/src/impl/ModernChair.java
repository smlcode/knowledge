package api.product.impl;

import api.product.Chair;

public class ModernChair implements Chair {

    @Override
    public boolean hasLegs() {
        return false;
    }

    @Override
    public void sitOn() {}
}
