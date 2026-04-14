import React from 'react';
import { useFavorites } from '../../../context/FavoritesContext';
import { useCart } from '../../../context/CartContext';
import { 
    Container, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography, 
    Button, 
    Box 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Article = () => {
    const { addToFavorites, isFavorite } = useFavorites();
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: 'Rick Portal Gun', price: 29.99, stock: 15, image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=300&fit=crop', desc: 'Portal Gun funcional' },
        { id: 2, name: 'Morty Camiseta', price: 19.99, stock: 20, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop', desc: 'Camiseta oficial' },
        { id: 3, name: 'Pickle Rick Funko', price: 24.99, stock: 25, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', desc: 'Funko Pop coleccionable' },
        { id: 4, name: 'Summer Funko', price: 22.99, stock: 18, image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=300&fit=crop', desc: 'Funko Summer' },
        { id: 5, name: 'Beth Funko', price: 24.99, stock: 12, image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=300&fit=crop', desc: 'Funko Beth' },
        { id: 6, name: 'Jerry Funko', price: 19.99, stock: 30, image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=300&fit=crop', desc: 'Funko Jerry' },
    ];

    const handleAddToCart = (product) => addToCart(product);
    const handleAddToFavorites = (product) => addToFavorites(product);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#56c135', mb: 1 }}>
                    Productos
                </Typography>
                <Typography variant="body1" sx={{ color: '#aaa' }}>
                    Los mejores productos de Rick y Morty
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card sx={{ bgcolor: '#1a1a2e', height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
                                    {product.desc}
                                </Typography>
                                <Typography variant="h5" sx={{ color: '#56c135', fontWeight: 'bold' }}>
                                    ${product.price.toFixed(2)}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                <Button 
                                    variant="contained"
                                    startIcon={<ShoppingCartIcon />}
                                    onClick={() => handleAddToCart(product)}
                                    sx={{ bgcolor: '#56c135', color: '#000', '&:hover': { bgcolor: '#4caf50' } }}
                                >
                                    Comprar
                                </Button>
                                <Button
                                    variant={isFavorite(product.id) ? "contained" : "outlined"}
                                    color={isFavorite(product.id) ? "error" : "primary"}
                                    onClick={() => handleAddToFavorites(product)}
                                    startIcon={isFavorite(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                >
                                    {isFavorite(product.id) ? 'Fav' : 'Fav'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};