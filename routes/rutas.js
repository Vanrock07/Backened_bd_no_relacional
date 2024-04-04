const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const proveedorController = require('../controllers/proveedorController');

//rutas del crud del cliente
router.post('/clientes', clienteController.agregarClientes);
router.get('/clientes', clienteController.buscarClientes);
router.get('/clientes/:id', clienteController.buscarPorId);
router.delete('/clientes/:id', clienteController.eliminarCliente);
router.put('/clientes/:id', clienteController.editarCliente);

//rutas del crud proveedor
router.post('/proveedores', proveedorController.agregarProvedores);
router.get('/proveedores', proveedorController.buscarProveedores);
router.get('/proveedores/:id', proveedorController.buscarProveedorPorId);
router.delete('/proveedores/:id', proveedorController.eliminarProveedor);
router.put('/proveedores/:id', proveedorController.editarProveedor);


module.exports = router;

