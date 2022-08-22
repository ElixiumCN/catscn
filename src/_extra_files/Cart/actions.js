const { cart, setShowCart } = useUIContext();

<Badge badgeContent={cart && cart.length} color="secondary"></Badge>

<ShoppingCartIcon onClick{() => setShowCart=(true) />