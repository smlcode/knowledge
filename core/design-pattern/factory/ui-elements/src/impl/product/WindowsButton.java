package api.product;

public class WindowsButton implements Button {
    @Override
    public void render() {
        System.out.println("Windows Button rendered");
    }
    @Override
    public void onClick() {
        System.out.println("Windows Button Clicked");
    }
}
