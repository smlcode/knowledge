package api.product;

public class HTMLButton implements Button {
    @Override
    public void render() {
    System.out.println("HTML Button rendered");
    }

    @Override
    public void onClick() {
        System.out.println("HTML Button Clicked");
    }
}
