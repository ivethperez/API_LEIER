
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AlmacenesScalarFieldEnum = {
  Id: 'Id',
  Code: 'Code',
  Nombre: 'Nombre',
  Existencia_bolsas: 'Existencia_bolsas',
  Existencia_kg: 'Existencia_kg',
  CreadoFecha: 'CreadoFecha',
  UsuarioId: 'UsuarioId',
  FechaModificacion: 'FechaModificacion',
  ModificadoPor: 'ModificadoPor'
};

exports.Prisma.CategoriasProductoScalarFieldEnum = {
  Id: 'Id',
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.ClientesScalarFieldEnum = {
  Id: 'Id',
  Nombre: 'Nombre',
  Telefono: 'Telefono'
};

exports.Prisma.ComprasScalarFieldEnum = {
  Id: 'Id',
  Folio: 'Folio',
  TipoCompraId: 'TipoCompraId',
  ProveedorId: 'ProveedorId',
  ProductoId: 'ProductoId',
  InsumoId: 'InsumoId',
  Cantidad: 'Cantidad',
  CantidadRecibida: 'CantidadRecibida',
  CostoUnitario: 'CostoUnitario',
  PrecioUnitario: 'PrecioUnitario',
  FechaRecepcion: 'FechaRecepcion',
  CreadoFecha: 'CreadoFecha'
};

exports.Prisma.ImagenesProductosScalarFieldEnum = {
  Id: 'Id',
  URLImagen: 'URLImagen',
  ProductoId: 'ProductoId'
};

exports.Prisma.InsumosScalarFieldEnum = {
  Id: 'Id',
  Nombre: 'Nombre',
  Descripcion: 'Descripcion',
  Cantidad: 'Cantidad',
  CantidadRecibida: 'CantidadRecibida',
  CostoUnitario: 'CostoUnitario'
};

exports.Prisma.InventarioScalarFieldEnum = {
  Id: 'Id',
  CompraId: 'CompraId',
  ProductoId: 'ProductoId',
  CantidadRecibida: 'CantidadRecibida',
  AlmacenActualId: 'AlmacenActualId',
  FechaSurtido: 'FechaSurtido',
  SurtidoPorAlmacenId: 'SurtidoPorAlmacenId',
  RecibidoPorAlmacenId: 'RecibidoPorAlmacenId',
  CreadoFecha: 'CreadoFecha',
  CreadoPor: 'CreadoPor'
};

exports.Prisma.ListasPreciosScalarFieldEnum = {
  Id: 'Id',
  ProductoId: 'ProductoId',
  UnidadMedidaId: 'UnidadMedidaId',
  CostoUnitario: 'CostoUnitario',
  Utilidad: 'Utilidad',
  PrecioUnitario: 'PrecioUnitario',
  CreadoFecha: 'CreadoFecha',
  Vigente: 'Vigente'
};

exports.Prisma.MetodosPagoScalarFieldEnum = {
  Id: 'Id',
  code: 'code',
  Nombre: 'Nombre'
};

exports.Prisma.ProductosScalarFieldEnum = {
  Id: 'Id',
  Nombre: 'Nombre',
  Descripcion: 'Descripcion',
  Cantidad: 'Cantidad',
  EsPieza: 'EsPieza',
  CategoriaId: 'CategoriaId'
};

exports.Prisma.ProveedoresScalarFieldEnum = {
  Id: 'Id',
  Nombre: 'Nombre'
};

exports.Prisma.RolesUSuarioScalarFieldEnum = {
  Id: 'Id',
  Nombre: 'Nombre'
};

exports.Prisma.TiposCompraScalarFieldEnum = {
  Id: 'Id',
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.UnidadesMedidaScalarFieldEnum = {
  Id: 'Id',
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  Id: 'Id',
  Nombre: 'Nombre',
  RoleId: 'RoleId',
  UsuariosLeier: 'UsuariosLeier',
  Contrase_a: 'Contrase_a',
  CreadoFecha: 'CreadoFecha'
};

exports.Prisma.VentasScalarFieldEnum = {
  Id: 'Id',
  Folio: 'Folio',
  ProductoId: 'ProductoId',
  Cantidad: 'Cantidad',
  ClienteId: 'ClienteId',
  MetodoPagoId: 'MetodoPagoId',
  Pagado: 'Pagado',
  FechaPago: 'FechaPago',
  Observaciones: 'Observaciones',
  CreadoFecha: 'CreadoFecha'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AlmacenesOrderByRelevanceFieldEnum = {
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.CategoriasProductoOrderByRelevanceFieldEnum = {
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.ClientesOrderByRelevanceFieldEnum = {
  Nombre: 'Nombre',
  Telefono: 'Telefono'
};

exports.Prisma.ComprasOrderByRelevanceFieldEnum = {
  Folio: 'Folio'
};

exports.Prisma.ImagenesProductosOrderByRelevanceFieldEnum = {
  URLImagen: 'URLImagen'
};

exports.Prisma.InsumosOrderByRelevanceFieldEnum = {
  Nombre: 'Nombre',
  Descripcion: 'Descripcion'
};

exports.Prisma.MetodosPagoOrderByRelevanceFieldEnum = {
  code: 'code',
  Nombre: 'Nombre'
};

exports.Prisma.ProductosOrderByRelevanceFieldEnum = {
  Nombre: 'Nombre',
  Descripcion: 'Descripcion'
};

exports.Prisma.ProveedoresOrderByRelevanceFieldEnum = {
  Nombre: 'Nombre'
};

exports.Prisma.RolesUSuarioOrderByRelevanceFieldEnum = {
  Nombre: 'Nombre'
};

exports.Prisma.TiposCompraOrderByRelevanceFieldEnum = {
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.UnidadesMedidaOrderByRelevanceFieldEnum = {
  Code: 'Code',
  Nombre: 'Nombre'
};

exports.Prisma.UsuariosOrderByRelevanceFieldEnum = {
  Nombre: 'Nombre',
  UsuariosLeier: 'UsuariosLeier',
  Contrase_a: 'Contrase_a'
};

exports.Prisma.VentasOrderByRelevanceFieldEnum = {
  Folio: 'Folio',
  Observaciones: 'Observaciones'
};


exports.Prisma.ModelName = {
  Almacenes: 'Almacenes',
  CategoriasProducto: 'CategoriasProducto',
  Clientes: 'Clientes',
  Compras: 'Compras',
  ImagenesProductos: 'ImagenesProductos',
  Insumos: 'Insumos',
  Inventario: 'Inventario',
  ListasPrecios: 'ListasPrecios',
  MetodosPago: 'MetodosPago',
  Productos: 'Productos',
  Proveedores: 'Proveedores',
  RolesUSuario: 'RolesUSuario',
  TiposCompra: 'TiposCompra',
  UnidadesMedida: 'UnidadesMedida',
  Usuarios: 'Usuarios',
  Ventas: 'Ventas'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
