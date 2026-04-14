import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { 
    Box, 
    Grid, 
    Typography, 
    Card, 
    CardContent, 
    Button, 
    TextField,
    Container,
    Chip
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const ApiRyC = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [info, setInfo] = useState({})
    const [query, setQuery] = useState('')

    useEffect(() => {
        const source = axios.CancelToken.source()
        axios.get('https://rickandmortyapi.com/api/character', { params: { page, name: query }, cancelToken: source.token })
            .then(({ data }) => {
                setData(data.results || [])
                setInfo(data.info || {})
            })
            .catch((err) => {
                if (axios.isCancel(err)) return
                if (err.response?.status === 404) {
                    setData([])
                    setInfo({})
                    return
                }
                console.error(err)
            });
        return () => source.cancel()
    }, [page, query]);


    return (
        <Box sx={{ flexGrow: 1, py: 4, minHeight: '100vh', bgcolor: '#0f0f1a' }}>
            <Container maxWidth="lg">
                {/* Título */}
                <Typography variant='h3' sx={{ 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    mb: 2,
                    background: 'linear-gradient(135deg, #56c135, #8b5cf6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Rick y Morty
                </Typography>
                
                <Typography variant='h6' sx={{ 
                    textAlign: 'center', 
                    color: '#aaa', 
                    mb: 4 
                }}>
                    Explora el multiverso de personajes
                </Typography>

                {/* Buscador */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 6 
                }}>
                    <TextField
                        placeholder='Buscar personaje...'
                        value={query}
                        onChange={(c) => {
                            setQuery(c.target.value.trim())
                            setPage(1)
                        }}
                        sx={{ 
                            width: { xs: '100%', sm: '60%' },
                            '& .MuiOutlinedInput-root': {
                                bgcolor: 'rgba(26, 26, 46, 0.8)',
                                borderRadius: 3,
                                '& fieldset': {
                                    borderColor: 'rgba(86, 193, 53, 0.3)',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#56c135',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#56c135',
                                }
                            },
                            '& .MuiInputBase-input': {
                                color: '#fff',
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <SearchIcon sx={{ color: '#56c135', mr: 1 }} />
                            ),
                        }}
                    />
                </Box>

                {/* Grid de personajes */}
                {data.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant='h6' sx={{ color: '#666' }}>
                            No se encontraron personajes
                        </Typography>
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        {data?.map(char => (
                            <Grid item xs={12} sm={6} md={4} key={char.id}>
                                <Card sx={{ 
                                    bgcolor: '#1a1a2e',
                                    borderRadius: 3,
                                    border: '1px solid rgba(86, 193, 53, 0.2)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': { 
                                        transform: 'translateY(-8px)',
                                        border: '1px solid #56c135',
                                        boxShadow: '0 20px 40px rgba(86, 193, 53, 0.2)'
                                    }
                                }}>
                                    <CardContent sx={{ p: 0 }}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Box 
                                                component="img" 
                                                src={char.image} 
                                                alt={char.name}
                                                sx={{ 
                                                    width: '100%', 
                                                    height: 300, 
                                                    objectFit: 'cover',
                                                    borderRadius: '12px 12px 0 0'
                                                }}
                                            />
                                            <Chip 
                                                label={char.status}
                                                size="small"
                                                sx={{ 
                                                    position: 'absolute',
                                                    top: 10,
                                                    right: 10,
                                                    bgcolor: char.status === 'Alive' ? 'rgba(86, 193, 53, 0.9)' : 'rgba(244, 67, 54, 0.9)',
                                                    color: '#fff',
                                                    fontWeight: 'bold'
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ p: 2 }}>
                                            <Typography variant='h6' sx={{ 
                                                color: '#fff', 
                                                fontWeight: 'bold',
                                                mb: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {char.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography variant='body2' sx={{ color: '#aaa' }}>
                                                    {char.gender}
                                                </Typography>
                                                <Typography variant='body2' sx={{ color: '#8b5cf6' }}>
                                                    {char.species}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                        }
                    </Grid>
                )}

                {/* Botones de navegación */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: 3,
                    mt: 6,
                    mb: 4
                }}>
                    <Button
                        variant="outlined"
                        startIcon={<NavigateBeforeIcon />}
                        onClick={() => setPage(page - 1)}
                        disabled={!info.prev}
                        sx={{
                            borderColor: '#56c135',
                            color: '#56c135',
                            borderRadius: 3,
                            px: 3,
                            '&:hover': {
                                bgcolor: 'rgba(86, 193, 53, 0.1)',
                                borderColor: '#56c135'
                            },
                            '&:disabled': {
                                borderColor: '#333',
                                color: '#333'
                            }
                        }}
                    >
                        Anterior
                    </Button>
                    
                    <Chip 
                        label={`Página ${page}`}
                        sx={{
                            bgcolor: 'rgba(139, 92, 246, 0.2)',
                            color: '#8b5cf6',
                            fontWeight: 'bold',
                            px: 2
                        }}
                    />
                    
                    <Button
                        variant="outlined"
                        endIcon={<NavigateNextIcon />}
                        onClick={() => setPage(page + 1)}
                        disabled={!info.next}
                        sx={{
                            borderColor: '#56c135',
                            color: '#56c135',
                            borderRadius: 3,
                            px: 3,
                            '&:hover': {
                                bgcolor: 'rgba(86, 193, 53, 0.1)',
                                borderColor: '#56c135'
                            },
                            '&:disabled': {
                                borderColor: '#333',
                                color: '#333'
                            }
                        }}
                    >
                        Siguiente
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
