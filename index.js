const os = require('os');
const ffi = require('ffi');
const ref = require('ref');
let DLL = "BEMAFI32";
if (os.arch() =='x64') { DLL = "BEMAFI64" }
const bemafi = ffi.Library(DLL, {
    // relatórios
    'Bematech_FI_LeituraX': [ 'int',[]],
    'Bematech_FI_ReducaoZ': [ 'int',['string','string']], 
    //cupom fiscal
    'Bematech_FI_AbreCupom':['int',['string']],
    'Bematech_FI_VendeItem':['int',['string','string','string','string','string','int','string','string','string']],
    'Bematech_FI_CancelaItemAnterior':['int',[]],
    'Bematech_FI_CancelaItemGenerico':['int',['string']],
    'Bematech_FI_IniciaFechamentoCupom':['int',['string','string','string']],
    'Bematech_FI_EfetuaFormaPagamento':['int',['string','string']],
    'Bematech_FI_TerminaFechamentoCupom':['int',['string']],
    'Bematech_FI_FechaCupom':['int',['string','string','string','string','string','string']],
    'Bematech_FI_CancelaCupom':['int',[]]

  });

module.exports = function (){
      return bemafi;
}