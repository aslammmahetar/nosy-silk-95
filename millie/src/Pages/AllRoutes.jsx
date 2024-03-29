import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import AboutUs from "./AboutUs";
import Classes from "./Classes";
import { ChakraProvider } from "@chakra-ui/react";
import { Testimonial } from "./Testimonial";
import ContactUS from "./ContactUS";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import ViewAllClasses from "./ViewAllClasses";
import PaymentPage from "./PaymentPage";
import CreateNewAccount from "../Conmponets/ClassesComp/CreateNewAccount";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ChakraProvider>
            <Home />
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/about-us"
        element={
          <ChakraProvider>
            <AboutUs />
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/classes"
        element={
          <ChakraProvider>
            <Provider store={store}>
              <Classes />
            </Provider>
          </ChakraProvider>
        }
      ></Route>
      <Route path="/testimonial" element={<Provider store={store}><Testimonial /></Provider>}></Route>

      <Route
        path="/contact-us"
        element={
          <ChakraProvider>
            <ContactUS />
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/createaccount"
        element={
          <ChakraProvider>
            <Provider store={store}>
              <CreateNewAccount />
            </Provider>
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/classes/all-classes"
        element={
          <ChakraProvider>
            <Provider store={store}>
              <ViewAllClasses />
            </Provider>
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/classes/all-classes/paymentpage"
        element={
          <ChakraProvider>
            <Provider store={store}>
              <PaymentPage />
            </Provider>
          </ChakraProvider>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
