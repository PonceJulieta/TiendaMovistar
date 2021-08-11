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

    interescp001(){
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
        this.samsung = 'manufacturer=75'
        return this
    }

    // font y estilo va en datosPage
    fontFamilies(){
        this.fonts = 'TelefonicaWeb-Bold, TelefonicaWeb-Regular, "Helvetica Neue", Verdana, Arial, sans-serif'
        return this
    }
    estiloBanner(){
        this.banner = ['TelefonicaWeb-Hand', '40px']
        return this
    }
    
    fontBold(){
        this.fontBold = 'TelefonicaWeb-Bold'
        return this
    }

    planesTV(){
        this.planes ='Planes de TV'
        return this
    }

    negocio(){
        this.negocios ='Negocios'
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