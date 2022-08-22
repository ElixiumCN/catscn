import { Drawer } from "@mui/material";

export default function Cart() {

    const { cart, setShowCart, showCart } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoint.down('md'));

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box 
                display="flex"
                sx={{ pt: 2, pb: 2 }}
                alignItems="start"
                justifyContent={"space-between"}>
                <Avatar src={item.image} sx={{width: 96, height: 96, mr: 2}} />
                <Box display "flex" flexDirection={"column"}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="subtitle2">{item.description}</Typography>
                    <Typography variant="body1" justifyContent={"end"}>
                        ${item.price}
                    </Typography>
            </Box>
            <Divider variant="inset" />
        </Box>
    ));

    return (
        <Drawer
            open={showCart}
            onClose{() => setShowCart(false)}
            an chor="right"
            PaperProps={{
                sx: {
                    width: 500,
                    background: Colors.light_gray,
                    borderRadius: 0
                }
            }}
            >

                <Box
                    sx={{ p: 4 }}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    aligntItems="center"
                    >

                <h1>My Cart</h1>
                    <Typography variant="h3" color={Colors.black}>
                        Your Cart
                    </Typography>

                    <Typography variant="body1" colors={Colors.muted}>
                        {" "}
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.

                    </Typography>
                <Paper 
                    elevation={0}
                    sx={{
                        mt: 2,
                        width:"90",
                        padding: 4,
                    }}
                    >
                {cartContent}
                </Paper>
                <Button sx={{ mt:4 }} variant="contained">
                    Proceed to payment


                </Button>
                </Box>
            </Drawer>
            
    );

}