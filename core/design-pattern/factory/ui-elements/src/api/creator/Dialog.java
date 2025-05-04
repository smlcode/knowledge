package api.creator;

import api.product.Button;

public abstract class Dialog {

    //Factory method
    public abstract Button createButton();

    /*
     Note that, despite its name, the creator's primary
     responsibility isn't creating products. It usually
     contains some core business logic that relies on product
     objects returned by the factory method. Subclasses can
     indirectly change that business logic by overriding the
     factory method and returning a different type of product
     from it.
     */
    public void render() {
        Button button = createButton();
        button.render();
        button.onClick();
    }
}
