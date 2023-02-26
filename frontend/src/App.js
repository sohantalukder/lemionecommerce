import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/authentication/Login";
import Register from "./screens/authentication/Register";
import Cart from "./screens/cart/Cart";
import Footer from "./screens/components/Footer/Footer";
import Header from "./screens/components/Header/Header";
import Home from "./screens/Home/Home";
import Order from "./screens/Order/Order";
import Payment from "./screens/Payment/Payment";
import PlaceOrder from "./screens/PlaceOrder/PlaceOrder";
import Profile from "./screens/Profile/Profile";
import Shipping from "./screens/Shipping/Shipping";
import ViewProduct from "./screens/ViewProduct/ViewProduct";
import PrivateRoute from "./utils/ProtectedRoute/ProtectedRoute";
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <main className='App-header'>
                    <Routes>
                        {/* <Home /> */}
                        <Route exact path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/product/:id' element={<ViewProduct />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/cart'>
                            <Route
                                index
                                element={
                                    <PrivateRoute>
                                        <Cart />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path=':id'
                                element={
                                    <PrivateRoute>
                                        <Cart />
                                    </PrivateRoute>
                                }
                            />
                        </Route>
                        <Route
                            path='shipping'
                            element={
                                <PrivateRoute>
                                    <Shipping />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='payment'
                            element={
                                <PrivateRoute>
                                    <Payment />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='placeOrder'
                            element={
                                <PrivateRoute>
                                    <PlaceOrder />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path='order/:id'
                            element={
                                <PrivateRoute>
                                    <Order />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
