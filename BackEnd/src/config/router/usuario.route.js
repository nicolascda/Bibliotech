import {listarReservas, buscarReserva} from "../controllers/reserva.controller.js"
import express from "express"


const route = express.Router();


route.get("/", listarReservas);
route.get("/:id", buscarReserva);



export default route;
