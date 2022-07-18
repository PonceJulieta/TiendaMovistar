export default class movistarBuilder{
    constructor(){}
    build(){
        return this;
    }

    bancoCredicoop(){
        this.banco = 'Credicoop'
        return this
    }

    tarjetaMastercard(){
        this.tarjeta = 'Mastercard'
        return this
    }

    interes0(){
        this.interes= '0'
        return this
    }

    marcaLG(){
        this.lg = 'LG'
        return this
    }

    marcaSamsung(){
        this.samsung = 'Samsung'
        return this
    }

    seccionAyuda(){
        this.ayuda = 'Ayuda'
        return this
    }

    samsungurl(){
        this.samsung = 'manufacturer=49'
        return this
    }

    planesTV(){
        this.planes ='Planes de TV'
        return this
    }

    negocio(){
        this.negocios ='Empresas'
        return this
    }

    noenNegocio(){
        this.listaNo = ["Prepago", "Cambio de Plan", "Packs Postpago", "Servicios para tu línea"]
        return this
    }

    listaMenu(){
        this.listaMenu = ["Tienda", "Productos y Servicios", "Ayuda", "Beneficios"]
        return this
    }


}