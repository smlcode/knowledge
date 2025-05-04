package api.product.impl;

import api.product.Chair;

public class VictorianChair implements Chair {
    @Override
    public boolean hasLegs() {
        return true;
    }
    @Override
    public void sitOn() {}
}
